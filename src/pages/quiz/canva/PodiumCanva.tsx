import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import { OrbitControls, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";

import Spinner from "../../../layout/components/Spinner";
import { PodiumModel } from "../model-3d/PodiumModel";

interface WinnerDisplayProps {
  position?: THREE.Vector3;
  photoUrl: string;
  name: string;
}

interface PodiumCanvaProps {
  winnersData: WinnerDisplayProps[];
}

interface SceneContentProps {
  winnersData: WinnerDisplayProps[];
}

const WinnerDisplay = ({ position, photoUrl, name }: WinnerDisplayProps) => {
  const texture = useTexture(photoUrl);
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.09}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

const SceneContent = ({ winnersData }: SceneContentProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={3} />
      <group ref={groupRef}>
        <PodiumModel position={[0, -0.5, 0]} />

        {winnersData.length > 0 && (
          <>
            <WinnerDisplay
              name={winnersData[0].name}
              photoUrl={winnersData[0].photoUrl}
              position={new THREE.Vector3(0, 0.8, 0)}
            />

            <WinnerDisplay
              name={winnersData[2].name}
              photoUrl={winnersData[2].photoUrl}
              position={new THREE.Vector3(-1.2, 0.2, 0)}
            />

            <WinnerDisplay
              name={winnersData[1].name}
              photoUrl={winnersData[1].photoUrl}
              position={new THREE.Vector3(1.2, 0.5, 0)}
            />
          </>
        )}
      </group>
    </>
  );
};

const PodiumCanva = ({ winnersData }: PodiumCanvaProps) => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Canvas
          camera={{ position: [0, 0, 3] }}
          shadows={true}
          onPointerEnter={() => setControlsEnabled(true)}
          onPointerLeave={() => setControlsEnabled(false)}
        >
          <OrbitControls
            enabled={controlsEnabled}
            enableZoom={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          <SceneContent winnersData={winnersData} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default PodiumCanva;
