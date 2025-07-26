import { FC, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {  Text } from '@react-three/drei';
import { RapierRigidBody, CollisionPayload, RigidBody  } from '@react-three/rapier';
import { AnswerObjectProps } from '../Interfaces';


export const AnswerObject: FC<AnswerObjectProps> = ({ position, option, isCorrect, onHit, onMiss }) => {

    const rigidBodyRef = useRef<RapierRigidBody>(null);
    const [isHit, setIsHit] = useState(false);
    const { viewport } = useThree();

    useFrame(() => {
        if (rigidBodyRef.current && !isHit) {
            if (rigidBodyRef.current.translation().y < -viewport.height / 2 + 1.5) {
                setIsHit(true); 
                onMiss(); 
                rigidBodyRef.current.setEnabled(false); 
            }
        }
    });

    const handleCollision = (payload: CollisionPayload) => {
        if (isHit) return; 
        
        if (payload.other.rigidBodyObject?.name === "projectile") {
            setIsHit(true); 
            onHit(isCorrect); 
            if(rigidBodyRef.current) {
               rigidBodyRef.current.setEnabled(false); 
            }
        }
    };

    if (isHit) return null;

    return (
        <RigidBody
            ref={rigidBodyRef}
            position={position}
            restitution={0}
            name="answer"
            linearDamping={2.0} 
            colliders="cuboid" 
            onCollisionEnter={handleCollision}
        >
            <mesh>
                <boxGeometry args={[3, 1, 1]} />
                <meshStandardMaterial color={"lightblue"} />
            </mesh>

            <Text position={[0, 0, 0.6]} fontSize={0.4} color="black" anchorX="center" anchorY="middle">
                {option}
            </Text>

        </RigidBody>
    );
}
