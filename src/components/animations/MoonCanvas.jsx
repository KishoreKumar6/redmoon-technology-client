import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Moon() {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08
      meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.05
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.04)
    }
  })

  const moonMaterial = useMemo(
    () => (
      <MeshDistortMaterial
        color="#cc0000"
        emissive="#330000"
        emissiveIntensity={0.3}
        roughness={0.7}
        metalness={0.1}
        distort={0.15}
        speed={1.5}
      />
    ),
    []
  )

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      {/* Main moon sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        {moonMaterial}
      </mesh>

      {/* Shadow overlay to create crescent effect */}
      <mesh position={[0.6, 0, 0.1]}>
        <sphereGeometry args={[1.65, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial
          color="#ff0000"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial
          color="#ff0000"
          transparent
          opacity={0.015}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  const ptsRef = useRef()
  useFrame((state) => {
    if (ptsRef.current) {
      ptsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={ptsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ff0000" size={0.03} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

export default function MoonCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[-4, 3, 3]} color="#ff0000" intensity={2} />
      <pointLight position={[4, -2, -2]} color="#8b0000" intensity={1} />
      <directionalLight position={[-3, 2, 2]} color="#ffffff" intensity={0.3} />
      <Stars radius={60} depth={50} count={3000} factor={3} fade speed={0.5} />
      <Moon />
      <Particles />
    </Canvas>
  )
}
