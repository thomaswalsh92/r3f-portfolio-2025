import { useRef } from "react";
import { Image } from "@react-three/drei";

const CarouselItem = ({ name, tags, position, scale }) => {
  const ref = useRef();
  return (
    <Image url="/orb-1.png" position={position} scale={scale} ref={ref}></Image>
  );
};

export default CarouselItem;
