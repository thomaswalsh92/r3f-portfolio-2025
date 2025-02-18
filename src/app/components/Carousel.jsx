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

  // const [focused, setFocused] = useState(0);

  // const [carouselOffset, setCarouselOffset] = useState(0);

  // const carouselOuter = useRef(null);
  const carouselOuter = useRef(null);
  useEffect(() => {
    setHeight(carouselOuter.current.clientHeight);
    setWidth(carouselOuter.current.clientWidth);
  }, []);

  //item
  const expandedHeight = 475;
  const expandedWidth = 360;
  const collapsedHeight = 350;
  const collapsedWidth = 60;
  const gap = 30; /*prettier-ignore*/

  //distribution
  const margin = 128;
  const range = width - (margin * 2); /*prettier-ignore*/

  //calculate how many divs we can fit into the range taking into account
  //margins
  let numVisible = 1;
  let remainingRange = range - expandedWidth;
  while (remainingRange > (0 + collapsedWidth + gap) /*prettier-ignore*/) {
    remainingRange = remainingRange - (collapsedWidth + gap);
    numVisible++;
  }

  //need to force an odd number of divs so that the large focused div is always centred
  if (numVisible % 2 === 0) {
    numVisible = numVisible - 1;
    remainingRange = remainingRange + (collapsedWidth + gap);
  }

  const start = margin + (remainingRange / 2); /*prettier-ignore*/

  const calculateTop = () => {
    return (height - collapsedHeight) / 2 /*prettier-ignore*/
  };

  const midPoint = Math.floor(numVisible / 2);

  const calculateLeft = (index) => {
    if (index <= midPoint) {
      return start + ((collapsedWidth + gap) * index); /*prettier-ignore*/
    }

    if (index > midPoint) {
      return start + ((collapsedWidth + gap) * (index - 1)) + gap + expandedWidth; /*prettier-ignore*/
    }
  };

  const debugGetColor = (i) => {
    if (i < midPoint) {
      return "red";
    }

    if (i === midPoint) {
      return "blue";
    }

    if (i > midPoint) {
      return "green";
    }
  };

  let repeatedProjects = [];

  for (let i = 0; i < numVisible; i = i + projects.length) {
    repeatedProjects = repeatedProjects.concat(projects);
  }

  numVisible;

  return (
    <div className="carouselOuter" ref={carouselOuter}>
      <div
        className="carouselContainer"
        style={{
          position: "fixed",
          width: width,
          height: height,
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            position: "fixed",
            height: 32,
            width: range,
            top: height / 2,
            left: margin,
            background: "purple",
            opacity: "50%",
            zIndex: 100,
          }}
        >
          RANGE
        </div>
        {[...projects, ...projects, ...projects].map((project, index) => {
          return (
            index < numVisible && (
              <CarouselItem
                style={{
                  position: "fixed",
                  top: calculateTop(),
                  left: calculateLeft(index),
                  width: index === midPoint ? expandedWidth : collapsedWidth,
                  height: collapsedHeight,
                  // gridRow: isFocused ? "1 / span 3" : "2 / span 1",
                  backgroundColor: debugGetColor(index),
                }}
                project={project}
                index={index}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
