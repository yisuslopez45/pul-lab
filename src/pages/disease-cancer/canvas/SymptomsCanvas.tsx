import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, KeyboardControls } from '@react-three/drei'
import CancerModel from '../models-3d/cancerModel'

export default function SymptomsCanvas() {
  const [hovered, setHovered] = useState(false)
  const modelRef = useRef<any>(null)

  return (
    <div style={{ 
      width: '100%', 
      height: '500px',
      border: '2px solid red'
    }}>
      <Suspense fallback={
        <div style={{
          color: 'white',
          background: '#222',
          padding: '1rem'
        }}>
          CARGANDO MODELO 3D...
        </div>
      }>
        <KeyboardControls
          map={[
            { name: 'rotateLeft', keys: ['ArrowLeft'] },
            { name: 'rotateRight', keys: ['ArrowRight'] }
          ]}
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true }}
            style={{ background: '#0b0b3b' }} // Color de fondo por defecto
          >
            {/* Luces de la escena */}
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />

            {/* FONDO VISUAL con preset */}
            <Environment preset="city" background />

            {/* Modelo 3D con interacción por mouse */}
            <CancerModel
              ref={modelRef}
              position={[0, -1, 0]}
              scale={hovered ? 1.5 : 1.2}
              onPointerEnter={() => setHovered(true)}
              onPointerLeave={() => setHovered(false)}
            />

            {/* Controles de cámara */}
            <OrbitControls 
              enableZoom={true}
              enablePan={false}
            />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </div>
  )

}
