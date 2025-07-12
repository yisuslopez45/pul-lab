import { Suspense, useMemo } from "react";
import { OrbitControls, Environment, Html, KeyboardControlsEntry, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
//import Button from "../../../layout/components/Button";
import { Vector3 } from 'three';
import FloorModel from "../models-3d/FloorModel";
import { SymptomsTuberculosisModel } from "../models-3d/SymptomsTuberculosisModel";
import AlertText3D from "../../disease-pneumonia/texts/AlertText3D";

enum Controls {
    animation = "animation",
}
const SymptomsCanva = () => {
    //const { setStateAnimation , isActiveAnimation} = useStoreLung()
    const position: Vector3 = new Vector3(0, -32, -9)

    // const handleClick = useCallback(() => {
    //     setStateAnimation(!isActiveAnimation);
    // }, [setStateAnimation, isActiveAnimation]);
    const map = useMemo<KeyboardControlsEntry<Controls>[]>(
        () => [{ name: Controls.animation, keys: ["KeyE"] }],
        []
    );


    return (
        <>
            <Suspense fallback={<h5>Cargando...</h5>}>
                <KeyboardControls map={map}>
                    <Canvas camera={{ position: [2, 10, 50] }} style={{ height: "80vh", width: "100%" }} shadows={true}>

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
                        <Environment preset="city" background={true} />
                        <SymptomsTuberculosisModel scale={60} position={[0, 0, 0.8]} castShadow />
                        <Html center>
                            {/* <Button onClick={handleClick} label="Pulmón" color="violet" /> */}
                        </Html>
                        <FloorModel color="#3F72AF" position={position} metalnesVal={1} roughness={0.7} />
                        <AlertText3D
                            text={`LA TOS ES UN SINTOMA `}
                            height={0.1}
                            size={3}
                            position={[0, -5, 30]}
                        />
                         <AlertText3D
                            text={`PRESIONE E `}
                            height={0.1}
                            size={3}
                            position={[10, -10, 30]}
                        />
                    </Canvas>
                </KeyboardControls>

            </Suspense>
        </>
    )
}

export default SymptomsCanva;