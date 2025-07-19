import { Suspense, /* useEffect, */ useState } from "react";
import { OrbitControls, Environment, Sparkles, Text3D, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from 'three';
import { InhalerAsthmaModel } from "../models-3d/InhalerAsthmaModel";
import FloorModel from "../models-3d/FloorModel";

const InhalerAsthmaCanva = () => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [modelRotationY, setModelRotationY] = useState(45);
  //const [triggerAnimation, setTriggerAnimation] = useState(false);
  const position: Vector3 = new Vector3(0, -30, 0);
  const positionText: Vector3 = new Vector3(-40, 18, 0);

  /* const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "x") {
      setTriggerAnimation(true);
      setTimeout(() => setTriggerAnimation(false), 100);
    }
  }; */

  const handleRotate = (direction: "left" | "right") => {
    const delta = direction === "left" ? -0.2 : 0.2;
    setModelRotationY(prev => prev + delta);
  };

  /* useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []); */

  return (
    <div style={{ position: "relative", width: "100%", height: "70vh" }}>

      <div className="dir_btn_container">
        <button className="arrow-button left" onClick={() => handleRotate("left")}>←</button>
        <button className="arrow-button right" onClick={() => handleRotate("right")}>→</button>
      </div>

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
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          <ambientLight intensity={1} />

          <directionalLight
            color="#ea2f12"
            position={[0, 10, 5]}
            intensity={8}
            castShadow={true}
          />

          <Text3D
            font="/fonts/retro.json"
            size={10}
            height={2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.1}
            bevelSegments={10}
            position={[-28, -5, 15]}
          >
            Presione "x"
            <meshStandardMaterial color="#0ef02c" />
          </Text3D>

          <Text rotation={[0, 0, 7]} fontSize={6} position={positionText} >
            Para ejecutar la animacion
          </Text>

          <Environment preset="city" background={false} />

          <group rotation={[0, modelRotationY, 0]}>
            <InhalerAsthmaModel
              scale={9}
              position={[0, -15, 0]}
              castShadow
              triggerAnimation={false}
            />
            <Sparkles size={40} scale={95} speed={10} />
          </group>

          <FloorModel color="#d53535" position={position} metalnesVal={1} roughness={0.7} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default InhalerAsthmaCanva;
