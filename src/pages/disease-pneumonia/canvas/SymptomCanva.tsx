import { Suspense, useMemo } from "react";
import {
  OrbitControls,
  Environment,
  KeyboardControlsEntry,
  KeyboardControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import { SymptomModel } from "../models-3d/SymptomModel";
import AlertText3D from "../texts/AlertText3D";
import useStoreBoard from "../store/useStoreBoard";
import FloorModel from "../models-3d/FloorModel";
import Html3D from "../components/Html3D";
import Button from "../../../layout/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStoreRotation from "../store/useStoreRotate";

enum Controls {
  animation = "animation",
}
 
const SymptomCanva = () => {
  const {  isActiveAnimation} = useStoreBoard()
  const { setDirection } = useStoreRotation()

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [{ name: Controls.animation, keys: ["KeyE"] }],
    []
  );

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <KeyboardControls map={map}>
          <Canvas
            camera={{ position: [0, 0, 6] }}
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
              position={[2, 20, 5]}
              intensity={20}
              castShadow={true}
            />
            <Environment preset="dawn" background={true} />

            <Html3D position={[2.8,3,1]} >
              <Button
                onClick={() => setDirection("right")} 
                label=""  
                px={1} 
                py={1}   
                icon={<ChevronRight className="p-0 m-0" />}  
              />
            </Html3D>

             <Html3D position={[-2.8,3,1]} >
              <Button 
                label=""  
                px={1} 
                py={1}   
                icon={<ChevronLeft className="p-0 m-0" />} 
                onClick={() => setDirection("left")} 
              />
            </Html3D>

            <SymptomModel scale={80} position={[0, -1, 0.8]} castShadow />

            {!isActiveAnimation && (
                <>
                  <AlertText3D 
                    text={`Presione "E" `} 
                    height={0.1} 
                    size={0.8} 
                    position={ [0, -1.5 , 2]} 
                />
                </>
            )}

             {isActiveAnimation && (
                <>
                  <AlertText3D 
                    text={`Girando...`} 
                    height={0.1} 
                    size={0.8} 
                    position={ [0, -1.5 , 2]} 
                />
                </>
            )}

            <FloorModel />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </>
  );
};

export default SymptomCanva;
