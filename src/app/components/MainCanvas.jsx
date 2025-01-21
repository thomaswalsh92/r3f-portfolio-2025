"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const MainCanvas = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 55, position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
