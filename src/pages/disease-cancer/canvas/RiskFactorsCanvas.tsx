import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Sky, Stars, Sparkles, Html, KeyboardControls, useKeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../../layout/components/Button";
import Spinner from "../../../layout/components/Spinner";
import FloorModel from '../models-3d/Floor';
import RiskFactorsModel from '../models-3d/RiskFactorsModel';

enum Controls {
  forward = "forward",
  backward = "backward",
  left = "left",
  right = "right"
}

export default function RiskFactorsCanvas() {
  const [rotating, setRotating] = useState(false);
  const [loading, setLoading] = useState(true);


  const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.backward, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] }
  ], []);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {loading && <LoadingScreen />}

      <KeyboardControls map={map}>
        <Canvas
          shadows={{ type: THREE.PCFSoftShadowMap }}
          camera={{ position: [0, 2, 6], fov: 50 }}
          onCreated={({ gl }) => {
            setLoading(false);
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <Suspense fallback={<Spinner />}>

            <ambientLight intensity={0.3} />
            <directionalLight
              position={[10, 20, 10]}
              intensity={3}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-4, 5, -4]} intensity={1.5} color="#a0a0ff" castShadow />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={0.8} intensity={2} castShadow />


            <SceneContent rotating={rotating} setRotating={setRotating} />

            {/* Texto */}
            <Html fullscreen>
              <h1 style={{
                position: 'absolute', top: 20, left: 20, color: 'white',
                fontFamily: 'sans-serif'
              }}>
                Panel de Factores de Riesgo
              </h1>
            </Html>


            <Environment preset="night" background />
            <Sky sunPosition={[100, 20, 100]} />
            <Stars radius={100} depth={50} count={3000} fade />
            <Sparkles count={30} speed={0.2} size={1.5} scale={10} />


            <EffectComposer>
              <Bloom intensity={0.3} luminanceThreshold={0.2} />
              <DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2} />
            </EffectComposer>

            <OrbitControls enableZoom enablePan />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

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
          <RiskFactorsModel scale={8} castShadow receiveShadow />
        </group>

        <FloorModel
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
          color="#3d2c5a"
          roughness={0.9}
          metalnesVal={0}
          receiveShadow
        />
      </group>

      <Html position={[5, 0, 3]} distanceFactor={15}>
        <Button
          onClick={() => groupRef.current && (groupRef.current.rotation.y -= Math.PI / 8)}
          label="" px={1} py={1} icon={<ChevronRight />}
        />
      </Html>
      <Html position={[-5, 0, 3]} distanceFactor={15}>
        <Button
          onClick={() => groupRef.current && (groupRef.current.rotation.y += Math.PI / 8)}
          label="" px={1} py={1} icon={<ChevronLeft />}
        />
      </Html>
    </>
  );
};


function LoadingScreen() {
  return (
    <div style={{
      color: '#a0a0ff',
      background: '#0f0f1f',
      padding: '2rem',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontSize: '1.5em', fontWeight: '500' }}>
        CARGANDO MODELO 3D...
      </div>
      <div style={{
        width: '200px',
        height: '4px',
        background: 'rgba(80, 80, 120, 0.3)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '60%',
          height: '100%',
          background: 'linear-gradient(90deg, #6060ff, #a0a0ff)',
          animation: 'loading 2s ease-in-out infinite'
        }}></div>
      </div>
    </div>
  );
}



