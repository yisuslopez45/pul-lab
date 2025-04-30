import { Suspense, useCallback } from "react";
import { OrbitControls, Environment, Html, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LungModel from "../models-3d/LungModel";
import useStoreLung from "../store/useStoreLung";
import Button from "../../../layout/components/Button";
import FloorModel from "../models-3d/FloorModel";
import { Vector3 } from 'three';


const Lung = () => {
    const { setStateAnimation , isActiveAnimation} = useStoreLung()
    const position: Vector3 = new Vector3(0,-3.3,0)

    const handleClick = useCallback(() => {
        setStateAnimation(!isActiveAnimation);
    }, [setStateAnimation, isActiveAnimation]);

    return (
        <>
        <Suspense fallback={<h5>Cargando...</h5>}>
            <Canvas camera={{ position: [2, 0, 5] }}  style={{ height: "70vh", width: "100%" }} shadows={true}>
          
                <OrbitControls 
                    enableZoom={true} 
                    enableRotate={true}   
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <ambientLight  intensity={1.5} />
                <directionalLight
                     color="white"
                     position={[1, 5, 5]} 
                     intensity={8}
                     castShadow={true}
                />
                <Environment preset="city" background={false} />
                <LungModel  scale={30} position={[0,0,0.8]} castShadow  />
                <Html center>
                    <Button onClick={handleClick} label="Pulmón" color="violet" />
                </Html>
                <FloorModel color="#3F72AF" position={position} metalnesVal={1} roughness={0.7}  />
            </Canvas>

        </Suspense>
        </>
    )
}

export default Lung;