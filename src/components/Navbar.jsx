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
          <img src={Logo} width="200px" />
        </div>
        <div className="flex flex-row space-x-12 align-center justify-between">
          {/* Call Button */}
          <IconButton content="Get Started" icon={callIcon} />
          {/* Hamburger Icon */}
          <div id="menu-btn" onClick={handleClick}>
            <img
              src={iconSrc}
              id="hamburger-icon"
              className="text-white hamburger"
            />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div
        id="menu"
        className={`${showNav} flex-col text-white space-y-6 text-1xl space-y-12 mt-24 h-screen`}
        style={{ zIndex: -1000 }}
      >
        {/* Pricing Navlink */}
        <NavLink to="#" content="Pricing" />
        <NavLink to="#" content="Product" />
        <NavLink to="#" content="About Us" />
        <NavLink to="#" content="Careers" />
        <NavLink to="#" content="Community" />
      </div>
    </nav>
  );
};

export default Navbar;
