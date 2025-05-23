import { Suspense } from "react";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
//import Button from "../../../layout/components/Button";
import { Vector3 } from 'three';
import { LungTuberculosisModel } from "../models-3d/LungTuberculosisModel";
import FloorModel from "../models-3d/FloorModel";



const TuberculosisCanva = () => {
    //const { setStateAnimation , isActiveAnimation} = useStoreLung()
    const position: Vector3 = new Vector3(0,-30,0)

    // const handleClick = useCallback(() => {
    //     setStateAnimation(!isActiveAnimation);
    // }, [setStateAnimation, isActiveAnimation]);

    return (
        <>
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 0, 50] }}  style={{ height: "70vh", width: "100%" }} shadows={true}>
          
                <OrbitControls 
                    enableZoom={true} 
                    enableRotate={true}   
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <ambientLight  intensity={1} />
                <directionalLight
                     color="white"
                     position={[5, 100, 50]} 
                     intensity={8}
                     castShadow={true}
                />
                <Environment preset="city" background={false} />
                <LungTuberculosisModel  scale={10} position={[0,0,0.8]} castShadow  />
                <Html center>
                    {/* <Button onClick={handleClick} label="Pulmón" color="violet" /> */}
                </Html>
                <FloorModel color="#3F72AF" position={position} metalnesVal={1} roughness={0.7}  />
            </Canvas>

        </Suspense>
        </>
    )
}

export default TuberculosisCanva;