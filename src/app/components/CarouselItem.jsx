import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, useScroll } from "@react-three/drei";
import { easing } from "maath";

const CarouselItem = ({
  scale,
  index,
  focusedItem,
  setFocusedItem,
  numberOfProjects,
  collapsedScale,
  expandedScale,
}) => {
  const ref = useRef();
  const data = useScroll();

  let position = [0, 0, 0];
  if (focusedItem < index) {
    position[0] = index * collapsedScale[0] + expandedScale[0];
  }
  if (focusedItem > index) {
    position[0] = index * collapsedScale[0] - expandedScale[0];
  }

  useFrame((state, delta) => {
    const roundedOffset = Math.floor(data.offset * numberOfProjects);
    if (roundedOffset === index) {
      setFocusedItem(index);
      // setFocusedItem(index);
    }

    if (index === focusedItem) {
      console.log("hello, it's: ", index);
      ref.current.scale.x = scale[0] * 8;
      ref.current.scale.y = scale[1] * 1.8;
    }

    if (index !== focusedItem) {
      ref.current.scale.x = scale[0] * 1.0;
      ref.current.scale.y = scale[1] * 1.0;
    }
  });
  return (
    <Image
      ref={ref}
      url="/orb-1.png"
      position={position}
      scale={collapsedScale}
    ></Image>
  );
};

export default CarouselItem;
