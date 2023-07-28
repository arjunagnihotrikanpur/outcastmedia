import React from "react";

const IconButton = ({ icon, handleClick, content, to }) => {
  return (
    <div onClick={handleClick}>
      <a
        href={to}
        className="hidden md:flex flex-row align-center p-3 px-6 pt-2 bg-themeYellow bg-brightRed rounded-lg baseline hover:bg-white hover:scale-110 duration-100 transition ease-in-out"
      >
        <img src={icon} className="w-6 mr-3" />
        {content}
      </a>
    </div>
  );
};

export default IconButton;
