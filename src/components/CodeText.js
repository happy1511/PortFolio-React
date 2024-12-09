import React from "react";

const CodeText = ({ children }) => {
  return (
    <div className="w-full border border-borderTheme-dark dark:border-borderTheme-light rounded-md bg-[#000000d1] dark:bg-themebg shadow-lg ">
      <div className="flex gap-2 py-3 border-b px-3 border-borderTheme-light">
        <div className="p-2 rounded-full bg-primary1-light w-fit"></div>
        <div className="p-2 rounded-full bg-yellow-400 w-fit"></div>
        <div className="p-2 rounded-full bg-green-400 w-fit"></div>
      </div>
      <div className="w-full p-6">{children}</div>
    </div>
  );
};

export default CodeText;
