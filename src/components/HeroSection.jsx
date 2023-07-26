import React from "react";

// Images
import heroImg from "../assets/heroImg.svg";
import Button from "./Buttons/Button";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="bg-black w-screen">
        {/* Container */}
        <div className="container flex flex-col md:flex-row h-screen w-screen align-center justify-between">
          {/* Left Hero Text */}
          <div className="self-end md:mb-52 space-y-12 ml-36">
            {/* Hero Heading */}
            <div className="text-6xl text-white font-bold">
              We Help You Achieve
              <br />
              Your Digital Goals!
            </div>
            {/* Hero Button */}
            <Button content="View More" to="#services" />
          </div>
          {/* Right Hero Image */}
          <div>
            <img src={heroImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
