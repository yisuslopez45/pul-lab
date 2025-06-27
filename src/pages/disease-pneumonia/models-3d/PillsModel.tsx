
import { useGLTF, useKeyboardControls } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { JSX, useRef } from 'react'
import { Group, Mesh, MeshPhysicalMaterial } from 'three'
import useStoreRotation from '../store/useStoreRotate'
import { useFrame } from '@react-three/fiber'
import useStoreBoard from '../store/useStoreBoard'

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

  const groupRef = useRef<Group>(null);
  const [, get] = useKeyboardControls();
  const { setStateAnimation } = useStoreBoard();

  const { nodes, materials } = useGLTF('/models-3d/pneumonia/Pills-transformed.glb') as unknown as GLTFResult;

  const { direction } = useStoreRotation();

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
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Pill_1.geometry} material={materials.PillMerge1Material} />
      <mesh castShadow geometry={nodes.Pill_2.geometry} material={materials.PillMerge2Material} />
      <mesh castShadow geometry={nodes.Pill_3.geometry} material={materials.PillMerge3Material} />
    </group>
  )
}

useGLTF.preload('/models-3d/pneumonia/Pills-transformed.glb')
