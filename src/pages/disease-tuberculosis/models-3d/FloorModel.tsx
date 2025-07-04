import { Vector3 } from "three";

interface Props {
  color: string;
  position: Vector3;
  metalnesVal: number;
  roughness: number;
}

const FloorModel = (props: Props) => {
  return (
    <mesh 
      rotation-x={-Math.PI / 2} 
      receiveShadow={true} 
      position={props.position}>
    <planeGeometry args={[80, 80]} />
    <meshStandardMaterial
      roughness={props.roughness}
      metalness={props.metalnesVal}
      color={props.color}
    />
  </mesh>
  );
};

export default FloorModel;