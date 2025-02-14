"use client";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { vertex, fragment } from "../shaders/shader";
import Carousel from "../components/Carousel";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import { Items } from "../components/Example";
// import { useCustomFog } from "../hooks/useCustomFog";

export const MainCanvas = () => {
  const ref = useRef();
  return (
    <div className=" mainCanvas">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: false }}
        dpr={[1, 2]}
        // ref={ref}
        shadows
        // dpr={[1, 2]}
        // camera={{ fov: 10, position: [0, 0, 0] }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const scene = useThree((s) => s.scene);
  const { width, height } = useThree((state) => state.viewport);
  const clock = new THREE.Clock();
  const uniforms = {
    uTime: { value: 0.0 },
  };

  useFrame(() => {
    uniforms.uTime.value = clock.getElapsedTime() / 10;
  });

  return (
    <>
      <mesh receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[width, height]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
          dithering={true}
          // uniforms={uniforms.current}
          // transparent={true}
          // wireframe={true}
        />
      </mesh>
    </>
  );
};
