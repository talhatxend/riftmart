import React from "react";

const Button = ({
  className = "h-[3rem] w-[30%] mt-[50px] ",
  title = "Shop Now",
  onClick,
  ...resProps
}) => {
  return (
    <button
      {...resProps}
      onClick={onClick}
      className={`text-white bg-black text-xl font-medium rounded-lg ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
