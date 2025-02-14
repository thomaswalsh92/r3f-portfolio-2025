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

  const [carouselOffset, setCarouselOffset] = useState(0);

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
  let numVisible = Math.floor(range / (collapsedWidth + gap)); /*prettier-ignore*/

  //force odd number of items
  if (numVisible % 2 === 1) {
    numVisible = numVisible + 1;
  }

  const spaceForVisible = (collapsedWidth + gap) * numVisible;
  const remainder = range - spaceForVisible;

  const calculateTop = (i) => {
    return (height - collapsedHeight) / 2 /*prettier-ignore*/
  };

  const calculateLeft = (i) => {
    return (start + ((collapsedWidth + gap) * i)) - (collapsedWidth / 2) + (remainder / 2) /*prettier-ignore*/
  };

  const debugGetColor = (i) => {
    const select = i % 3;
    switch (select) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "green";
      default:
        "white";
    }
  };

  const handleLeft = () => {
    setCarouselOffset(carouselOffset - 1);
  };

  const handleRight = () => {
    setCarouselOffset(carouselOffset + 1);
  };

  const focusedItem = numVisible / 2;

  return (
    <div className="carouselContainer" ref={ref}>
      <button style={{ marginTop: 256 }} onClick={() => handleLeft()}>
        LEFT
      </button>
      <button
        style={{ marginTop: 256, marginLeft: 16 }}
        onClick={() => handleRight()}
      >
        RIGHT
      </button>
      {[...projects, ...projects, ...projects].map((project, i) => {
        if (i <= numVisible) {
          return (
            <CarouselItem
              style={{
                position: "absolute",
                height: collapsedHeight,
                width: focusedItem === i ? collapsedWidth * 2 : collapsedWidth,
                top: calculateTop(i),
                left: calculateLeft(i),
                backgroundColor: debugGetColor(i),
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
