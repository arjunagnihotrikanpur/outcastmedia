import React, { useRef } from "react";

import Card from "./Cards/Card";

const ServicesSection = () => {
  const servicesArray = [
    {
      title: "Service 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 7",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 8",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Service 9",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    // Add more objects as needed with different Lorem Ipsum content
  ];

  return (
    <div
      id="services"
      className="h-screen flex flex-col md:flex-col bg-black space-y-2 p-12 whitespace-nowrap"
    >
      <div className="text-4xl text-white font-bold">Services We Offer</div>
      <div className="flex flex-col space-y-12 align-center items-center">
        <div
          id="servicesSectionScrollWrapper"
          className="flex flex-col md:flex-row w-5/6 pt-16 space-x-12 overflow-x-scroll snap-x"
        >
          {servicesArray.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
        <div className="text-1xl text-white">Shift + Scroll to View More</div>
      </div>
    </div>
  );
};

export default ServicesSection;
