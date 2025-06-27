import { Html } from '@react-three/drei';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    transform?: boolean;
    occlude?: boolean;
    position?: [number, number, number];
    distanceFactor? : number;
    className?: string;
}

const Html3D = ({
    children,
    transform = true,
    className = "annotation",
    distanceFactor = 10,
    position
}: Props ) => {
    return (
        <Html transform={transform}  position={ position} center distanceFactor={distanceFactor}  >
            <div className={className}>
                {children}
            </div>
        </Html>
    );
};

export default Html3D;
