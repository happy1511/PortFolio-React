import React from "react";

const Header = ({ title }) => {
  return (
    <h1 className="text-themeText-light dark:text-themeText-dark text-[25px] font-bold my-9 mt-0">
      {title}
    </h1>
  );
};

export default Header;
