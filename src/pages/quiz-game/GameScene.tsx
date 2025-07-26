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
        status: 'playing',
        feedback: '',
    });
    
    const [projectiles, setProjectiles] = useState<ProjectileState[]>([]);
    const [answers, setAnswers] = useState<AnswerState[]>([]);
    const [potentialScore, setPotentialScore] = useState(30);

    // generar bloques.
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

    // cambio de pregunta
    useEffect(() => {
        spawnAnswers(gameState.currentQuestionIndex);
        setPotentialScore(30); // Reinicia la puntuación potencial para la nueva pregunta.
    }, [gameState.currentQuestionIndex, viewport.width]);
    
    // evento de disparo.
    const handleShoot = (event: ThreeEvent<globalThis.PointerEvent>) => {
        if (gameState.status !== 'playing') return;
        
        const cannonX = (event.pointer.x * viewport.width) / 2;
        const newProjectile = {
            id: Date.now(),
            position: [cannonX, -viewport.height / 2 + 2, 0] as [number, number, number],
        };
        setProjectiles(prev => [...prev, newProjectile]);
    };

    // colision con bloque de respuesta.
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
            setPotentialScore(prev => Math.max(0, prev - 10));
            setGameState(prev => ({ ...prev, status: 'feedback', feedback: 'Incorrecto. ¡Intenta de nuevo!' }));
            setTimeout(() => {
                 setGameState(prev => ({ ...prev, status: 'playing', feedback: '' }));
            }, 1500);
        }
    };

    // bloques de respuesta llegaron al piso o colision con jugador
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

    // reiniciar el juego.
    const resetGame = () => {
        setGameState({ score: 0, currentQuestionIndex: 0, status: 'playing', feedback: ''});
    }

    return (
        <>
            <Html fullscreen style={{ pointerEvents: 'none' }}>
                <div style={{
                    width: '100%', height: '100%', fontFamily: 'Arial, sans-serif'
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', padding: '20px', color: 'white', 
                        textAlign: 'center'
                    }}>
                        <h1 style={{ margin: 0, fontSize: '2em' }}>Quiz de Enfermedades Pulmonares</h1>
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', fontSize: '1.5em' }}>
                            <span>Puntuación: {gameState.score}</span>
                            <span>Pregunta: {gameState.currentQuestionIndex + 1} / {quizData.length}</span>
                        </div>
                        <h2 style={{ marginTop: '20px', minHeight: '50px' }}>
                            {gameState.status !== 'gameOver' ? currentQuestion.question : ''}
                        </h2>
                        <div style={{ fontSize: '2em', color: 'yellow', minHeight: '40px' }}>{gameState.feedback}</div>
                        {gameState.status === 'gameOver' && (
                            <button onClick={resetGame} style={{padding: '10px 20px', fontSize: '1.2em', cursor: 'pointer', pointerEvents: 'auto'}}>
                                Jugar de Nuevo
                            </button>
                        )}
                    </div>
                </div>
            </Html>

            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                
                {/* obtener clicks */}
                <mesh onClick={handleShoot} position-z={-1}>
                    <planeGeometry args={[viewport.width, viewport.height]}/>
                    <meshBasicMaterial visible={false} />
                </mesh>

                {/* Contenedor de fisicas */}
                <Physics gravity={[0, -1.5, 0]}>
                    <WorldBounds />
                    <Cannon onHitByAnswer={handleAnswerMiss} />

                    {/* Renderiza proyectil */}
                    {projectiles.map(p => (
                        <Projectile 
                            key={p.id} 
                            position={p.position} 
                            onRemove={() => setProjectiles(projs => projs.filter(proj => proj.id !== p.id))}
                        />
                    ))}
                    
                    {/* Renderiza los bloques */}
                    {(gameState.status === 'playing' || gameState.status === 'feedback') && answers.map(a => (
                        <AnswerObject
                            key={a.id}
                            position={a.position}
                            option={a.option}
                            isCorrect={a.isCorrect}
                            onHit={handleAnswerHit}
                            onMiss={handleAnswerMiss}
                        />
                    ))}
                </Physics>
            </Suspense>
        </>
    );
}
