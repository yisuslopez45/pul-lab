import { Suspense, useMemo, useRef } from "react";
import {
  DragControls,
  KeyboardControls,
  KeyboardControlsEntry,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import FloorModel from "../../disease-pneumonia/models-3d/FloorModel";
import { CanastaModel } from "../model-3d/CanastaModel";
import { VirusModel } from "../../disease-pneumonia/models-3d/VirusModel";
import { Object3D } from "three";

enum Controls {
  animation = "animation",
}

const QuestionCanva = () => {

    const virusRef = useRef<Object3D>(null);


    const map = useMemo<KeyboardControlsEntry<Controls>[]>(
      () => [{ name: Controls.animation, keys: ["Space"] }],
      []
    );


  return (
    <>
      <Suspense fallback={<Spinner />}>
      <KeyboardControls map={map}>
        <Canvas
          camera={{ position: [0, 0, 50] }}
          style={{ height: "70vh", width: "100%" }}
          shadows={true}
        >
          {/* <OrbitControls
            enableZoom={true}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          /> */}

          <DragControls>
           <group ref={virusRef}>
            <VirusModel scale={10000} position={[0, -30, -50]} castShadow />
          </group>
          </DragControls>
          <ambientLight intensity={1.5} />

          <pointLight
            color={'cyan'}
            position={[2, 5, 5]}
            intensity={20}
            castShadow={true}
          />


          <CanastaModel  scale={4} position={[0, -40, 0]} />
          <CanastaModel scale={4} position={[0, -40, 30]} />
          <CanastaModel scale={4} position={[0, -40, 60]} />



          <FloorModel />
        </Canvas>
      </KeyboardControls>
      </Suspense>
    </>
  );
};

export default QuestionCanva;
