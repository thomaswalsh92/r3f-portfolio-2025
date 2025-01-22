"use client";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import { useCustomFog } from "../hooks/useCustomFog";

export const MainCanvas = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 55, position: [0, 0, 5], near: 1, far: 40 }}
      >
        <color attach="background" args={["#1f1f20"]} />
        <fog attach="fog" args={["#ff2020", 0, 20]} />
        {/* <SoftShadows enabled focus={20} sample={16} size={32} /> */}
        <ambientLight intensity={0.015} />
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene = () => {
  useEffect(() => {
    useCustomFog();
  }, []);
  const depthBuffer = useDepthBuffer({ frames: 16 });
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html

  [];
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf"
  );

  console.log(THREE.ShaderChunk.fog_fragment);

  return (
    <>
      {/* <MovingSpot
        // depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[3, 3, 2]}
      /> */}
      {/*<MovingSpot
        // depthBuffer={depthBuffer}
        color="#b00c3f"
        position={[1, 3, 0]}
      /> */}
      <mesh
        position={[0, -1.03, 0]}
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        material={materials["Default OBJ.001"]}
        dispose={null}
      />

      {/* <mesh>
        <boxGeometry position={[0, 0, 0]} />
        <meshStandardMaterial color="blue" />
      </mesh> */}
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#878888" dithering />
      </mesh>
    </>
  );
};

const MovingSpot = ({ vec = new Vector3(), ...props }) => {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.2}
      attenuation={5}
      anglePower={4}
      intensity={6}
      {...props}
    />
  );
};
