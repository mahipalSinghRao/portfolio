import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, Stars, Text } from "@react-three/drei";

function SceneContent() {
  const ring = useRef();
  const core = useRef();
  const lines = useRef();

  useFrame(({ camera, clock, mouse }) => {
    camera.position.z = 4.2 + Math.sin(clock.elapsedTime * 0.35) * 0.08;
    if (ring.current) {
      ring.current.rotation.y += 0.004;
      ring.current.rotation.x = mouse.y * 0.2;
    }
    if (core.current) {
      core.current.rotation.y -= 0.006;
      core.current.rotation.x = mouse.y * 0.1;
      core.current.position.y = Math.sin(clock.elapsedTime * 1.4) * 0.08;
    }
    if (lines.current) {
      lines.current.position.y = -0.2 + Math.sin(clock.elapsedTime * 1.1) * 0.05;
      lines.current.rotation.y = mouse.x * 0.35;
    }
  });

  return (
    <>
      <color attach="background" args={["#05070c"]} />
      <fog attach="fog" args={["#05070c", 6, 12]} />
      <ambientLight intensity={0.35} />
      <spotLight position={[3, 5, 5]} intensity={2.6} color="#16f2b3" angle={0.32} penumbra={0.7} />
      <pointLight position={[-3, 3, -2]} intensity={1.1} color="#00d1ff" />
      <Stars radius={52} depth={45} count={1800} factor={2.2} fade speed={0.6} />
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.55}>
        <mesh ref={core}>
          <octahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#16f2b3" emissive="#16f2b3" emissiveIntensity={0.7} wireframe />
        </mesh>
      </Float>
      <mesh ref={ring} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[1.55, 0.06, 16, 120]} />
        <meshStandardMaterial color="#00d1ff" emissive="#00d1ff" emissiveIntensity={0.7} />
      </mesh>
      <group ref={lines} position={[0, -0.2, 0]}>
        <Text fontSize={0.13} color="#9fffe4" position={[0, 0.38, 0]}>
          const app = build({"{ speed: 'fast', ux: 'clean' }"});
        </Text>
        <Text fontSize={0.12} color="#7de9ff" position={[0, 0.12, 0]}>
          git commit -m "ship polished experience"
        </Text>
        <Text fontSize={0.12} color="#58ffc0" position={[0, -0.12, 0]}>
          npm run build && deploy --prod
        </Text>
      </group>
      <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={10} blur={2.5} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.35} />
    </>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.6, 4.2], fov: 50 }}>
      <SceneContent />
    </Canvas>
  );
}

export default HeroScene;
