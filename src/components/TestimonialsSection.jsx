import React from "react";
import Card from "./Cards/Card";

import testimonialsSvg from "../assets/testimonialsSvg.svg";

const TestimonialsSection = () => {
  const testimonialsArray = [
    {
      title: "Testimonial 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    {
      title: "Testimonial 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, enim vel vulputate finibus, dui augue posuere elit.",
    },
    // Add more objects as needed with different Lorem Ipsum content
  ];

  return (
    <div
      id="testimonials"
      className="h-screen flex flex-col md:flex-col bg-black space-y-2 p-12 whitespace-nowrap"
    >
      <div className="text-4xl text-white font-bold">Testimonials</div>
      <div className="flex flex-col md:flex-row space-y-12 justify-around">
        <div
          id="servicesSectionScrollWrapper"
          className="flex flex-col md:flex-row w-5/6 pt-16 space-x-12"
        >
          {testimonialsArray.map((testimonial) => (
            <Card
              key={testimonial.title}
              title={testimonial.title}
              content={testimonial.content}
            />
          ))}
        </div>
        {/* <div className="imgArea">
          <img src={testimonialsSvg} width="1500px" />
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialsSection;
