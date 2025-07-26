import { Suspense, useMemo, useRef, useState } from "react";
import { OrbitControls, Environment, KeyboardControls, Html, useKeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Button from "../../../layout/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Spinner from "../../../layout/components/Spinner";
import FloorModel from '../models-3d/Floor';
import TratamientoModel from '../models-3d/TratamientoModel';
import AlertText3D from "../../disease-pneumonia/texts/AlertText3D";

enum Controls {
  animation = "animation",
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right"
}

const DiseaseTreatmentScene = () => {
  const [rotating, setRotating] = useState(false);

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.animation, keys: ["Space"] },
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] }
  ], []);

  return (
    <Suspense fallback={<Spinner />}>
      <KeyboardControls map={map}>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 50 }}
          shadows
          style={{ height: "70vh", width: "100%" }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight
            position={[10, 50, 10]}
            intensity={5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <pointLight position={[2, 5, 5]} intensity={20} castShadow color="cyan" />
          <Environment preset="night" background />

          <SceneContent rotating={rotating} setRotating={setRotating} />

          <OrbitControls enableZoom enablePan minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 1.5} />
        </Canvas>
      </KeyboardControls>
    </Suspense>
  );
};

interface SceneContentProps {
  rotating: boolean;
  setRotating: (r: boolean) => void;
}

const SceneContent = ({ rotating, setRotating }: SceneContentProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Group>(null);
  const [, get] = useKeyboardControls<Controls>();

  useFrame((_, delta) => {
    if (rotating && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.8;
    }

    const { forward, backward, left, right } = get();
    if (modelRef.current) {
      if (forward) modelRef.current.position.z -= 0.05;
      if (backward) modelRef.current.position.z += 0.05;
      if (left) modelRef.current.position.x -= 0.05;
      if (right) modelRef.current.position.x += 0.05;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <group
          ref={modelRef}
          onClick={() => setRotating(!rotating)}
        >
          <TratamientoModel
            position={[0, -1, 0]}
            rotation={[0, Math.PI / 4, 0]}
            scale={[3, 3, 3]}
            castShadow
            receiveShadow
          />
        </group>
        <FloorModel
          position={[0, -2.4, 0]}
          receiveShadow
          color="#3F72AF"
          roughness={0.7}
          metalnesVal={0}
          scale={[2, 2, 2]}
        />
      </group>

      <AlertText3D
        text={`Radioterapia`}
        height={0.1}
        size={0.8}
        position={[0.5, -2, 5]} 
      />

      <Html position={[5, 0, 3]} distanceFactor={15}>
        <Button onClick={() => groupRef.current && (groupRef.current.rotation.y -= Math.PI / 8)}
          label="" px={1} py={1} icon={<ChevronRight />} />
      </Html>
      <Html position={[-5, 0, 3]} distanceFactor={15}>
        <Button onClick={() => groupRef.current && (groupRef.current.rotation.y += Math.PI / 8)}
          label="" px={1} py={1} icon={<ChevronLeft />} />
      </Html>
    </>
  );
};

export default DiseaseTreatmentScene;
