import { useGLTF } from '@react-three/drei'

export default function CancerModel(props: any) {
  // Ruta exacta desde la carpeta public
  const { scene } = useGLTF('/models-3d/lungcancer/marlboro_cigarettes.glb')

  return <primitive object={scene} {...props} />
}

// Precarga opcional (mejora rendimiento)
useGLTF.preload('/models-3d/lungcancer/marlboro_cigarettes.glb')