import { Suspense, useState } from "react";
import {
    OrbitControls,
    Environment,
    Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import FloorModel from "../../disease-pneumonia/models-3d/FloorModel";
import LungQuizModel from "../model-3d/LungQuizModel";
import Html3D from "../../disease-pneumonia/components/Html3D";
import Button from "../../../layout/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuizV2 = () => {
    const [question, setQuestion] = useState<number | null>(null);

    const QUESTIONS_QUIZ = [
        "Seleccione la traquea",
        "Seleccione los pulmones",
        "Seleccione el Diafraam",
    ];

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Canvas
                    camera={{ position: [0, 0, 7] }}
                    style={{ height: "70vh", width: "100%" }}
                    shadows={true}
                >
                    <OrbitControls
                        enableZoom={true}
                        enableRotate={true}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                    />
                    <ambientLight intensity={1.5} />
                    <directionalLight
                        color="white"
                        position={[1, 5, 5]}
                        intensity={8}
                        castShadow={true}
                    />
                    <Environment preset="city" background={false} />

                    {question == null && (
                        <>
                            <Text
                                color={"#7587EB"}
                                position={[0.5, 2.5, 2.5]}
                                font="/fonts/retro.ttf"
                            >
                                Presione "Iniciar"
                            </Text>

                            <Html3D transform={false} position={[0, -2.8, 2.5]} distanceFactor={18} >
                                <Button
                                    label="Iniciar"
                                    color="purple"
                                    px={2}
                                    py={1}
                                    onClick={() => setQuestion(0)}
                                />
                            </Html3D>
                        </>
                    )}
                    {question !== null && question < 3 && (
                        <>
                            <Text
                                color={"#7587EB"}
                                position={[0.5, 2.5, 2.5]}
                                font="/fonts/retro.ttf"
                            >
                                {QUESTIONS_QUIZ[question]}
                            </Text>

                            {question > 0 && (
                                <Html3D transform={false} position={[-3.5, -2.8, 2.5]} distanceFactor={18} >
                                    <Button
                                        label=""
                                        color="purple"
                                        px={3}
                                        py={1}
                                        icon={<ChevronLeft className="p-0 m-0" />}
                                        onClick={() => setQuestion(question - 1)}
                                    />
                                </Html3D>
                            )}

                            <Html3D transform={false} position={[3.5, -2.8, 2.5]} distanceFactor={18} >
                                <Button
                                    label=""
                                    color="purple"
                                    px={3}
                                    py={1}
                                    icon={<ChevronRight className="p-0 m-0" />}
                                    onClick={() => setQuestion(question + 1)}
                                />
                            </Html3D>


                        </>

                    )}

                    {question == 3 && (
                        <Html3D transform={false} position={[0, -2.8, 2.5]} distanceFactor={18} >
                            <Button
                                label="Finalizar"
                                color="purple"
                                px={1}
                                py={1}
                                onClick={() => setQuestion(0)}
                            />
                        </Html3D>
                    )}

                    <LungQuizModel scale={30} position={[0, 0, 0.8]} castShadow />




                    <FloorModel />
                </Canvas>
            </Suspense>
        </>
    );
};

export default QuizV2;
