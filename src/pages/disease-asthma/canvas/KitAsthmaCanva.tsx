import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Environment, Text3D, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from 'three';
import FloorModel from "../models-3d/FloorModel";
import { KitAsthmaModel } from "../models-3d/KitAsthmaModel";

const KitAsthmaCanva = () => {
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const position: Vector3 = new Vector3(0, -30, 0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const positionText: Vector3 = new Vector3(-55, -20, 20);
  const [modelRotationY, setModelRotationY] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "k") {
      setTriggerAnimation(true);
      setTimeout(() => setTriggerAnimation(false), 100);
    }
  };

  const handleRotate = (direction: "left" | "right") => {
    const delta = direction === "left" ? -0.2 : 0.2;
    setModelRotationY(prev => prev + delta);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "70vh" }}>

      <div className="dir_btn_container">
        <button className="arrow-button left" onClick={() => handleRotate("left")}>←</button>
        <button className="arrow-button right" onClick={() => handleRotate("right")}>→</button>
      </div>
      <Suspense fallback={<h5>Cargando...</h5>}>
        <Canvas
          camera={{ position: [10, 0, 70] }}
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
          <ambientLight intensity={0.8} />
          <directionalLight
            color="#fafaf8"
            position={[70, 0, 40]}
            intensity={5}
            castShadow={true}
          />
          <Environment preset="night" background />

          <Text3D
            font="/fonts/retro.json"
            size={10}
            height={2}
            curveSegments={10}
            bevelEnabled
            bevelThickness={1}
            bevelSize={0.1}
            bevelSegments={1}
            position={[-70, -30, 30]}
            receiveShadow
            castShadow
          >
            Presione "k"
            <meshStandardMaterial color="#8e953f" />
          </Text3D>

          <Text rotation={[0, 0, 0]} fontSize={6} position={positionText}  >
            Para ejecutar la animacion
          </Text>

          <group rotation={[0, modelRotationY, 0]}>
            <KitAsthmaModel
              triggerAnimation={triggerAnimation}
              rotation={[0.2, 0, 0]}
              scale={10} position={[20, -25, 40]}
              castShadow />
            <FloorModel color="#fefefe" position={position} metalnesVal={0.1} roughness={1} />
          </group>

        </Canvas>
      </Suspense>
    </div>
  );
};

export default KitAsthmaCanva;
