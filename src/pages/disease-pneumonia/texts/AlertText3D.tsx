import { Center, Text3D } from "@react-three/drei";

interface Props {
  text: string;
  size: number;
  height: number;
  position?: [number, number, number];
}

const AlertText3D =  ({ text, size , height , position = [0, 0, 2]  }: Props) => {
  return (
    <>
      <Center position={position}>
        <Text3D
          size={size}
          height={height}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          lineHeight={1}
          letterSpacing={0.05}
          font="/fonts/retro.json"
        >
          {text}
          <meshNormalMaterial  />
        </Text3D>
      </Center>
    </>
  );
};

export default AlertText3D;
