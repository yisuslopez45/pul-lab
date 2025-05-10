import { JSX } from "react";

type MeshProps = JSX.IntrinsicElements['mesh'];

interface FloorProps extends MeshProps {
  color: string;
  roughness: number;
  metalnesVal: number;
}

const FloorModel = ({ position, color, roughness, metalnesVal, ...props }: FloorProps) => {
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      {...props}
    >
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalnesVal} />
    </mesh>
  );
};

export default FloorModel;

