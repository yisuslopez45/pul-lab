import { Suspense, useCallback, useRef } from "react";
import { OrbitControls, Environment, PositionalAudio } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LungModel from "../models-3d/LungModel";
import useStoreLung from "../store/useStoreLung";
import Button from "../../../layout/components/Button";
import FloorModel from "../models-3d/FloorModel";
import Spinner from "../../../layout/components/Spinner";
import { PositionalAudio as PositionalAudioType } from "three";
import Html3D from "../components/Html3D";


const Lung = () => {
    const { setStateAnimation, isActiveAnimation } = useStoreLung()
    const audioRef = useRef<PositionalAudioType>(null)

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (audioRef.current) {

            if (!isActiveAnimation) {
                audioRef.current.play()
                audioRef.current.setVolume(10)
            } else {
                audioRef.current.stop()
            }
        }

        setStateAnimation(!isActiveAnimation);
    }, [setStateAnimation, isActiveAnimation]);

    return (
        <>

            <Suspense fallback={<Spinner />}>
                <Canvas camera={{ position: [2, 0, 6] }} style={{ height: "70vh", width: "100%" }} shadows={true}   >

                    <Html3D transform={false} position={[0, 4, 0]} distanceFactor={18} >
                        <Button
                            px={3}
                            py={2}
                            onClick={handleClick}
                            label="Interactuar"
                            color={!isActiveAnimation ? 'amber' : 'green'}
                        />

                    </Html3D>

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
                    <LungModel scale={30} position={[0, -1, 0.8]} castShadow />

                    <group>
                        <PositionalAudio
                            ref={audioRef}
                            loop
                            url="/sounds/breathing.mp3"
                            distance={5}
                        />
                    </group>

                    <FloorModel />
                </Canvas>

            </Suspense>
        </>
    )
}

export default Lung;