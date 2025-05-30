import { Suspense, useMemo } from "react";
import {
  OrbitControls,
  Environment,
  KeyboardControlsEntry,
  KeyboardControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import AlertText3D from "../texts/AlertText3D";
// import useStoreBoard from "../store/useStoreBoard";
import FloorModel from "../models-3d/FloorModel";
import { VirusModel } from "../models-3d/VirusModel";

enum Controls {
  animation = "animation",
}

const PreventionCanva = () => {
//   const {  isActiveAnimation} = useStoreBoard()

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
            <Environment preset="dawn" background={false} />
            <VirusModel scale={1200} position={[0, -1, 0.8]} castShadow />

            <AlertText3D 
              text={`Virus`} 
              height={0.1} 
              size={0.8} 
              position={ [0, -1.9 , 2.2]} 
          />
    
             <FloorModel />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </>
  );
};

export default PreventionCanva;
