import { FC, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RapierRigidBody, CollisionPayload,RigidBody } from '@react-three/rapier';
import { CannonProps } from '../Interfaces';


export const Cannon: FC<CannonProps> = ({ onHitByAnswer }) => {
 
    const cannonRef = useRef<RapierRigidBody>(null);
    const { viewport } = useThree();

    useFrame((state) => {
        if (cannonRef.current) {
            const x = (state.mouse.x * viewport.width) / 2;
            cannonRef.current.setNextKinematicTranslation({ x: x, y: -viewport.height / 2 + 1, z: 0 });
        }
    });

    const handleCollision = (payload: CollisionPayload) => {
        if (payload.other.rigidBodyObject?.name === "answer") {
            onHitByAnswer();
        }
    };

    return (
        <RigidBody 
            ref={cannonRef} 
            type="kinematicPosition" 
            name="cannon"
            onCollisionEnter={handleCollision}
        >
            <mesh>
                <coneGeometry args={[0.4, 1, 10]} />
                <meshStandardMaterial color="gold" />
            </mesh>
        </RigidBody>
    );
}
