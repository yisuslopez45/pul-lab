import { Suspense, useCallback, useRef } from "react";
import { OrbitControls, Environment, Html, PositionalAudio } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from 'three';
import FloorModel from "../models-3d/FloorModel";
import { LungTuberculosisModel } from "../models-3d/LungTuberculosisModel";
import Html3D from "../../disease-pneumonia/components/Html3D";
import Button from "../../../layout/components/Button";
import useStoreLung from "../../disease-pneumonia/store/useStoreLung";
import { PositionalAudio as PositionalAudioType } from "three";
import Spinner from "../../../layout/components/Spinner";
import AlertText3D from "../../disease-pneumonia/texts/AlertText3D";


const TuberculosisCanva = () => {
    const { setStateAnimation , isActiveAnimation} = useStoreLung()
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

    const position = new Vector3(0,-32,-9);

    return (
        <>
        <Suspense fallback={<Spinner />}>
            <Canvas camera={{ position: [2, 0, 50] }}  style={{ height: "70vh", width: "100%" }} shadows={true}> 
                <Html3D transform={false} position={[0, 30, 0]} distanceFactor={40} >
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
                <ambientLight  intensity={1.5} />
                <directionalLight
                    castShadow
                    position={[10, 50, 10]}
                    intensity={5}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-near={1}
                    shadow-camera-far={100}
                    shadow-camera-left={-50}
                    shadow-camera-right={50}
                    shadow-camera-top={50}
                    shadow-camera-bottom={-50}
                    />

                <pointLight
                    color={'cyan'}
                    position={[2, 5, 5]}
                    intensity={20}
                    castShadow={true}
                />
                {/* <directionalLight
                     color="white"
                     position={[1, 5, 5]} 
                     intensity={4}
                     castShadow={true}
                /> */}
                <Environment preset="night" background={true} />
                <LungTuberculosisModel scale={100} position={[0,-1,0.8]} castShadow  />
                <Html center>
                    {/* <Button onClick={handleClick} label="Pulmón" color="violet" /> */}
                </Html>
                <group>
                    <PositionalAudio
                        ref={audioRef}
                        loop
                        url="/sounds/breathing.mp3"
                        distance={5}
                    />
                </group>
                <FloorModel color="#3F72AF" position={position} metalnesVal={1} roughness={0.7}  />
                    <AlertText3D
                        text={`PULMON AFECTADO `} 
                        height={0.1} 
                        size={3} 
                        position={ [-17, -5, 30]} 
                    />
                {/* <Html3D position={[0,0,40]} transform={false} >
                    <h1>
                        Camiloooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                    </h1>
                </Html3D> */}
            </Canvas>
        </Suspense>
        </>
    )
}

export default TuberculosisCanva;