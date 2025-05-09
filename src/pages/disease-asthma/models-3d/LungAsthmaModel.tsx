import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, Group } from 'three';
import { JSX } from 'react';

export function LungAsthmaModel(props: JSX.IntrinsicElements['group']) {
  const groupRef = useRef<Group>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [rotationStart, setRotationStart] = useState(0);
  const [rotationEnd, setRotationEnd] = useState(0);

  const { nodes, materials } = useGLTF('/models-3d/asthma/Lungs.glb') as unknown as {
    nodes: {
      Lungs: Mesh;
    };
    materials: {
      LungsMaterial: MeshStandardMaterial;
    };
  };

  useFrame(() => {
    if (!isRotating || !groupRef.current) return;

    const currentY = groupRef.current.rotation.y;
    const delta = rotationEnd - currentY;

    if (Math.abs(delta) < 0.01) {
      groupRef.current.rotation.y = rotationEnd;
      setIsRotating(false);
      return;
    }

    groupRef.current.rotation.y += delta * 0.06;
  });

  const handleClick = () => {
    if (!groupRef.current || isRotating) return;

    const currentY = groupRef.current.rotation.y;
    const newEnd = currentY + Math.PI * 2; 
    setRotationStart(currentY);
    setRotationEnd(newEnd);
    setIsRotating(true);
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      onClick={handleClick}
      castShadow
      receiveShadow
      rotation={[0, 10, 0]} 
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lungs.geometry}
        material={materials.LungsMaterial}
      />
    </group>
  );
}

useGLTF.preload('/models-3d/asthma/Lungs.glb');
