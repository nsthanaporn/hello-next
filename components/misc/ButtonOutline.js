import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-700 text-teal-700 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-700 hover:text-white-500 transition-all hover:shadow-emerald ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
