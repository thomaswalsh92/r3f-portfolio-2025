"use client";

import { useState, useRef, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

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
  const scroll = useScroll();

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [focused, setFocused] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
    console.log(ref.current);
  }, []);

  //item
  const expandedHeight = 475;
  const expandedWidth = 350;
  const collapsedHeight = 350;
  const collapsedWidth = 60;
  const gap = 30; /*prettier-ignore*/

  //distribution
  const margin = 128;
  const range = width - (margin * 2); /*prettier-ignore*/
  const start = margin;
  const numVisible = Math.floor(range / (collapsedWidth + gap)); /*prettier-ignore*/
  const spaceForVisible = (collapsedWidth + gap) * numVisible;
  const remainder = range - spaceForVisible;

  const calculateTop = (i) => {
    return (height - collapsedHeight) / 2 /*prettier-ignore*/
  };

  const calculateLeft = (i) => {
    const offset = (start + ((collapsedWidth + gap) * i)) - (collapsedWidth / 2) + (remainder / 2) /*prettier-ignore*/
    return offset;
  };

  //what we need now is a function that computes

  return (
    <div className="carouselContainer" ref={ref}>
      {[...projects, ...projects, ...projects].map((project, i) => {
        console.log(i);
        if (i <= numVisible) {
          return (
            <CarouselItem
              style={{
                position: "absolute",
                height: collapsedHeight,
                width: collapsedWidth,
                top: calculateTop(i),
                left: calculateLeft(i),
                backgroundColor: "red",
              }}
              project={project}
              index={i}
            />
          );
        }
      })}
    </div>
  );
};

export default Carousel;
