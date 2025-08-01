import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useVideoTexture, Sky } from "@react-three/drei";
import { DoubleSide, Mesh } from "three";


const VideoScreen = () => {
  const texture = useVideoTexture("/video/asthma-video.mp4");
  const screenRef = useRef<Mesh>(null);

  useEffect(() => {
    if (texture) {
      texture.repeat.x = -1;
      texture.offset.x = 1;
    }
  }, [texture]);

  const thetaLength = (Math.PI * 2) / 3;

  return (
    <mesh 
      ref={screenRef} 
      position={[0, 15, 0]}
    >
      <cylinderGeometry 
        args={[20, 20, 20, 64, 1, true, -thetaLength / 2, thetaLength]} 
      />
      <meshBasicMaterial side={DoubleSide} map={texture} />
    </mesh>
  );
};


const RoundFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <circleGeometry args={[25, 64]} /> 
      <meshStandardMaterial color="#149d38" roughness={0.8} metalness={0.2} />
    </mesh>
  );
};

const Custom3DScene = () => {
  return (
    <div style={{ width: "70%", height: "60vh", marginBottom: "20px", justifySelf: "center" }}>
      <Suspense fallback={<h5>Cargando escena...</h5>}>
        <Canvas camera={{ position: [-10, 0, 20] }}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 0, 10]} intensity={1} />
          <Environment preset="night" background={false} />
          <Sky distance={3000} sunPosition={[1, 0, 1]} inclination={30} azimuth={1}  />
          
          <group rotation={[0, Math.PI, 0]} position={[0, -10, 0]} >
            <RoundFloor />
            <VideoScreen />
          </group>
          
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Custom3DScene;