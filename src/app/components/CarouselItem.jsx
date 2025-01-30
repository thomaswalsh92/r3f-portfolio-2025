import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, useScroll } from "@react-three/drei";
import { easing } from "maath";

const CarouselItem = ({ position, scale, index, numberOfProjects }) => {
  const ref = useRef();
  const data = useScroll();
  const clicked = 0;

  useFrame((state, delta) => {
    const y = data.curve(
      //first part of this represents a 0-1 cooridnate for the item
      //this is subtracted by
      //some tunable (1.5) constant that offsets it's starting position to the left
      index / numberOfProjects - 1.5 / numberOfProjects,
      //this is a constant that determines the "steepness" of the curve, e.g. 4
      4 / numberOfProjects
    );
    if (index == 0) console.log("Y:", y);
    easing.damp3(ref.current.scale, [scale[0], scale[1] + y, 0.2], 0.15, delta);
    // if (clicked !== null && index < clicked)
    //   easing.damp(ref.current.position, "x", position[0] - 2, 0.15, delta);
    // if (clicked !== null && index > clicked)
    //   easing.damp(ref.current.position, "x", position[0] + 2, 0.15, delta);
    // if (clicked === null || clicked === index)
    //   easing.damp(ref.current.position, "x", position[0], 0.15, delta);
    // easing.damp(
    //   ref.current.material,
    //   "grayscale",
    //   hovered || clicked === index ? 0 : Math.max(0, 1 - y),
    //   0.15,
    //   delta
    // );
    // easing.dampC(
    //   ref.current.material.color,
    //   hovered || clicked === index ? "white" : "#aaa",
    //   hovered ? 0.3 : 0.15,
    //   delta
    // );
  });
  return (
    <Image ref={ref} url="/orb-1.png" position={position} scale={scale}></Image>
  );
};

export default CarouselItem;
