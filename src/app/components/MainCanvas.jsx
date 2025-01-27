"use client";
import { Canvas, MeshStandardMaterial } from "@react-three/fiber";
import { useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { vertex, fragment } from "../shaders/shader";
import Carousel from "../components/Carousel";
import { useThree } from "@react-three/fiber";
// import { Items } from "../components/Example";
// import { useCustomFog } from "../hooks/useCustomFog";

export const MainCanvas = () => {
  const ref = useRef();
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
        // ref={ref}
        shadows
        // dpr={[1, 2]}
        camera={{ fov: 15, position: [0, 0, 4], near: 1, far: 5000 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const scene = useThree((s) => s.scene);

  return (
    <mesh receiveShadow position={[0, 0, -100]}>
      <planeGeometry args={[70, 40]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        // uniforms={uniforms.current}
        // transparent={true}
        // wireframe={true}
      />
      <Carousel width={width} height={height} />
    </mesh>
  );
};
