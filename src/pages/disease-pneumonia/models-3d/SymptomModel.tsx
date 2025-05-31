import { JSX, useRef } from "react";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { GLTFResult } from "../interfaces/Symptom";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import useStoreBoard from "../store/useStoreBoard";
import useStoreRotation from "../store/useStoreRotate";

export function SymptomModel(props: JSX.IntrinsicElements["group"]) {
  const groupRef = useRef<Group>(null);
  const { setStateAnimation } = useStoreBoard();
  const { direction } = useStoreRotation();

  const { nodes, materials } = useGLTF(
    "/models-3d/pneumonia/Symptom-transformed.glb"
  ) as unknown as GLTFResult;

  const [, get] = useKeyboardControls();

  useFrame(() => {
    const { animation } = get();

    setStateAnimation(false);

    if (animation && groupRef.current) {
      setStateAnimation(true);
      groupRef.current.rotation.y += 0.04;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;

      if (direction === "left") {
        groupRef.current.rotation.y += 0.02;
      } else if (direction === "right") {
        groupRef.current.rotation.y -= 0.02;
      }
    }
  });
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.FaceMask.geometry}
        material={materials.FacemaskMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Thermometer_1.geometry}
        material={materials.ThermometerScreenMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Thermometer_2.geometry}
        material={materials.ThermometerButtonsMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Thermometer_3.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        geometry={nodes.Syringe_1.geometry}
        material={materials.SyringeLinesMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Syringe_2.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.CylinderLabelMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials.PaletteMaterial003}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/pneumonia/Symptom-transformed.glb");
