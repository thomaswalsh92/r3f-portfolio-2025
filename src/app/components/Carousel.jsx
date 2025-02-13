import { useState, useRef } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import CarouselItem from "./CarouselItem";
import { useFrame, useThree } from "@react-three/fiber";
// import {
//   animate,
//   motion,
//   MotionValue,
//   useMotionValue,
//   useMotionValueEvent,
//   useScroll,
// } from "motion/react";

const projects = [
  {
    name: "Shimmer 002",
    tags: ["GRAPHIC", "3D", "VIDEO_EDITING", "MOTION"],
  },
  {
    name: "Project 2",
    tags: ["WEB", "3D"],
  },
  {
    name: "Project 3",
    tags: ["WEB", "3D", "MOTION"],
  },
  {
    name: "Project 4",
    tags: ["3D", "MOTION"],
  },
  {
    name: "Project 5",
    tags: ["3D", "MOTION"],
  },
  {
    name: "Project 6",
    tags: ["3D", "MOTION"],
  },
  { name: "Project 7", tags: ["GRAPHIC"] },
  { name: "Project 8", tags: ["GRAPHIC", "3D"] },
  //   { name: "Project 9", tags: ["GRAPHIC", "WEB"] },
];

const Carousel = () => {
  const xGap = 0.05;
  const collapsedScaleX = 0.5;
  const collapsedScaleY = 3;
  const expandedScaleX = 4;
  const expandedScaleY = 5.4;
  const collapsedTotalX = xGap + collapsedScaleX;
  const expandedTotalX = xGap + expandedScaleX;
  const { width } = useThree((state) => state.viewport);
  const [focusedItem, setFocusedItem] = useState(0);

  //first thing we wanna do is make the carousel endless with a central reference position. Endless scroll could be used to cycle the unfocused
  //carousel items around

  //
  return (
    <>
      <ScrollControls
        horizontal
        pages={
          (width - collapsedTotalX + projects.length * collapsedTotalX) / width
        }
      >
        <Scroll>
          {projects.map((project, i) => {
            return (
              <CarouselItem
                key={project.name + i}
                focusedItem={focusedItem}
                setFocusedItem={(index) => setFocusedItem(index)}
                xGap={xGap}
                collapsedScale={[collapsedScaleX, collapsedScaleY]}
                expandedScale={[expandedScaleX, expandedScaleY]}
                // name={project.name}
                // tags={project.tags}
                scale={[collapsedScaleX, collapsedScaleY]}
                //position={[i * xTotal, 0, 0]}
                index={i}
                numberOfProjects={projects.length}
              />
            );
          })}
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Carousel;
