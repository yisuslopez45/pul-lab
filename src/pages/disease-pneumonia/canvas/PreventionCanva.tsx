import { Suspense, useMemo } from "react";
import {
  OrbitControls,
  Environment,
  KeyboardControlsEntry,
  KeyboardControls,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import AlertText3D from "../texts/AlertText3D";
// import useStoreBoard from "../store/useStoreBoard";
import FloorModel from "../models-3d/FloorModel";
import { VirusModel } from "../models-3d/VirusModel";
import Html3D from "../components/Html3D";
import Button from "../../../layout/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStoreRotation from "../store/useStoreRotate";
import useStoreBoard from "../store/useStoreBoard";

enum Controls {
  animation = "animation",
}

const PreventionCanva = () => {
  const {  isActiveAnimation} = useStoreBoard()
  const { setDirection } = useStoreRotation()

  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [{ name: Controls.animation, keys: ["Space"] }],
    []
  );


  return (
    <>
      <Suspense fallback={<Spinner />}>
        <KeyboardControls map={map}>
          <Canvas
            camera={{ position: [0, 0, 6] }}
            style={{ height: "70vh", width: "100%" }}
            shadows={true}
          >
            <OrbitControls
              enableZoom={true}
              enableRotate={true}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={1.5} />
            <directionalLight
              color="white"
              position={[2, 20, 5]}
              intensity={20}
              castShadow={true}
            />
            <Sky distance={100} inclination={4}  rayleigh={1} turbidity={100} />
            <Environment preset="dawn" background={false} />
            <VirusModel scale={ !isActiveAnimation ? 1100 : 1400} position={[0, 0, 0.8]} castShadow />

            <Html3D position={[3, 0, 2.2]} transform={false}  >
              <Button
                onClick={() => setDirection("left")}
                label=""
                px={2}
                py={2}
                icon={<ChevronRight className="p-0 m-0" />}
              />
            </Html3D>

            <Html3D position={[-3, 0, 2.2]} transform={false} >
              <Button
                label=""
                px={2}
                py={2}
                icon={<ChevronLeft className="p-0 m-0" />}
                onClick={() => setDirection("right")}
              />
            </Html3D>

            <AlertText3D
              text={`Presione "Espacio" `}
              height={0.1}
              size={0.6}
              position={[0 , -2.5, 2.2]}
            />

            <FloorModel />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </>
  );
};

export default PreventionCanva;
