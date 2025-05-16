import { Suspense, useCallback } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LungModel from "../models-3d/LungModel";
import useStoreLung from "../store/useStoreLung";
import Button from "../../../layout/components/Button";
import FloorModel from "../models-3d/FloorModel";
import { Vector3 } from 'three';
import Spinner from "../../../layout/components/Spinner";
// import AlertText3D from "../texts/AlertText3D";


const Lung = () => {
    const { setStateAnimation , isActiveAnimation} = useStoreLung()
    // const [clicked, setClicked] = useState(true)
    
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setStateAnimation(!isActiveAnimation);
    }, [setStateAnimation, isActiveAnimation]);

    //  #### SPRINT 2 ###########
    // const handleOnPointerClick = useCallback(() => {
    //     setClicked(false)
    // }, []);

    // const handleOnPointerClickDown = useCallback(() => {
    //     setClicked(true)
    // }, []);

    // onPointerDown={handleOnPointerClick} onPointerUp={handleOnPointerClickDown}


    return (
        <>
        
        <Suspense fallback={<Spinner/>}>
            <Button
                className="mt-5"  
                onClick={ handleClick}
                label="Interactuar" 
                color={!isActiveAnimation ? 'amber' : 'green' } 
            />
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
                <LungModel  scale={30} position={[0,0.6,0.8]} castShadow  />
                {/* {clicked && (
                <>
                    <AlertText3D 
                        text={`Presione`} 
                        height={0.1} 
                        size={0.8} 
                        position={ [0, 0.6 , 2]} 
                    />

                    <AlertText3D 
                        text={`Click`}  
                        height={0.1} 
                        size={0.8}  
                        position={ [0, -0.3, 2]}   
                    />
                </>
                )} */}

                {/* {!clicked && (
                <>
                    <AlertText3D 
                        text={`< gire >`} 
                        height={0.1} 
                        size={0.8} 
                        position={ [0, -1.8, 2]} 
                    />
                </>
                )} */}

                <FloorModel  />
            </Canvas>

        </Suspense>
        </>
    )
}

export default Lung;