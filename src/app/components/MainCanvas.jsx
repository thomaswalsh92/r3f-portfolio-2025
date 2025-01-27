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
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        // ref={ref}
        shadows
        dpr={[1, 2]}
        camera={{ fov: 15, position: [0, 0, 0], near: 1, far: 5000 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene = () => {
  return (
    <>
      <mesh receiveShadow position={[0, 0, -100]}>
        <planeGeometry args={[70, 40]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          // uniforms={uniforms.current}
          // transparent={true}
          // wireframe={true}
        />
        <Carousel />
      </mesh>
    </>
  );
};
