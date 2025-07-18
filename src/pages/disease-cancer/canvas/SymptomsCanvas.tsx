import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, KeyboardControls, Html, useKeyboardControls, SoftShadows } from '@react-three/drei';
import CancerModel from '../models-3d/cancerModel';
import AlertText3D from '../../disease-pneumonia/texts/AlertText3D';


export default function Interactive3DViewer() {
  const [hovered, setHovered] = useState(false);
  const modelRef = useRef<any>(null);

  const controlsMap = useMemo(() => [
    { name: 'rotateLeft', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rotateRight', keys: ['ArrowRight', 'KeyD'] }
  ], []);

  return (
    <div style={{ 
      width: '100%', 
      height: '500px',
      border: '2px solid red',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Suspense fallback={<LoadingScreen />}>
        <KeyboardControls map={controlsMap}>
          <Canvas
            camera={{ position: [0, 3, 7], fov: 45 }}
            gl={{ antialias: true }}
            shadows
            style={{ background: '#0b0b3b' }}
          >
            <SceneContent modelRef={modelRef} hovered={hovered} setHovered={setHovered} />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </div>
  );
}

interface SceneContentProps {
  modelRef: React.RefObject<any>;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

function SceneContent({ modelRef, hovered, setHovered }: SceneContentProps) {
  const [rotationSpeed, setRotationSpeed] = useState(0);
  
  return (
    <>
      <SoftShadows size={0.01} samples={20} focus={1.5} />
      
      <Lights />
      
      <Environment preset="apartment" background />
      
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[15, 15]} />
        <shadowMaterial opacity={0.4} color="#1a1a2e" />
      </mesh>
      
      <CancerModel
        ref={modelRef}
        position={[0, -1.5, 0]}
        scale={hovered ? 1.5 : 1.2}
        rotation={[0, rotationSpeed, 0]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        castShadow={true}
        receiveShadow={true}
      />
      
      <OrbitControls 
        enableZoom 
        enablePan={false}
        minDistance={3}
        maxDistance={10}
      />
      
      <ControlsUI />
      
      <KeyboardHandler setRotationSpeed={setRotationSpeed} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} color="#ffffff" />
      
      <directionalLight
        position={[8, 12, 8]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0005}
      />
      
      <pointLight
        position={[-5, 5, 2]}
        intensity={0.8}
        distance={20}
        decay={1.5}
      />
    </>
  );
}

function ControlsUI() {
  return (
    <>
      <AlertText3D
        text="MODELO 3D INTERACTIVO"
        size={1.1}
        height={0.1}
        position={[0, -3.5, 0]}

      />

      <Html position={[8, 2.5, 0]} center distanceFactor={8}>
        <div style={{
          background: 'rgba(20, 20, 40, 0.85)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textAlign: 'center',
          minWidth: '220px',
          border: '1px solid #3a3a5a',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{ 
            margin: '0 0 12px 0', 
            fontSize: '1.3em',
            fontWeight: '500',
            color: '#a0a0ff'
          }}>
            CONTROLES INTERACTIVOS
          </h2>
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            marginBottom: '12px'
          }}>
            <KeyButton keyName="A / ←" label="Rotar Izquierda" />
            <KeyButton keyName="D / →" label="Rotar Derecha" />
          </div>
          <p style={{ 
            margin: '0',
            fontSize: '0.85em', 
            opacity: '0.8',
            fontStyle: 'italic'
          }}>
            Mantén presionado para acelerar la rotación
          </p>
        </div>
      </Html>
    </>
  );
}

function KeyButton({ keyName, label }: { keyName: string; label: string }) {
  return (
    <div>
      <div style={{
        background: 'rgba(60, 60, 90, 0.7)',
        padding: '6px 12px',
        borderRadius: '4px',
        marginBottom: '6px',
        fontFamily: 'monospace',
        fontSize: '0.95em',
        letterSpacing: '1px',
        border: '1px solid #4a4a7a'
      }}>
        {keyName}
      </div>
      <div style={{ fontSize: '0.8em' }}>{label}</div>
    </div>
  );
}

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
      <div style={{ 
        fontSize: '1.5em',
        fontWeight: '500'
      }}>
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

function KeyboardHandler({ setRotationSpeed }: { setRotationSpeed: React.Dispatch<React.SetStateAction<number>> }) {
  const [sub, get] = useKeyboardControls();
  const accelerationRate = 0.003;
  const maxSpeed = 0.2;
  const friction = 0.95;

  useEffect(() => {
    let speed = 0;
    let lastKey: 'rotateLeft' | 'rotateRight' | null = null;
    let animationFrameId: number;

    const updateRotation = () => {
      const state = get();
      
      if (state.rotateLeft) {
        speed = Math.min(speed + accelerationRate, maxSpeed);
        lastKey = 'rotateLeft';
      } else if (state.rotateRight) {
        speed = Math.min(speed + accelerationRate, maxSpeed);
        lastKey = 'rotateRight';
      } else {
        speed *= friction;
        if (Math.abs(speed) < 0.001) speed = 0;
      }

      if (speed !== 0) {
        setRotationSpeed(prev => prev + (lastKey === 'rotateLeft' ? speed : -speed));
      }

      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [sub, get, setRotationSpeed]);

  return null;
}
