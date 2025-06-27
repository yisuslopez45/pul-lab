
import { useGLTF, useKeyboardControls } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX, useRef } from 'react'
import { Group, Mesh, MeshStandardMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import useStoreBoard from '../store/useStoreBoard'
import useStoreRotation from '../store/useStoreRotate'

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

  const groupRef = useRef<Group>(null);
  const { setStateAnimation } = useStoreBoard();
  const { direction } = useStoreRotation();
  const [, get] = useKeyboardControls();
  

  const { nodes, materials } = useGLTF('/models-3d/pneumonia/Virus-transformed.glb') as unknown as GLTFResult;

    useFrame(() => {
  
      const { animation } = get();
  
      if (animation && groupRef.current) {
        setStateAnimation(true);
        return
      }
  
      setStateAnimation(false);
  
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.0009;
  
        if (direction === "left") {
          groupRef.current.rotation.y += 0.008;
        } else if (direction === "right") {
          groupRef.current.rotation.y -= 0.008;
        }
      }
    });
  return (
    <group  ref={groupRef} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Sphere.geometry} material={materials.SphereMaterial} />
      <mesh castShadow geometry={nodes.Spike.geometry} material={materials.SpikeMaterial} />
      <mesh castShadow  geometry={nodes.Yellows.geometry} material={materials.YellowsMaterial} />
    </group>
  )
}

useGLTF.preload('/models-3d/pneumonia/Virus-transformed.glb')
