import React, { useState } from "react";

// Images
import Logo from "../assets/logo.png";
import callIcon from "../assets/callIcon.svg";
import hamburger from "../assets/hamburger.svg";
import closeIcon from "../assets/closeIcon.svg";

import IconButton from "./Buttons/IconButton";
import NavLink from "./NavLink";

const Navbar = () => {
  const [showNav, setShowNav] = useState("hidden");
  const [iconSrc, setIconSrc] = useState(hamburger);

  const handleClick = () => {
    setShowNav(showNav == "flex" ? "hidden" : "flex");
    if (iconSrc == closeIcon) {
      setIconSrc(hamburger);
    } else {
      setIconSrc(closeIcon);
    }
  };

  return (
    <nav
      className="mx-0 bg-black w-screen sticky h-1/6 overflow-hidden"
      style={{ top: 0, left: 0 }}
    >
      {/* Flex Container */}
      <div className="flex items-center justify-between p-3">
        {/* Logo */}
        <div className="pt-2">
          <a href="#">
            <img src={Logo} width="200px" />
          </a>
        </div>
        <div className="flex flex-row space-x-12 align-center justify-between">
          <div className="link">
            <a href="#">
              <div className="text-white 2xl">Home</div>
            </a>
          </div>
          <div className="link">
            <a href="#about">
              <div className="text-white 2xl">About</div>
            </a>
          </div>
          <div className="link">
            <a href="#services">
              <div className="text-white 2xl">Services</div>
            </a>
          </div>
          <div className="link">
            <a href="#testimonials">
              <div className="text-white 2xl">Testimonial</div>
            </a>
          </div>
          <div className="link">
            <a href="#portfolio">
              <div className="text-white 2xl">portfolio</div>
            </a>
          </div>
          <div className="link">
            <a href="#contact">
              <div className="text-white 2xl">Contact</div>
            </a>
          </div>

          {/* Call Button */}
          <IconButton
            content="Get Started"
            icon={callIcon}
            to="https://wa.me/917985741559"
          />
          {/* Hamburger Icon */}
          {/* <div id="menu-btn" onClick={handleClick}>
            <img
              src={iconSrc}
              id="hamburger-icon"
              className="text-white hamburger"
            />
          </div> */}
        </div>
      </div>
      {/* Menu */}
      <div
        id="menu"
        className={`${showNav} flex-col text-white space-y-6 text-1xl space-y-12 mt-24 h-screen`}
        style={{ zIndex: -1000 }}
      >
        {/* Pricing Navlink */}
        {/* <NavLink to="#" content="Home" />
        <NavLink to="#about" content="About Us" handleClick={handleClick} />
        <NavLink to="#" content="Services" />
        <NavLink to="#" content="Testimonials" />
        <NavLink to="#" content="Portfolio" />
        <NavLink to="#" content="Contact" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
