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

  const [firstProject, setFirstProject] = useState(0);

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
  while (remainingRange > (collapsedWidth + gap) /*prettier-ignore*/) {
    remainingRange = remainingRange - (collapsedWidth + gap);
    numVisible++;
  }

  //need to force an odd number of divs so that the large focused div is always centred
  if (numVisible % 2 === 0) {
    numVisible = numVisible - 1;
    remainingRange = remainingRange + (collapsedWidth + gap);
  }

  const start = margin + (remainingRange / 2); /*prettier-ignore*/

  const midPoint = Math.floor(numVisible / 2);

  const calculateTop = (index) => {
    if (index === midPoint) {
      return (height - expandedHeight) / 2 /*prettier-ignore*/
    }
    return (height - collapsedHeight) / 2 /*prettier-ignore*/
  };

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

  const handleBack = () => {
    let newFirst = firstProject - 1;
    if (newFirst < 0) {
      newFirst = projects.length - 1;
    }
    setFirstProject(newFirst);
  };

  const handleForward = () => {
    let newFirst = firstProject + 1;
    if (newFirst > projects.length) {
      newFirst = 0;
    }
    setFirstProject(newFirst);
  };

  let carouselProjects = [];

  for (let i = 0; i < numVisible; i++) {
    carouselProjects.push(projects[(firstProject + i) % projects.length]) /*prettier-ignore*/
  }

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
            top: 128,
            left: width / 2 - 32,
            width: 64,
          }}
        >
          <button style={{ margin: 16 }} onClick={handleBack}>
            BACK
          </button>
          <button style={{ margin: 16 }} onClick={handleForward}>
            FORWARD
          </button>
          <span>{firstProject}</span>
        </div>
        {carouselProjects.map((project, index) => {
          return (
            // index < numVisible && (
            <CarouselItem
              style={{
                position: "fixed",
                top: calculateTop(index),
                left: calculateLeft(index),
                width: index === midPoint ? expandedWidth : collapsedWidth,
                height: index === midPoint ? expandedHeight : collapsedHeight,
                // gridRow: isFocused ? "1 / span 3" : "2 / span 1",
                backgroundColor: debugGetColor(index),
              }}
              project={project}
              index={index}
            />
          );
          // );
        })}
      </div>
    </div>
  );
};

export default Carousel;
