
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    canasta: THREE.Mesh
  }
  materials: {
    canastaMasterial: THREE.MeshStandardMaterial
  }
}

export function CanastaModel(props: JSX.IntrinsicElements['group']) {

  const canasta1Ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (canasta1Ref.current) {
      canasta1Ref.current.rotation.y += 0.01;
    }
  });
  const { nodes, materials } = useGLTF('/models-3d/quiz/canasta-transformed.glb') as unknown as GLTFResult
  return (
    <group ref={canasta1Ref} {...props} dispose={null}>
      <mesh geometry={nodes.canasta.geometry} material={materials.canastaMasterial} />
    </group>
  )
}

useGLTF.preload('/models-3d/quiz/canasta-transformed.glb')
