import { Suspense, useState, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Sky, Stars, Sparkles, Html, KeyboardControls, useKeyboardControls } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';
import RiskFactorsModel from '../models-3d/RiskFactorsModel';
import FloorModel from '../models-3d/Floor';

export default function RiskFactorsCanvas() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {loading && <LoadingScreen />}

      <KeyboardControls
        map={[
          { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'right', keys: ['ArrowRight', 'KeyD'] },
        ]}
      >
        <Canvas
          shadows={{ type: THREE.PCFSoftShadowMap }} // 
          camera={{ position: [0, 2, 3], fov: 50 }}
          onCreated={({ gl }) => {
            setLoading(false);
            gl.shadowMap.enabled = true; 
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <Suspense fallback={null}>
            {/* Luces */}
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[4, 10, 4]}
              intensity={2}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-near={0.5}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-4, 5, -4]} intensity={1} castShadow /> {}
            <spotLight position={[0, 8, 0]} angle={0.4} penumbra={0.5} intensity={2} castShadow />

            {/* Suelo más arriba y más pequeño */}
            <FloorModel
              position={[0, -0.1, 0]}
              scale={0.5}
              color="#3d2c5a"
              roughness={0.9}
              metalnesVal={0}
              receiveShadow
            />

            {/* Grupo que rota */}
            <KeyboardEvents>
              <AnimatedRiskFactors scale={9} />
            </KeyboardEvents>

            {/* Texto 2D */}
            <Html fullscreen>
              <h1 style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
                Panel de Factores de Riesgo
              </h1>
            </Html>

            {/* Extras */}
            <Environment preset="sunset" />
            <Sky sunPosition={[100, 20, 100]} />
            <Stars radius={100} depth={50} count={3000} fade />
            <Sparkles count={50} speed={0.2} size={2} scale={10} />

            {/* Efectos */}
            <EffectComposer>
              <Bloom intensity={0.5} luminanceThreshold={0.2} />
              <DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2} />
            </EffectComposer>

            <OrbitControls enableZoom enableRotate enablePan />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

// Modelo con materiales PBR + sombras
function AnimatedRiskFactors({ scale = 1 }) {
  const group = useRef<THREE.Group>(null!);
  const textureLoader = new THREE.TextureLoader();
  const [hovered, setHovered] = useState(false);
  const [rotating, setRotating] = useState(false);

  const [colorMap, normalMap, roughnessMap, metalnessMap] = useMemo(() => [
    textureLoader.load('/textures/basecolor.jpg'),
    textureLoader.load('/textures/normal.jpg'),
    textureLoader.load('/textures/roughness.jpg'),
    textureLoader.load('/textures/metallic.jpg')
  ], []);

  const material = new THREE.MeshStandardMaterial({
    map: colorMap,
    normalMap,
    roughnessMap,
    metalnessMap,
    roughness: 0.8,
    metalness: 0.3
  });

  useFrame((_, delta) => {
    if (rotating && group.current) {
      group.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group
      ref={group}
      scale={scale}
      onClick={() => setRotating(!rotating)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      castShadow 
      receiveShadow
    >
      <RiskFactorsModel material={material} scale={hovered ? 1.1 : 1} castShadow receiveShadow />
    </group>
  );
}

// Rotación con teclado
function KeyboardEvents({ children }: { children: React.ReactNode }) {
  const [, get] = useKeyboardControls();
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    const { left, right } = get();
    if (ref.current) {
      if (left) ref.current.rotation.y += 0.05;
      if (right) ref.current.rotation.y -= 0.05;
    }
  });

  return <group ref={ref}>{children}</group>;
}

// Pantalla de carga
function LoadingScreen() {
  return (
    <div style={{
      color: '#a0a0ff',
      background: '#0f0f1f',
      padding: '2rem',
      width: '100%',
      height: '100%',
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
