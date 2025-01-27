import CarouselItem from "./CarouselItem";
import { useFrame, useThree } from "@react-three/fiber";

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
  { name: "Project 9", tags: ["GRAPHIC", "WEB"] },
];

const Carousel = ({ width, height }) => {
  const xGap = 0.3;
  const xScale = 6;
  const yScale = 9;
  const xTotal = xGap + xScale;
  const xRange = xTotal * projects.length;
  const rangeOffset = xRange / 2;

  return projects.map((project, i) => {
    const xPos = (xRange / projects.length) * (i + 1) - rangeOffset;
    console.log(xPos);
    return (
      <CarouselItem
        key={project.name + i}
        name={project.name}
        tags={project.tags}
        scale={[xScale, yScale]}
        position={[xPos, 0, 0]}
      />
    );
  });
};

export default Carousel;
