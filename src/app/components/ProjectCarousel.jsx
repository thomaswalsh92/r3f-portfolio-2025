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

const ProjectCarousel = ({ positionOffset }) => {
  let maxRadius = 5;

  return projects.map((project, index) => {
    let i = index + 1;
    let angle = i * (Math.PI / projects.length);
    console.log(angle);
    let x = maxRadius * Math.cos(angle);
    let y = maxRadius * Math.sin(angle);
    return (
      <mesh
        key={project.name}
        position={[
          x + positionOffset[0],
          -0.5 + positionOffset[1],
          y - 10 + positionOffset[2],
        ]}
        rotation-y={angle + Math.PI / 2}
      >
        <boxGeometry args={[2, 3.5, 0.1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );
  });
};

export default ProjectCarousel;
