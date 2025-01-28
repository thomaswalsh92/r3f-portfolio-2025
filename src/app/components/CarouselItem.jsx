import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, useScroll } from "@react-three/drei";

const CarouselItem = ({ name, tags, position, scale, index }) => {
  const data = useScroll();
  // useFrame(() => {
  //   index === 0 && console.log(data.curve());
  // });
  // const ref = useRef();
  return <Image url="/orb-1.png" position={position} scale={scale}></Image>;
};

export default CarouselItem;
