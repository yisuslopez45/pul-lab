import { GLTF } from 'three-stdlib'
import { Mesh , MeshStandardMaterial , MeshPhysicalMaterial , AnimationClip  } from "three";

export  type ActionName = 'BeatingLung' | 'BeatingDiaphragm'

export interface GLTFAction extends AnimationClip {
  name: ActionName
}

export type GLTFResult = GLTF & {
  nodes: {
    Trachea_1: Mesh
    Trachea_2: Mesh
    Trachea_3: Mesh
    Trachea_4: Mesh
    Trachea_5: Mesh
    Trachea_6: Mesh
    Trachea_7: Mesh
    Trachea_8: Mesh
    Trachea_9: Mesh
    Trachea_10: Mesh
    Trachea_11: Mesh
    Lung_1: Mesh
    Lung_2: Mesh
    Lung_3: Mesh
    Lung_4: Mesh
    Diaphragm: Mesh
  }
  materials: {
    TracheaArytenoidMaterial: MeshStandardMaterial
    TracheaMaterial: MeshStandardMaterial
    TracheaCricoidMaterial: MeshStandardMaterial
    TracheaEpiglosttisMaterial: MeshStandardMaterial
    TracheaHyoidMaterial: MeshStandardMaterial
    TracheaLarynxMaterial: MeshStandardMaterial
    TracheaMedianMaterial: MeshStandardMaterial
    TracheaThyrocricoidMaterial: MeshStandardMaterial
    TracheaThyrohyoidMaterial: MeshStandardMaterial
    TracheaThyroidMaterial: MeshStandardMaterial
    TracheaVocalMaterial: MeshStandardMaterial
    LungRightMaterial: MeshPhysicalMaterial
    LungPulmonaryVeinsMaterial: MeshStandardMaterial
    LungPulmonaryArteriesMaterial: MeshStandardMaterial
    LungLeftMaterial: MeshPhysicalMaterial
    DiaphragmMaterial: MeshStandardMaterial
  }
  animations: GLTFAction[]
}