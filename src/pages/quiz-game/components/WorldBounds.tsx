import { FC } from 'react';
import { useThree } from '@react-three/fiber';
import { RigidBody, CuboidCollider } from '@react-three/rapier';


export const WorldBounds: FC = () => {

    const { viewport } = useThree();
    const { height, width } = viewport;

    return (
        <>
            <RigidBody type="fixed" restitution={0.5} name="floor">
                <CuboidCollider args={[width / 2, 0.5, 10]} position={[0, -height / 2 - 0.5, 0]} />
            </RigidBody>
            <RigidBody type="fixed">
                <CuboidCollider args={[0.5, height / 2, 10]} position={[-width / 2 - 0.5, 0, 0]} />
            </RigidBody>
            <RigidBody type="fixed">
                <CuboidCollider args={[0.5, height / 2, 10]} position={[width / 2 + 0.5, 0, 0]} />
            </RigidBody>
        </>
    );
}
