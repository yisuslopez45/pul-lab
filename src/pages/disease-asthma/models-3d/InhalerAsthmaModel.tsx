import { useRef , JSX} from 'react'
import { useGLTF } from '@react-three/drei'
import { Group, Mesh, MeshStandardMaterial } from 'three';


export function InhalerAsthmaModel(props: JSX.IntrinsicElements['group']) {
 
  const groupRef = useRef<Group>(null);

    
  const { nodes, materials } = useGLTF('/models-3d/asthma/Inhaler.glb')

  const handleClick = () => {};

  return (
    <group 
      {...props}
      ref={groupRef}
      dispose={null}
      onClick={handleClick}
      castShadow
      receiveShadow>
      <group scale={0.01}>
        <group
          position={[-206.494, -144.86, 0]}
          rotation={[-Math.PI / 2, -0.094, 0]}
          scale={94.402}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Inhaler_Inhaler_Case_0.geometry}
            material={materials.Inhaler_Case}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Inhaler_Canister_Inhaler_Canister_0.geometry}
            material={materials.Inhaler_Canister}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cap_Inhaler_Case_0.geometry}
            material={materials.Inhaler_Case}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/asthma/Inhaler.glb')