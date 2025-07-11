/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import useStoreLung from '../../disease-pneumonia/store/useStoreLung'


type GLTFResult = GLTF & {
  nodes: {
    Lung: THREE.Mesh
  }
  materials: {
    LungMaterial: THREE.MeshStandardMaterial
  }
}

export function LungTuberculosisModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models-3d/tuberculosis/lung-tuberculosis.glb') as unknown as GLTFResult
  const groupRef = useRef<THREE.Group>(null);
  const { isActiveAnimation } = useStoreLung();
  useFrame(() => {
      if (groupRef.current && isActiveAnimation) {
        groupRef.current.rotation.y += 0.003;
      }
    });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lung.geometry}
        material={materials.LungMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/tuberculosis/lung-tuberculosis.glb')
