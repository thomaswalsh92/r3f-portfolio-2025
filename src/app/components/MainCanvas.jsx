"use client";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Canvas, MeshStandardMaterial } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import ProjectCarousel from "./ProjectCarousel";
import { useCustomFog, useCustomFogTime } from "../hooks/useCustomFog";
import { degToRad } from "three/src/math/MathUtils";
// import { useCustomFog } from "../hooks/useCustomFog";

export const MainCanvas = () => {
  useEffect(() => {
    useCustomFog();
  }, []);

  console.log(useCustomFogTime());
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 15, position: [0, 0, 5], near: 1, far: 5000 }}
      >
        <Scene />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

const Scene = () => {
  return (
    <>
      <ProjectCarousel positionOffset={[0, 0, -20]} />
      {/* <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#878888" dithering />
      </mesh> */}
      <color attach="background" args={["#1f1f20"]} />
      <fogExp2 attach="fog" args={[0x999999, 0.2]} />
      <directionalLight position={[20, 100, 10]} target-position={[0, 0, 0]} />
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={degToRad(90)}>
        <planeGeometry args={[50, 500]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
      <mesh receiveShadow position={[0, 10, -30]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#050505" />
      </mesh>
    </>
  );
};
