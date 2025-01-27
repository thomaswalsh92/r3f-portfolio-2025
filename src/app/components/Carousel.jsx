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
];

const Carousel = () => {
  return projects.map((project, i) => {
    return (
      <CarouselItem
        key={project.name + i}
        name={project.name}
        tags={project.tags}
        scale={[3, 2]}
        position={[i, 0, 0]}
      />
    );
  });
};

export default Carousel;
