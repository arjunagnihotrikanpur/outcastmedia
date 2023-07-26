import React from "react";

const Button = ({ content, handleClick, to }) => {
  return (
    <div onClick={handleClick}>
      <a
        href={to}
        className="flex flex-row w-48 align-center font-bold p-2 px-3 pt-2 bg-themeYellow bg-brightRed rounded-lg baseline hover:bg-white hover:scale-110 duration-100 transition ease-in-out"
      >
        {content}
      </a>
    </div>
  );
};

export default Button;
