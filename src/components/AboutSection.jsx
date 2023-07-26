import React from "react";

// Images
import instagramImg from "../assets/instagram.png";
import aboutSvg from "../assets/aboutSvg.svg";

const AboutSection = () => {
  return (
    <>
      {/* About-Section */}
      <section id="about">
        {/* Container */}
        <div className="flex container h-fit flex-col md:flex-row align-start space-x-16 mt-32 ml-36">
          {/* Text Container */}
          <div className="flex flex-col w-1/2">
            <div className="text-4xl font-bold">About Us</div>
            <hr className="w-96 h-1 mx-0 my-2 border-0 rounded dark:bg-gray-900" />
            <div className="text-2xl">
              Welcome to Outcast Media, where
              <span className="font-bold">creativity</span> meets
              <span className="font-bold">technology</span> to elevate your
              business to new heights.
            </div>
            <div className="text-2xl mt-6">
              We are a <span className="font-bold">results-driven</span> digital
              agency, offering a
              <span className="font-bold">comprehensive suite of services</span>
              designed to help you thrive in the ever-evolving digital
              landscape.
            </div>
            {/* Instagram handle container */}
            <div className="flex flex-col mt-64 cursor-pointer">
              <div className="text-2xl">View More About Us</div>
              <div className="flex space-x-4 md:m-0 sm:mb-36">
                <img src={instagramImg} />
                <div className="text-1xl font-light">@Outcastmedia</div>
              </div>
            </div>
          </div>
          {/* Image Container */}
          <div className="w-1/2 pl-48 sm:hidden md:block">
            <img src={aboutSvg} style={{ scale: "0.9" }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
