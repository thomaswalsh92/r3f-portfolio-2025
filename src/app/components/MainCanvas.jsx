"use client";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import ProjectCarousel from "./ProjectCarousel";
import { useCustomFog } from "../hooks/useCustomFog";
// import { useCustomFog } from "../hooks/useCustomFog";

export const MainCanvas = () => {
  useEffect(() => {
    useCustomFog();
  }, []);

  console.log(THREE);
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 30, position: [0, 0, 5], near: 1, far: 50000 }}
      >
        <color attach="background" args={["#1f1f20"]} />
        <fogExp2 attach="fog" args={[0xffffff, 0.5]} />
        <directionalLight
          position={[20, 100, 10]}
          target-position={[0, 0, 0]}
        />
        <Scene />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

const Scene = () => {
  return (
    <>
      <ProjectCarousel scene={Scene} />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#878888" dithering />
      </mesh>
    </>
  );
};
