import { Suspense} from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LungModel from "../models-3d/LungModel";
import Spinner from "../../../layout/components/Spinner";


const Lung = () => {

    return (
        <>
        <Suspense fallback={<Spinner/>}>

            <Canvas camera={{ position: [2, 0, 6] }}  style={{ height: "70vh", width: "100%" }} shadows={true}   >
          
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
                <LungModel  scale={45} position={[0,0.6,0.8]} castShadow  />
              
            </Canvas>

        </Suspense>
        </>
    )
}

export default Lung;