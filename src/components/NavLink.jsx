import React from "react";

const NavLink = ({ to = "#", content }) => {
  return (
    <a
      href={to}
      className="text-4xl self-center hover:text-yellow-400 hover:-translate-x-1 hover:scale-110 duration-100 transition ease-in-out delay-50"
    >
      {content}
    </a>
  );
};

export default NavLink;
