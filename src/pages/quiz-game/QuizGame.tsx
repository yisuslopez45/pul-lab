"use client";
import { Canvas } from '@react-three/fiber';
import { GameScene } from './GameScene';

const QuizGame = () => {
    return (
        <div className="my-2 w-full p-6 bg-indigo-900/80 rounded-lg border-4 border-indigo-700">
            <div className="text-center">

            </div>
            <div className="mt-6 h-[80vh] text-center p-4 bg-indigo-950 rounded border-2 border-indigo-800">
                <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                    <GameScene />
                </Canvas>
            </div>
        </div>
    )
}

export default QuizGame