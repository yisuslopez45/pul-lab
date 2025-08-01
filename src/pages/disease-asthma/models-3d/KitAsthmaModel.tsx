import { useEffect, useRef } from "react";
import { useAnimations } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

import { Group, Material, Mesh } from 'three';
import { useGLTF } from '@react-three/drei';

type GroupElementProps = ThreeElements['group'];

interface KitAsthmaModelProps extends GroupElementProps {
  triggerAnimation: boolean;
}

export function KitAsthmaModel({ triggerAnimation, ...props }: KitAsthmaModelProps) {

  const groupRef = useRef<Group>(null);

  const { nodes, materials, animations } = useGLTF('/models-3d/asthma/Kit.glb') as unknown as {
    nodes: { bandage_bandage1_0: Mesh, bandageclips_bandage1_0: Mesh, capsuleshella_capsule_0: Mesh, capsuleshellb_capsule_0: Mesh,ed_energydrink1_0: Mesh, edhole_edhole1_0: Mesh, edtab_energydrink1_0: Mesh, edtabhold_energydrink1_0: Mesh, medkit_medkit1_0: Mesh, pillbottle_pillbottle1_0: Mesh,pillbottlecap_pillbottlecap1_0: Mesh, pillbottlelabel_pillbottlecap1_0: Mesh,syringebarrel_syringeb_0: Mesh,syringeneedle_syringe_0: Mesh, syringeplunger_syringe_0: Mesh};
    materials: { bandage1: Material, capsule: Material, energydrink1: Material, edhole1: Material, medkit1: Material, pillbottle1: Material, pillbottlecap1: Material, syringeb: Material, syringe: Material;};
    animations: any;
  }; 

  const { actions } = useAnimations(animations, groupRef)

  useEffect(() => {
    if (triggerAnimation) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {    
        action.loop = 2200; 
        action.reset().play();
        action.clampWhenFinished = true;
      }

    }
  }, [triggerAnimation, actions]);


  return (
    <group >
      <group name="Scene">
        <group name="kit">
          <group name="RootNode" {...props} ref={groupRef}  dispose={null}>
            <group name="Bandages" position={[-0.531, 0.616, -2.567]} rotation={[0, 0.729, 0]}>
              <group name="bandage" scale={[0.5, 0.561, 0.5]}>
                <mesh
                  name="bandage_bandage1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.bandage_bandage1_0.geometry}
                  material={materials.bandage1}
                />
              </group>
              <group name="bandageclips" position={[0, -0.786, 0]}>
                <mesh
                  name="bandageclips_bandage1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.bandageclips_bandage1_0.geometry}
                  material={materials.bandage1}
                />
              </group>
            </group>
            <group name="Capsule" position={[-1.384, 1.808, -0.969]} rotation={[-3.142, 0, 0]}>
              <group name="capsuleshella" scale={[0.054, 0.125, 0.054]}>
                <mesh
                  name="capsuleshella_capsule_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.capsuleshella_capsule_0.geometry}
                  material={materials.capsule}
                />
              </group>
              <group
                name="capsuleshellb"
                position={[0, 0.001, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-0.053, -0.125, -0.053]}>
                <mesh
                  name="capsuleshellb_capsule_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.capsuleshellb_capsule_0.geometry}
                  material={materials.capsule}
                />
              </group>
            </group>
            <group name="EnergyDrink" position={[0.946, 1.485, -3.702]}>
              <group name="ed" scale={[0.536, 1.358, 0.536]}>
                <mesh
                  name="ed_energydrink1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ed_energydrink1_0.geometry}
                  material={materials.energydrink1}
                />
              </group>
              <group name="edhole" position={[0, 1, 0.23]} scale={[0.42, 0.447, 0.447]}>
                <mesh
                  name="edhole_edhole1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.edhole_edhole1_0.geometry}
                  material={materials.edhole1}
                />
              </group>
              <group name="edtab" position={[0, 1.457, 0.156]} scale={[0.294, 0.019, 0.523]}>
                <mesh
                  name="edtab_energydrink1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.edtab_energydrink1_0.geometry}
                  material={materials.energydrink1}
                />
              </group>
              <group name="edtabhold" position={[0, 1.448, -0.099]} scale={[0.294, 0.019, 0.523]}>
                <mesh
                  name="edtabhold_energydrink1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.edtabhold_energydrink1_0.geometry}
                  material={materials.energydrink1}
                />
              </group>
            </group>
            <group name="medkit" position={[-2.273, 1.723, -3.212]} rotation={[0, 0.611, 0]}>
              <mesh
                name="medkit_medkit1_0"
                castShadow
                receiveShadow
                geometry={nodes.medkit_medkit1_0.geometry}
                material={materials.medkit1}
              />
            </group>
            <group name="PillBottle" position={[-1.586, 0.682, -1.224]} rotation={[0, 0.706, 0]}>
              <group name="pillbottle" scale={[0.373, 0.682, 0.373]}>
                <mesh
                  name="pillbottle_pillbottle1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pillbottle_pillbottle1_0.geometry}
                  material={materials.pillbottle1}
                />
              </group>
              <group
                name="pillbottlecap"
                position={[0.057, 1.504, -0.423]}
                rotation={[2.445, 0, -Math.PI]}
                scale={[0.373, 0.11, 0.373]}>
                <mesh
                  name="pillbottlecap_pillbottlecap1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pillbottlecap_pillbottlecap1_0.geometry}
                  material={materials.pillbottlecap1}
                />
              </group>
              <group name="pillbottlelabel" scale={[0.383, 0.37, 0.383]}>
                <mesh
                  name="pillbottlelabel_pillbottlecap1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pillbottlelabel_pillbottlecap1_0.geometry}
                  material={materials.pillbottlecap1}
                />
              </group>
            </group>
            <group name="Syringe" position={[0.689, 0.909, -1.147]}>
              <group name="syringebarrel" position={[0, 1.087, 0]} scale={[0.128, 0.622, 0.128]}>
                <mesh
                  name="syringebarrel_syringeb_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.syringebarrel_syringeb_0.geometry}
                  material={materials.syringeb}
                />
                <group name="syringeneedle" position={[0, 1.836, 0]} scale={[3.874, 0.798, 3.874]}>
                  <mesh
                    name="syringeneedle_syringe_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.syringeneedle_syringe_0.geometry}
                    material={materials.syringe}
                  />
                </group>
              </group>
              <group name="syringeplunger" position={[0, -0.132, 0]} scale={0.496}>
                <mesh
                  name="syringeplunger_syringe_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.syringeplunger_syringe_0.geometry}
                  material={materials.syringe}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/asthma/Kit.glb');