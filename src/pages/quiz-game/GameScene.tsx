import { FC, useState, useEffect, Suspense } from 'react';
import { useThree, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { GameState, ProjectileState, AnswerState } from './Interfaces'; 
import { quizData } from './QuizData'; 
import { AnswerObject } from './components/AnswerObject';
import { Projectile } from './components/Proyectile';
import { Cannon } from './components/Cannon';
import { WorldBounds } from './components/WorldBounds';


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
        if (gameState.status !== 'not-started') {
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
            setGameState(prev => ({ 
                ...prev, 
                score: prev.score + potentialScore, 
                status: 'feedback', 
                feedback: `¡Correcto! +${potentialScore} puntos` 
            }));
            
            setTimeout(() => {
                const nextIndex = gameState.currentQuestionIndex + 1;
                if (nextIndex < quizData.length) {
                    setGameState(prev => ({ ...prev, currentQuestionIndex: nextIndex, status: 'playing', feedback: '' }));
                } else {
                    setGameState(prev => ({ ...prev, status: 'gameOver', feedback: '¡Quiz Completado!' }));
                }
            }, 1500);

        } else {
            // CAMBIO: Si la respuesta es incorrecta, solo se reduce la puntuación potencial.
            // El juego no se detiene ni muestra un feedback de "Incorrecto".
            setPotentialScore(prev => Math.max(0, prev - 10));
        }
    };

    const handleAnswerMiss = () => {
        if (gameState.status !== 'playing') return;

        setGameState(prev => ({ ...prev, status: 'feedback', feedback: '¡Tiempo agotado!' }));

        setTimeout(() => {
            const nextIndex = gameState.currentQuestionIndex + 1;
            if (nextIndex < quizData.length) {
                setGameState(prev => ({ ...prev, currentQuestionIndex: nextIndex, status: 'playing', feedback: '' }));
            } else {
                setGameState(prev => ({ ...prev, status: 'gameOver', feedback: '¡Quiz Completado!' }));
            }
        }, 1500);
    };
    
    const currentQuestion = quizData[gameState.currentQuestionIndex];

    const resetGame = () => {
        setGameState({ score: 0, currentQuestionIndex: 0, status: 'playing', feedback: ''});
    }

    const startGame = () => {
        setGameState(prev => ({ ...prev, status: 'playing' }));
    }

    const handleSaveScore = () => {
        console.log(`Puntuación guardada: ${gameState.score}`);
        alert(`Puntuación de ${gameState.score} guardada (revisa la consola).`);
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
                                    Iniciar Intento
                                </button>
                            </div>
                        )}

                        {gameState.status !== 'not-started' && (
                            <>
                                <h1 style={{ margin: 0, fontSize: '2em' }}>Quiz de Enfermedades Pulmonares</h1>
                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', fontSize: '1.5em' }}>
                                    <span>Puntuación: {gameState.score}</span>
                                    {/* AÑADIDO: Muestra los puntos que vale la pregunta actual */}
                                    {gameState.status === 'playing' && <span>Puntos por Acertar: {potentialScore}</span>}
                                    <span>Pregunta: {gameState.currentQuestionIndex + 1} / {quizData.length}</span>
                                </div>
                                <h2 style={{ marginTop: '20px', minHeight: '50px' }}>
                                    {gameState.status !== 'gameOver' ? currentQuestion.question : ''}
                                </h2>
                                <div style={{ fontSize: '2em', color: 'yellow', minHeight: '40px' }}>{gameState.feedback}</div>
                                
                                {gameState.status === 'gameOver' && (
                                    <div style={{marginTop: '20px'}}>
                                        <button onClick={handleSaveScore} style={{padding: '10px 20px', fontSize: '1.2em', cursor: 'pointer', pointerEvents: 'auto', marginRight: '10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px'}}>
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

                <Physics gravity={[0, -1.5, 0]} paused={gameState.status === 'not-started'}>
                    <WorldBounds />
                    <Cannon onHitByAnswer={handleAnswerMiss} />
                    
                    {/* CAMBIO: Ahora los objetos se renderizan también en el estado 'feedback' para que no desaparezcan al acertar */}
                    {(gameState.status === 'playing' || gameState.status === 'feedback') && (
                        <>
                            {projectiles.map(p => (
                                <Projectile 
                                    key={p.id} 
                                    position={p.position} 
                                    onRemove={() => setProjectiles(projs => projs.filter(proj => proj.id !== p.id))}
                                />
                            ))}
                            
                            {answers.map(a => (
                                <AnswerObject
                                    key={a.id}
                                    position={a.position}
                                    option={a.option}
                                    isCorrect={a.isCorrect}
                                    onHit={handleAnswerHit}
                                    onMiss={handleAnswerMiss}
                                />
                            ))}
                        </>
                    )}
                </Physics>
            </Suspense>
        </>
    );
}
