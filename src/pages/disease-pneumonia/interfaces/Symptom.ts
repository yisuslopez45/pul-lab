import { Mesh , MeshStandardMaterial , MeshPhysicalMaterial   } from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Thermometer_1: Mesh
    Thermometer_2: Mesh
    Thermometer_3: Mesh
    Syringe_1: Mesh
    Syringe_2: Mesh
    FaceMask: Mesh
    Cylinder_1: Mesh
    Cylinder_2: Mesh
  }
  materials: {
    ThermometerScreenMaterial: MeshStandardMaterial
    ThermometerButtonsMaterial: MeshStandardMaterial
    PaletteMaterial001: MeshStandardMaterial
    SyringeLinesMaterial: MeshStandardMaterial
    PaletteMaterial002: MeshStandardMaterial
    FacemaskMaterial: MeshStandardMaterial
    CylinderLabelMaterial: MeshStandardMaterial
    PaletteMaterial003: MeshPhysicalMaterial
  }
 
}
