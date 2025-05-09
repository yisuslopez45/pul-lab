import { Suspense, useState } from "react";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from 'three';
import { LungAsthmaModel } from "../models-3d/LungAsthmaModel";
import FloorModel from "../models-3d/FloorModel";

const AsthmaCanva = () => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const position: Vector3 = new Vector3(0, -30, 0);

  return (
    <>
      <Suspense fallback={<h5>Cargando...</h5>}>
        <Canvas
          camera={{ position: [2, 0, 50] }}
          style={{ height: "70vh", width: "100%" }}
          shadows={true}
          onPointerEnter={() => setControlsEnabled(true)}
          onPointerLeave={() => setControlsEnabled(false)}
        >
          <OrbitControls
            enabled={controlsEnabled} 
            enableZoom={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={1} />
          <directionalLight
            color="white"
            position={[5, 100, 50]}
            intensity={8}
            castShadow={true}
          />
          <Environment preset="city" background={false} />
          <LungAsthmaModel rotation={[0, 0, 0]} scale={60} position={[0, 0, 0.8]} castShadow />
            {/*<Html center>{<Button ... />}</Html> */}
          <FloorModel color="#f0b100" position={position} metalnesVal={1} roughness={0.7} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default AsthmaCanva;
