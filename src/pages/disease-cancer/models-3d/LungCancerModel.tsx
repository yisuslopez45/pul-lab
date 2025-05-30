/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models-3d/lungcancer/Lung-cancer.glb --types 
*/

import { JSX, useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

type ModelProps = JSX.IntrinsicElements['group'] & {
  castShadow?: boolean;
  receiveShadow?: boolean;
};

const LungCancerModel = ({ castShadow = false, receiveShadow = false, ...props }: ModelProps) => {
  const { scene } = useGLTF('/models-3d/lungcancer/Lung-cancer.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = castShadow;
        child.receiveShadow = receiveShadow;
        child.frustumCulled = false; 
      }
    });
  }, [scene, castShadow, receiveShadow]);

  return <primitive object={scene} {...props} />;
};

export default LungCancerModel;
useGLTF.preload('/models-3d/lungcancer/Lung-cancer.glb');




