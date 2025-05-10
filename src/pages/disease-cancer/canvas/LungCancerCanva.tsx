import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import LungCancerModel from '../models-3d/LungCancerModel';
import { Loader } from '../components/Loader';
import FloorModel from '../models-3d/Floor';

 const LungCancerCanva = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div style={{ height: '60vh', position: 'relative' }}>
      {loading && <Loader />}
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 50 }}
        onCreated={() => setLoading(false)}
       
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />

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
            shadow-bias={-0.003}
          />

          <FloorModel
            position={[0, -1, 0]}
            color="#3d2c5a"
            roughness={0.9}
            metalnesVal={0}
            receiveShadow
          />

          <LungCancerModel castShadow />

          <Environment preset="city" />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LungCancerCanva;