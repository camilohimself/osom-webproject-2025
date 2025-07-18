'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh, Vector3 } from 'three'

// Composant pour une montagne individuelle
function Mountain({ position, scale, color }: { position: Vector3; scale: number; color: string }) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[2, 4, 8]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )
}

// Composant pour les nuages
function Cloud({ position }: { position: Vector3 }) {
  const cloudRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.position.x = position.x + Math.sin(state.clock.elapsedTime * 0.2) * 0.5
      cloudRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={cloudRef} position={position}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshLambertMaterial color="#ffffff" opacity={0.8} transparent />
      </mesh>
      <mesh position={[0.3, 0.1, 0]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshLambertMaterial color="#ffffff" opacity={0.8} transparent />
      </mesh>
      <mesh position={[-0.3, 0.1, 0]}>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshLambertMaterial color="#ffffff" opacity={0.8} transparent />
      </mesh>
    </group>
  )
}

// Scène principale des Alpes
function AlpesContent() {
  const mountains = useMemo(() => [
    { position: new Vector3(-4, -1, -2), scale: 1.2, color: '#2d3748' },
    { position: new Vector3(-2, -1, -1), scale: 1.5, color: '#4a5568' },
    { position: new Vector3(0, -1, 0), scale: 1.8, color: '#2d3748' },
    { position: new Vector3(2, -1, -1), scale: 1.3, color: '#4a5568' },
    { position: new Vector3(4, -1, -2), scale: 1.1, color: '#2d3748' },
    { position: new Vector3(-3, -1, -3), scale: 0.9, color: '#718096' },
    { position: new Vector3(3, -1, -3), scale: 0.8, color: '#718096' },
  ], [])

  const clouds = useMemo(() => [
    { position: new Vector3(-3, 2, -1) },
    { position: new Vector3(2, 2.5, -2) },
    { position: new Vector3(0, 3, -3) },
    { position: new Vector3(-5, 1.5, -4) },
    { position: new Vector3(5, 2, -4) },
  ], [])

  return (
    <>
      {/* Éclairage */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />

      {/* Montagnes */}
      {mountains.map((mountain, index) => (
        <Mountain
          key={index}
          position={mountain.position}
          scale={mountain.scale}
          color={mountain.color}
        />
      ))}

      {/* Nuages */}
      {clouds.map((cloud, index) => (
        <Cloud key={index} position={cloud.position} />
      ))}

      {/* Sol/Brouillard */}
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshLambertMaterial color="#f7fafc" opacity={0.3} transparent />
      </mesh>
    </>
  )
}

// Composant principal exporté
export default function AlpesScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <AlpesContent />
      </Canvas>
    </div>
  )
}