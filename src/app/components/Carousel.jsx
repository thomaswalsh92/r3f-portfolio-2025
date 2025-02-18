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

  const carouselOuter = useRef(null);
  const carouselContainer = useRef(null);
  useEffect(() => {
    setHeight(carouselOuter.current.clientHeight);
    setWidth(carouselOuter.current.clientWidth);
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
  //! how many we can fit into the range
  let numVisible = Math.floor((range - expandedWidth) / (collapsedWidth + gap)); /*prettier-ignore*/

  //!force into odd number of items there is always a centred item
  if (numVisible % 2 === 0) {
    numVisible = numVisible + 1;
  }

  const calculateTop = (i) => {
    return (height - collapsedHeight) / 2 /*prettier-ignore*/
  };

  const debugGetColor = (i) => {
    const centrePoint = Math.floor(numVisible / 2);
    if (i < centrePoint) {
      return "red";
    }

    if (i === centrePoint) {
      return "blue";
    }

    if (i > centrePoint) {
      return "green";
    }
  };

  const handleLeft = () => {
    setCarouselOffset(carouselOffset - 1);
  };

  const handleRight = () => {
    setCarouselOffset(carouselOffset + 1);
  };

  const repeatedProjects = [];

  numVisible;

  return (
    <div className="carouselOuter" ref={carouselOuter}>
      {/* <button style={{ marginTop: 256 }} onClick={() => handleLeft()}>
        LEFT
      </button>
      <button
        style={{ marginTop: 256, marginLeft: 16 }}
        onClick={() => handleRight()}
      >
        RIGHT
      </button> */}
      <div
        ref={carouselContainer}
        className="carouselContainer"
        style={{
          height: 475,
          display: "grid",
          gridTemplateColumns: `repeat(${Math.floor(numVisible / 2)}, 60px)
          350px
          repeat(${Math.floor(numVisible / 2)}, 60px) `,
          gridTemplateRows: "60px 355px 60px",
          gridColumnGap: 30,
          gridRowGap: 0,
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        {[...projects, ...projects, ...projects].map((project, index) => {
          let isFocused = false;
          if (Math.floor(numVisible / 2) === Math.floor(index)) {
            isFocused = true;
          }
          return (
            index < numVisible && (
              <CarouselItem
                style={{
                  gridRow: isFocused ? "1 / span 3" : "2 / span 1",
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
