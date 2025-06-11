import { Suspense, useMemo, useRef, useState } from "react";
import {
  DragControls,
  KeyboardControls,
  KeyboardControlsEntry,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import FloorModel from "../../disease-pneumonia/models-3d/FloorModel";
import { CanastaModel } from "../model-3d/CanastaModel";
import { VirusModel } from "../../disease-pneumonia/models-3d/VirusModel";
import { Object3D } from "three";
import { Physics, RigidBody } from "@react-three/rapier";

enum Controls {
  animation = "animation",
}

const QuestionCanva = () => {
  const virusRef = useRef<Object3D>(null);
  const virusRigidBodyRef = useRef<any>(null);

  const [isGravity, setGravity] = useState(true);

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [{ name: Controls.animation, keys: ["Space"] }],
    []
  );

  const handlePointerDown = () => {
    setGravity(true);
    virusRigidBodyRef.current?.setGravityScale(0); // Desactiva gravedad
    virusRigidBodyRef.current?.setLinvel({ x: 0, y: 0, z: 0 }, true); // Detiene movimiento
  };

  const handlePointerUp = () => {
    setGravity(false);
    virusRigidBodyRef.current?.setGravityScale(1); // Activa gravedad normal
  };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <KeyboardControls map={map}>
          <Canvas
            camera={{ position: [0, 0, 100] }}
            style={{ height: "70vh", width: "100%" }}
            shadows={true}
          >
            <Physics gravity={[0, -20, 0]} paused={isGravity}>
              <DragControls>
                <RigidBody
                  mass={50}
                  ref={virusRigidBodyRef}
                  colliders="ball"
                  gravityScale={1}
                  type="dynamic"
                >
                  <group
                    ref={virusRef}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerOut={handlePointerUp}
                  >
                    <VirusModel
                      scale={10000}
                      position={[-90, -25, 0]}
                      castShadow
                    />
                  </group>
                </RigidBody>
              </DragControls>

              <RigidBody colliders="cuboid" type="fixed">
                <mesh
                  rotation-x={-Math.PI / 11}
                  receiveShadow={true}
                  position={[-80, -40, 0]}
                  scale={12}
                >
                  <cylinderGeometry args={[2.5, 2.5, 0.15, 50]} />
                  <meshStandardMaterial
                    roughness={0}
                    metalness={0}
                    color={"#ff5733"}
                  />
                </mesh>
              </RigidBody>
            </Physics>

            <ambientLight intensity={1.5} />

            <pointLight
              color={"cyan"}
              position={[2, 5, 5]}
              intensity={20}
              castShadow={true}
            />

            <CanastaModel scale={4} position={[70, -40, 0]} />
            <CanastaModel scale={4} position={[40, -40, 0]} />
            <CanastaModel scale={4} position={[10, -40, 0]} />

            <FloorModel />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </>
  );
};

export default QuestionCanva;
