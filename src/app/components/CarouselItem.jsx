import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Image } from "@react-three/drei";
import { easing } from "maath";
import { useTransform, useScroll, useTime } from "motion";

const CarouselItem = ({
  project,
  index,
  style,
  // focusedItem,
  // setFocusedItem,
  // numberOfProjects,
  // collapsedScale,
  // expandedScale,
}) => {
  const ref = useRef();

  return (
    <div className="carouselItem" style={style} ref={ref} url="/orb-1.png">
      {project.name}
    </div>
  );
};

export default CarouselItem;
