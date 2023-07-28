import React from "react";
import Card from "./Cards/Card";

const PortfolioSection = () => {
  const projectsArray = [
    {
      title: "Project 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Project 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Project 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
  ];

  return (
    <div className="flex flex-col bg-black h-fit h-screen px-48" id="portfolio">
      <div className="text-4xl text-white font-bold mb-24">Our Portfolio</div>
      <div className="flex flex-row">
        <div className="flex flex-col md:flex-row space-x-36">
          {projectsArray.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              content={project.content}
              buttonText="Visit"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
