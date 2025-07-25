import type { JSX } from 'react';
import { forwardRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// ✅ Define ModelProps
type ModelProps = JSX.IntrinsicElements['group'] & {
  castShadow?: boolean;
  receiveShadow?: boolean;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const TratamientoModel = forwardRef<THREE.Group, ModelProps>(({
  castShadow = true,
  receiveShadow = true,
  scale = [1, 1, 1],
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  ...props
}, ref) => {
  const { scene } = useGLTF('/models-3d/lungcancer/radioterapia.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = castShadow;
        child.receiveShadow = receiveShadow;

        // Ajuste de material para quitar brillo
        const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
        if (material) {
          material.metalness = 0.0; // Sin brillo metálico
          material.roughness = 1.0; // Más difuso
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

export default TratamientoModel;

// Precarga para rendimiento
useGLTF.preload('/models-3d/lungcancer/radioterapia.glb');

