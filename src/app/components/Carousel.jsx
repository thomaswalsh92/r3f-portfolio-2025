import { ScrollControls, Scroll } from "@react-three/drei";
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
  //   { name: "Project 9", tags: ["GRAPHIC", "WEB"] },
];

const Carousel = () => {
  const xGap = 0.04;
  const xScale = 0.8;
  const yScale = 1.2;
  const xTotal = xGap + xScale;

  const { width } = useThree((state) => state.viewport);

  return (
    <>
      <ScrollControls
        horizontal
        pages={(width - xTotal + projects.length * xTotal) / width}
      >
        <Scroll>
          {projects.map((project, i) => {
            return (
              <CarouselItem
                key={project.name + i}
                // name={project.name}
                // tags={project.tags}
                scale={[xScale, yScale]}
                position={[i * xTotal, 0, 0]}
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
