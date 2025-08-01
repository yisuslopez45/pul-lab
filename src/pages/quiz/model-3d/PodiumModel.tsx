
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';
import { Group, Material, Mesh } from 'three';

export function PodiumModel({ ...props }) {
    
    const groupRef = useRef<Group>(null);

    const { nodes, materials } = useGLTF('/models-3d/podium.glb') as unknown as {
        nodes: {
            'Material0-material': Mesh;
            'Material1-material': Mesh;
            'Material2-material': Mesh;
            'Material3-material': Mesh;
        };
        materials: {
            'Material0-material': Material;
            'Material1-material': Material;
            'Material2-material': Material;
            'Material3-material': Material;
        }
    }
    return (
        <group {...props} ref={groupRef} dispose={null}>
            <group rotation={[-Math.PI / 2.5, 0, 11]}>
                <group scale={[1.578, 3.45, 1.018]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Material0-material'].geometry}
                        material={materials['Material0-material']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Material1-material'].geometry}
                        material={materials['Material1-material']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Material2-material'].geometry}
                        material={materials['Material2-material']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Material3-material'].geometry}
                        material={materials['Material3-material']}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models-3d/podium.glb')