import { forwardRef, JSX, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type ModelProps = JSX.IntrinsicElements['group'] & {
  castShadow?: boolean;
  receiveShadow?: boolean;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const PreventionModel = forwardRef<THREE.Group, ModelProps>(({
  castShadow = true,
  receiveShadow = true,
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...props
}, ref) => {
  const { scene } = useGLTF('/models-3d/lungcancer/canasta-frutas.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = castShadow;
        child.receiveShadow = receiveShadow;
        const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (material) {
          material.metalness = 0.0;
          material.roughness = 1.0;
        }
      }
    });
  }, [scene, castShadow, receiveShadow]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
      {...props}
    />
  );
});

export default PreventionModel;

useGLTF.preload('/models-3d/lungcancer/canasta-frutas.glb');
