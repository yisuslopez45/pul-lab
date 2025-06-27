import { Suspense, useState, useRef, useEffect, SetStateAction, Dispatch } from "react";
import { OrbitControls, Environment, Stars, Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import FloorModel from "../models-3d/FloorModel";
import { PersonAsthmaModel } from "../models-3d/PersonAsthmaModel";
import "./style/main.css";

const PersonAsthmaCanva = () => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [zoom, setZoom] = useState(40);
  const modelRef = useRef<Group | null>(null);
  const rotationYRef = useRef(0);

  const zoomTargetRef = useRef(40);
  const zoomStepRef = useRef(0);
  const zoomDirRef = useRef(-1);
  const zoomActiveRef = useRef(false);

  const position: Vector3 = new Vector3(0, -30, 0);

  const handleRotate = (direction: "left" | "right") => {
    const delta = direction === "left" ? -0.2 : 0.2;
    rotationYRef.current += delta;
  };

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.max(10, Math.min(100, prev + delta)));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "z" && !zoomActiveRef.current) {
      zoomActiveRef.current = true;
      zoomTargetRef.current = 35;
      zoomDirRef.current = -1;
      zoomStepRef.current = 0;
    }
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

      <div className="zoom_btn_container">
        <button className="custom-button" onClick={() => handleZoom(5)}>+</button>
        <button className="custom-button" onClick={() => handleZoom(-5)}>−</button>
      </div>

      <Suspense fallback={<h5>Cargando...</h5>}>
        <Canvas
          camera={{ position: [2, 0, 50] }}
          style={{ height: "100%", width: "100%" }}
          shadows
          onPointerEnter={() => setControlsEnabled(true)}
          onPointerLeave={() => setControlsEnabled(false)}
        >
          <OrbitControls
            enabled={controlsEnabled}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={1.5} />
          <directionalLight
            color="blue"
            position={[30, 50, 50]}
            intensity={30}
            castShadow
          />
          <Environment preset="city" background={false} />

          <group
            ref={modelRef}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")} >

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <PersonAsthmaModel scale={zoom} position={[0, 0, 0.8]} castShadow />

          </group>

          <Text3D
            font="/fonts/retro.json"
            size={7}
            height={2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.1}
            bevelSegments={10}
            position={[-18, -20, 15]}
          >
            Presione "Z"
            <meshStandardMaterial color="#6c4eff" />
          </Text3D>

          <SceneUpdater
            refGroup={modelRef}
            rotationYRef={rotationYRef}
            zoom={zoom}
            setZoom={setZoom}
            zoomActiveRef={zoomActiveRef}
            zoomTargetRef={zoomTargetRef}
            zoomDirRef={zoomDirRef}
            zoomStepRef={zoomStepRef}
          />

          <FloorModel color="#f0b100" position={position} metalnesVal={1} roughness={0.7} />
        </Canvas>
      </Suspense>
    </div>
  );
};

//Animaciones de rotación y zoom suave
const SceneUpdater = ({
  refGroup,
  rotationYRef,
  zoom,
  setZoom,
  zoomActiveRef,
  zoomTargetRef,
  zoomDirRef,
  zoomStepRef,
}: {
  refGroup: React.RefObject<Group | null>;
  rotationYRef: React.RefObject<number>;
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  zoomActiveRef: React.RefObject<boolean>;
  zoomTargetRef: React.RefObject<number>;
  zoomDirRef: React.RefObject<number>;
  zoomStepRef: React.RefObject<number>;
}) => {
  useFrame(() => {
    // rotación
    if (refGroup.current) {
      refGroup.current.rotation.y = rotationYRef.current;
    }

    // animación de zoom
    if (!zoomActiveRef.current) return;

    const currentZoom = zoom;
    const target = zoomTargetRef.current;
    const newZoom = currentZoom + (target - currentZoom) * 0.08;
    setZoom(newZoom);

    if (Math.abs(newZoom - target) < 0.1) {
      if (zoomStepRef.current >= 7) {
        zoomActiveRef.current = false;
      } else {
        zoomDirRef.current *= -1;
        zoomTargetRef.current = target + 5 * zoomDirRef.current;
        zoomStepRef.current += 1;
      }
    }
  });

  return null;
};

export default PersonAsthmaCanva;
