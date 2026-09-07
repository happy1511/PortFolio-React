import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const PRIMARY_1 = "#0ea5ea";
const PRIMARY_2 = "#0bd1d1";

const PARTICLE_COUNT = 900;
const FIELD_RADIUS = 9;

const ParticleField = () => {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const array = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const radius = FIELD_RADIUS * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      array[i * 3 + 2] = radius * Math.cos(phi);
    }
    return array;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={PRIMARY_2}
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingKnot = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25;
  });

  return (
    <mesh ref={meshRef} scale={0.85} position={[0, 0, -1]}>
      <torusKnotGeometry args={[1, 0.28, 160, 24]} />
      <meshStandardMaterial
        color={PRIMARY_1}
        emissive={PRIMARY_2}
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.7}
        wireframe
      />
    </mesh>
  );
};

const PointerParallax = ({ children, enabled }) => {
  const groupRef = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current || !enabled) return;
    const targetX = (state.pointer.x * viewport.width) / 40;
    const targetY = (state.pointer.y * viewport.height) / 40;
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetX,
      3,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      3,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

const HeroCanvas = ({ reducedMotion = false }) => {
  return (
    <Canvas
      className="pointer-events-none"
      dpr={[1, 1.75]}
      frameloop={reducedMotion ? "demand" : "always"}
      camera={{ position: [0, 0, 8], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} color={PRIMARY_1} />
      <pointLight position={[-5, -3, -4]} intensity={22} color={PRIMARY_2} />
      <Suspense fallback={null}>
        <PointerParallax enabled={!reducedMotion}>
          <FloatingKnot />
          <ParticleField />
        </PointerParallax>
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
