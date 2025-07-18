import { Suspense, useCallback, useMemo } from "react";
import { OrbitControls, Environment, Html, KeyboardControlsEntry, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
//import Button from "../../../layout/components/Button";
import { Vector3 } from 'three';
import FloorModel from "../models-3d/FloorModel";
import AlertText3D from "../../disease-pneumonia/texts/AlertText3D";
import Html3D from "../../disease-pneumonia/components/Html3D";
import Button from "../../../layout/components/Button";
import useStoreLung from "../../disease-pneumonia/store/useStoreLung";
import Spinner from "../../../layout/components/Spinner";
import { TreatmentTuberculosisModel } from "../models-3d/TreatmentTuberculosisModel";

enum Controls {
    animation = "animation",
}
const TreatmentCanva = () => {
    //const { setStateAnimation , isActiveAnimation} = useStoreLung()
    const { setStateAnimation, isActiveAnimation } = useStoreLung()
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setStateAnimation(!isActiveAnimation);
    }, [setStateAnimation, isActiveAnimation]);


    // const handleClick = useCallback(() => {
    //     setStateAnimation(!isActiveAnimation);
    // }, [setStateAnimation, isActiveAnimation]);
    const map = useMemo<KeyboardControlsEntry<Controls>[]>(
        () => [{ name: Controls.animation, keys: ["KeyE"] }],
        []
    );

    const position = new Vector3(0, -32, -9);

    return (
        <>
            <Suspense fallback={<Spinner />}>
                <KeyboardControls map={map}>
                    <Canvas camera={{ position: [2, 10, 50] }} style={{ height: "80vh", width: "100%" }} shadows={true}>
                        <Html3D transform={false} position={[0, 35, 0]} distanceFactor={40} >
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
                            <Environment preset="dawn" background={true} />
                            <TreatmentTuberculosisModel scale={40} position={[0, 0, 0.8]} castShadow />
                            <Html center>
                                {/* <Button onClick={handleClick} label="Pulmón" color="violet" /> */}
                            </Html>
                            <FloorModel color="#3F72AF" position={position} metalnesVal={1} roughness={0.7} />
                            <AlertText3D
                                text={`ANTIBIOTICOS PARA LA TUBERCULOSIS`}
                                height={0.1}
                                size={3}
                                position={[-1, 10, 30]}
                            />
                            <AlertText3D
                                text={`PRESIONE E `}
                                height={0.1}
                                size={3}
                                position={[-15, -10, 30]}
                            />
                    </Canvas>
                </KeyboardControls>

            </Suspense>
        </>
    )
}

export default TreatmentCanva;