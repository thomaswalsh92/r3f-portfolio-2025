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
      index / numberOfProjects - 1.5 / numberOfProjects,
      4 / numberOfProjects
    );
    easing.damp3(ref.current.scale, [scale[0], scale[1] + y, 0.2], 0.15, delta);
  });
  return (
    <Image ref={ref} url="/orb-1.png" position={position} scale={scale}></Image>
  );
};

export default CarouselItem;
