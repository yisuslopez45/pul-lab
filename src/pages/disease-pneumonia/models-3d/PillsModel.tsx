
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX } from 'react'
import { Mesh, MeshPhysicalMaterial } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Pill_1: Mesh
    Pill_2: Mesh
    Pill_3: Mesh
  }
  materials: {
    PillMerge1Material: MeshPhysicalMaterial
    PillMerge2Material: MeshPhysicalMaterial
    PillMerge3Material: MeshPhysicalMaterial
  }
}

export function PillsModel(props: JSX.IntrinsicElements["group"]) {

  const { nodes, materials } = useGLTF('/models-3d/pneumonia/Pills-transformed.glb') as unknown as GLTFResult;
  
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Pill_1.geometry} material={materials.PillMerge1Material} />
      <mesh castShadow geometry={nodes.Pill_2.geometry} material={materials.PillMerge2Material} />
      <mesh castShadow geometry={nodes.Pill_3.geometry} material={materials.PillMerge3Material} />
    </group>
  )
}

useGLTF.preload('/models-3d/pneumonia/Pills-transformed.glb')
