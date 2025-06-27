
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX } from 'react'
import { Mesh, MeshStandardMaterial } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Sphere: Mesh
    Spike: Mesh
    Yellows: Mesh
  }
  materials: {
    SphereMaterial: MeshStandardMaterial
    SpikeMaterial: MeshStandardMaterial
    YellowsMaterial: MeshStandardMaterial
  }
}

export function VirusModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF('/models-3d/pneumonia/Virus-transformed.glb') as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Sphere.geometry} material={materials.SphereMaterial} />
      <mesh castShadow geometry={nodes.Spike.geometry} material={materials.SpikeMaterial} />
      <mesh castShadow  geometry={nodes.Yellows.geometry} material={materials.YellowsMaterial} />
    </group>
  )
}

useGLTF.preload('/models-3d/pneumonia/Virus-transformed.glb')
