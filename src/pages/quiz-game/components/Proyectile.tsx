import { FC, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, CollisionPayload,RigidBody} from '@react-three/rapier';
import { ProjectileProps } from '../Interfaces';


export const Projectile: FC<ProjectileProps> = ({ position, onRemove }) => {

    const rigidBodyRef = useRef<RapierRigidBody>(null);

    useEffect(() => {
        if (rigidBodyRef.current) {
            rigidBodyRef.current.setLinvel({ x: 0, y: 15, z: 0 }, true);
        }
    }, []);

    useFrame(() => {
        if (rigidBodyRef.current && rigidBodyRef.current.translation().y > 20) {
            onRemove();
        }
    });

    // Maneja las colisiones físicas del proyectil.
    const handleCollision = (payload: CollisionPayload) => {
        // Si choca con un objeto llamado "answer", se elimina.
        if (payload.other.rigidBodyObject?.name === "answer") {
            onRemove();
        }
    };

    return (
        <RigidBody
            ref={rigidBodyRef}
            position={position}
            colliders="ball"
            ccd={true}
            name="projectile"
            onCollisionEnter={handleCollision}
        >
            <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="tomato" />
            </mesh>
        </RigidBody>
    );
}
