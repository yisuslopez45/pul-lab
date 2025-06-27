import { Suspense, useMemo } from "react";
import {
  OrbitControls,
  Environment,
  KeyboardControlsEntry,
  KeyboardControls,
  Text,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Spinner from "../../../layout/components/Spinner";
import AlertText3D from "../texts/AlertText3D";
// import useStoreBoard from "../store/useStoreBoard";
import FloorModel from "../models-3d/FloorModel";
import { PillsModel } from "../models-3d/PillsModel";
import Html3D from "../components/Html3D";
import Button from "../../../layout/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStoreRotation from "../store/useStoreRotate";
import useStoreBoard from "../store/useStoreBoard";

enum Controls {
  animation = "animation",
}

const TreatmentCanva = () => {
  const { isActiveAnimation } = useStoreBoard()
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

            <spotLight
              color={'red'}
              position={[2, 5, 5]}
              distance={20}
              intensity={5}
              penumbra={2}
              castShadow={true}
            />

            <Environment preset="dawn" background={false} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <PillsModel scale={450} position={[0, -1, 0.8]} castShadow />

            <Html3D transform={false} position={[4.5, 0, 2.5]} distanceFactor={18} >
              <Button
                onClick={() => setDirection("left")}
                label=""
                px={1}
                py={1}
                icon={<ChevronRight className="p-0 m-0" />}
              />
            </Html3D>

            <Html3D transform={false} position={[-4.5, 0, 2.5]} distanceFactor={18} >
              <Button
                label=""
                px={1}
                py={1}
                icon={<ChevronLeft className="p-0 m-0" />}
                onClick={() => setDirection("right")}
              />
            </Html3D>

            <AlertText3D
              text={`Antibiotico`}
              height={0.1}
              size={0.8}
              position={[0.5, -1.6, 2.5]}
            />

            {!isActiveAnimation && (
              <>
                <Text
                  color={'#7587EB'}
                  position={[0.5, 2.5 , 2.5]}
                  font="/fonts/retro.ttf"
                >
                  Presione "Espacio" Pausar
                </Text>
              </>
            )}

            {isActiveAnimation && (
              <>
                <Text
                  color={'#7587EB'}
                  position={[0.5, 2.5, 2.5]}
                  font="/fonts/retro.ttf"
                >
                  Suelte "Espacio" Reproducir
                </Text>
              </>
            )}

            <FloorModel />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </>
  );
};

export default TreatmentCanva;
