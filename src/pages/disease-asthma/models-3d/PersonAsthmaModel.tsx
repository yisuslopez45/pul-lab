
import { useRef , JSX} from 'react'
import { useGLTF } from '@react-three/drei'
import { Group, Mesh, MeshStandardMaterial } from 'three';

export function PersonAsthmaModel(props: JSX.IntrinsicElements['group']) {

  const groupRef = useRef<Group>(null);
  
  const { nodes, materials } = useGLTF('/models-3d/asthma/personAsthma.glb')as unknown as {
      nodes: { personAsthma: Mesh };
      materials: { personAsthma: MeshStandardMaterial };
  };

  const handleClick = () => {};
  
  return (
    <group 
      {...props}
      ref={groupRef}
      dispose={null}
      onClick={handleClick}
      castShadow
      receiveShadow
      rotation={[1.7, 0, -0.1]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.personAsthma.geometry}
        material={materials.personAsthma}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/asthma/personAsthma.glb')