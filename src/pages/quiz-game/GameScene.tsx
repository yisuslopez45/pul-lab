import { FC, useState, useEffect, Suspense } from 'react';
import { useThree, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { GameState, ProjectileState, AnswerState, SavedProgress } from './Interfaces'; 
import { quizData } from './QuizData'; 
import { AnswerObject } from './components/AnswerObject';
import { Projectile } from './components/Proyectile';
import { Cannon } from './components/Cannon';
import { WorldBounds } from './components/WorldBounds';

// Simulación de datos de un juego guardado. ESTO DEBRIA TRAER EL USUARIO EN SU ULTIMO INTENTO
const mockSavedGame: SavedProgress | null = {
    score: 100,
    lastQuestionIndex: 3, 
    status: "finished",
    totalErrors: 3 
};

export const GameScene: FC = () => {
    const { viewport } = useThree();
    
    const [gameState, setGameState] = useState<GameState>({
        score: 0,
        currentQuestionIndex: 0,
        status: 'not-started',
        feedback: '',
    });
    
    const [projectiles, setProjectiles] = useState<ProjectileState[]>([]);
    const [answers, setAnswers] = useState<AnswerState[]>([]);
    const [totalErrors, setTotalErrors] = useState(0);
    const [potentialScore, setPotentialScore] = useState(30);

    const spawnAnswers = (questionIndex: number) => {
        const question = quizData[questionIndex];
        const newAnswers = question.options.map((option, i) => ({
            id: `${questionIndex}-${i}-${Date.now()}`,
            option: option,
            isCorrect: option === question.correctAnswer,
            position: [(Math.random() - 0.5) * (viewport.width - 4), 8 + i * 2, 0] as [number, number, number],
        }));
        setAnswers(newAnswers);
    };

    useEffect(() => {
        if (gameState.status === 'playing') {
            spawnAnswers(gameState.currentQuestionIndex);
            setPotentialScore(30);
        }
    }, [gameState.status, gameState.currentQuestionIndex, viewport.width]);
    
    const handleShoot = (event: ThreeEvent<globalThis.PointerEvent>) => {
        if (gameState.status !== 'playing') return;
        const cannonX = (event.pointer.x * viewport.width) / 2;
        const newProjectile = {
            id: Date.now(),
            position: [cannonX, -viewport.height / 2 + 2, 0] as [number, number, number],
        };
        setProjectiles(prev => [...prev, newProjectile]);
    };

    const handleAnswerHit = (isCorrect: boolean) => {
        if (gameState.status !== 'playing') return;

        if (isCorrect) {
            const isLastQuestion = gameState.currentQuestionIndex === quizData.length - 1;
            
            setGameState(prev => ({ 
                ...prev, 
                score: prev.score + potentialScore, 
                status: isLastQuestion ? 'gameOver' : 'intermission', 
                feedback: isLastQuestion ? '¡Quiz Completado!' : `¡Correcto! +${potentialScore} puntos` 
            }));
        } else {
            // Se actualizan ambos contadores de errores.
            setTotalErrors(prev => prev + 1);
            setPotentialScore(prev => Math.max(0, prev - 10));
        }
    };

    const handleAnswerMiss = () => {
        if (gameState.status !== 'playing') return;
        const isLastQuestion = gameState.currentQuestionIndex === quizData.length - 1;

        setGameState(prev => ({ 
            ...prev, 
            status: isLastQuestion ? 'gameOver' : 'intermission', 
            feedback: isLastQuestion ? '¡Quiz Completado!' : '¡Tiempo agotado!' 
        }));
    };
    
    const currentQuestion = quizData[gameState.currentQuestionIndex];

    const resetGame = () => {
        setGameState({ score: 0, currentQuestionIndex: 0, status: 'playing', feedback: ''});
        setTotalErrors(0);
    }

    const startGame = () => {
        if (mockSavedGame && mockSavedGame.status === "not-finished") {
            setGameState({
                score: mockSavedGame.score,
                currentQuestionIndex: mockSavedGame.lastQuestionIndex + 1,
                status: 'playing',
                feedback: 'Continuando partida...'
            });
            setTotalErrors(mockSavedGame.totalErrors);
        } else {
            setGameState({
                score: 0,
                currentQuestionIndex: 0,
                status: 'playing',
                feedback: ''
            });
            setTotalErrors(0);
        }
    }
    
    const handleContinue = () => {
        const progressData: SavedProgress = {
            score: gameState.score,
            lastQuestionIndex: gameState.currentQuestionIndex, 
            status: "not-finished",
            totalErrors: totalErrors
        };

        const nextIndex = gameState.currentQuestionIndex + 1;

        if (nextIndex < quizData.length) {

            console.log("JSON de progreso para guardar:", JSON.stringify(progressData, null, 2));
            setGameState(prev => ({ ...prev, currentQuestionIndex: nextIndex, status: 'playing', feedback: '' }));
        } else {
            console.log("JSON de progreso para guardar:", JSON.stringify(progressData, null, 2));
            setGameState(prev => ({ ...prev, status: 'gameOver', feedback: '¡Quiz Completado!' }));
        }
    };

    const handleSaveAndExit = () => {
        const progressData: SavedProgress = {
            score: gameState.score,
            lastQuestionIndex: gameState.currentQuestionIndex, 
            status: "not-finished",
            totalErrors: totalErrors
        };
        console.log("JSON de progreso para guardar:", JSON.stringify(progressData, null, 2));
        setGameState({ score: 0, currentQuestionIndex: 0, status: 'not-started', feedback: 'Progreso guardado'});
    };

    const handleSaveFinalScore = () => {
        const finalData: SavedProgress = {
            score: gameState.score,
            lastQuestionIndex: gameState.currentQuestionIndex,
            status: "finished",
            totalErrors: totalErrors
        };
        console.log("JSON de puntuación final para guardar:", JSON.stringify(finalData, null, 2));
        alert(`Puntuación final de ${gameState.score} guardada (revisa la consola).`);
    };

    return (
        <>
            <Html fullscreen style={{ pointerEvents: 'none' }}>
                <div style={{ width: '100%', height: '100%', fontFamily: 'Arial, sans-serif' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '20px', color: 'white', textAlign: 'center' }}>
                        
                        {gameState.status === 'not-started' && (
                             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                                <h1 style={{ margin: 0, fontSize: '2.5em' }}>Quiz de Enfermedades Pulmonares</h1>
                                <button onClick={startGame} style={{padding: '15px 30px', fontSize: '1.5em', cursor: 'pointer', pointerEvents: 'auto', marginTop: '20px', borderRadius: '10px', border: 'none', background: 'gold', color: 'black'}}>
                                    {mockSavedGame && mockSavedGame.status === "not-finished" ? 'Continuar Intento' : 'Iniciar Intento'}
                                </button>
                                {gameState.feedback && <p style={{marginTop: '10px', fontSize: '1.2em'}}>{gameState.feedback}</p>}
                            </div>
                        )}

                        {gameState.status !== 'not-started' && (
                            <>
                                <h1 style={{ margin: 0, fontSize: '2em' }}>Quiz de Enfermedades Pulmonares</h1>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', fontSize: '1.5em' }}>
                                    <span>Puntuación: {gameState.score}</span>
                                    <span>Puntos por Acertar: {potentialScore}</span>
                                    {/* <span>Errores Totales: {totalErrors}</span> */}
                                    <span>Pregunta: {gameState.currentQuestionIndex + 1} / {quizData.length}</span>
                                </div>
                                <h2 style={{ marginTop: '20px', minHeight: '50px' }}>
                                    {gameState.status !== 'gameOver' && gameState.status !== 'intermission' ? currentQuestion?.question : ''}
                                </h2>
                                <div style={{ fontSize: '2em', color: 'yellow', minHeight: '40px' }}>
                                    {gameState.status === 'intermission' ? gameState.feedback : ''}
                                </div>
                                
                                {gameState.status === 'intermission' && (
                                    <div style={{
                                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                                        background: 'rgba(0, 0, 0, 0.7)', display: 'flex', flexDirection: 'column',
                                        justifyContent: 'center', alignItems: 'center', zIndex: 100
                                    }}>
                                        <h2 style={{fontSize: '3em', marginBottom: '20px'}}>Pregunta Completada</h2>
                                        <button onClick={handleContinue} style={{padding: '10px 20px', fontSize: '1.2em', cursor: 'pointer', pointerEvents: 'auto', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px'}}>
                                            Siguiente Pregunta
                                        </button>
                                        <button onClick={handleSaveAndExit} style={{padding: '10px 20px', fontSize: '1.2em', cursor: 'pointer', pointerEvents: 'auto', background: '#f44336', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px'}}>
                                            Guardar y Salir
                                        </button>
                                    </div>
                                )}

                                {gameState.status === 'gameOver' && (
                                    <div style={{marginTop: '20px'}}>
                                        <h2 style={{fontSize: '2.5em'}}>Puntuación Final: {gameState.score}</h2>
                                        <button onClick={handleSaveFinalScore} style={{padding: '10px 20px', fontSize: '1.2em', cursor: 'pointer', pointerEvents: 'auto', marginRight: '10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px'}}>
                                            Guardar Puntuación
                                        </button>
                                        <button onClick={resetGame} style={{padding: '10px 20px', fontSize: '1.2em', cursor: 'pointer', pointerEvents: 'auto', background: '#f44336', color: 'white', border: 'none', borderRadius: '5px'}}>
                                            Volver a Jugar
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </Html>

            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <mesh onClick={handleShoot} position-z={-1}>
                    <planeGeometry args={[viewport.width, viewport.height]}/>
                    <meshBasicMaterial visible={false} />
                </mesh>

                <Physics gravity={[0, -1.5, 0]} paused={gameState.status !== 'playing'}>
                    <WorldBounds />
                    <Cannon onHitByAnswer={handleAnswerMiss} />
                    
                    {gameState.status === 'playing' && (
                        <>
                            {projectiles.map(p => (
                                <Projectile key={p.id} position={p.position} onRemove={() => setProjectiles(projs => projs.filter(proj => proj.id !== p.id))} />
                            ))}
                            {answers.map(a => (
                                <AnswerObject key={a.id} position={a.position} option={a.option} isCorrect={a.isCorrect} onHit={handleAnswerHit} onMiss={handleAnswerMiss} />
                            ))}
                        </>
                    )}
                </Physics>
            </Suspense>
        </>
    );
}
