import { Suspense, useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from 'three';
import { InhalerAsthmaModel } from "../models-3d/InhalerAsthmaModel";
import FloorModel from "../models-3d/FloorModel";

const AsthmaCanva = () => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const position: Vector3 = new Vector3(0, -30, 0);

  return (
    <>
      <Suspense fallback={<h5>Cargando...</h5>}>
        <Canvas
          camera={{ position: [10, 30, 70] }}
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
            position={[0, 10, 5]}
            intensity={8}
            castShadow={true}
          />
          <Environment preset="city" background={false} />
          <InhalerAsthmaModel rotation={[0, 15, 0]} scale={8} position={[0, 0,0]} castShadow />
            {/*<Html center>{<Button ... />}</Html> */}
          <FloorModel color="#f00707ff" position={position} metalnesVal={1} roughness={0.7} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default AsthmaCanva;
