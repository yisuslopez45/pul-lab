import { useEffect, useRef } from "react";
import { useAnimations } from "@react-three/drei";
import { ThreeElements, useLoader } from "@react-three/fiber";
import { Group/* , Material, Mesh  */} from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from "three-stdlib";

type GroupElementProps = ThreeElements['group'];

interface InhalerAsthmaModelProps extends GroupElementProps {
  triggerAnimation: boolean;
}

export function InhalerAsthmaModel({ triggerAnimation, ...props }: InhalerAsthmaModelProps) {
  const groupRef = useRef<Group>(null);

  const { nodes, materials, animations } = useGLTF('/models-3d/asthma/Inhaler.glb') as unknown as {
    nodes: { inhaler: Mesh, canister: Mesh, 'case': Mesh };
    materials: { inhalerMaterial: Material; canisterMaterial: Material; };
    animations: any;
  };

  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (triggerAnimation) {
      const action = actions[Object.keys(actions)[0]];
      const action2 = actions[Object.keys(actions)[1]];

      if (action) {
        action.reset().play();
        //action.loop = 1; 
        action.clampWhenFinished = true;
      }
      if (action2) {
        action2.reset().play();
        //action.loop = 1; 
        action2.clampWhenFinished = true;
      }
    }
  }, [triggerAnimation, actions]);

  return (
    <group {...props} ref={groupRef}  dispose={null} >
      <group name="Scene">
        <mesh
          name="case"
          castShadow
          receiveShadow
          geometry={nodes['case'].geometry}
          material={materials.canisterMaterial}
        />
        <mesh
          name="inhaler"
          castShadow
          receiveShadow
          geometry={nodes.inhaler.geometry}
          material={materials.inhalerMaterial}
          position={[0, 1.5, 0]}
        />
        <mesh
          name="canister"
          castShadow
          receiveShadow
          geometry={nodes.canister.geometry}
          material={materials.canisterMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/public/assets/inhaler.glb');