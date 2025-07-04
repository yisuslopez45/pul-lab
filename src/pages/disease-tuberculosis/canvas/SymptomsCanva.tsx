import { Suspense } from "react";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
//import Button from "../../../layout/components/Button";
import { Vector3 } from 'three';
import FloorModel from "../models-3d/FloorModel";
import Html3D from "../../disease-pneumonia/components/Html3D";
import { SymptomsTuberculosisModel } from "../models-3d/SymptomsTuberculosisModel";


const SymptomsCanva = () => {
    //const { setStateAnimation , isActiveAnimation} = useStoreLung()
    const position: Vector3 = new Vector3(0,-32,-9)

    // const handleClick = useCallback(() => {
    //     setStateAnimation(!isActiveAnimation);
    // }, [setStateAnimation, isActiveAnimation]);

    return (
        <>
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 10, 50] }}  style={{ height: "80vh", width: "100%" }} shadows={true}>
          
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
                <Environment preset="city" background={true} />
                <SymptomsTuberculosisModel scale={60} position={[0,0,0.8]} castShadow  />
                <Html center>
                    {/* <Button onClick={handleClick} label="Pulmón" color="violet" /> */}
                </Html>
                <FloorModel color="#3F72AF" position={position} metalnesVal={1} roughness={0.7}  />
                <Html3D position={[20,0,40]} transform={false} >
                    <h1>
                        Camiloooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                    </h1>
                </Html3D>
            </Canvas>
        </Suspense>
        </>
    )
}

export default SymptomsCanva;