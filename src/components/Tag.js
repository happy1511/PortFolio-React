import React from "react";

const Tag = ({ label, link, icon }) => {
  return (
    <button
      onClick={() => link && window.open(link)}
      className="border border-borderTheme-dark dark:border-borderTheme-light rounded-full py-1 px-2 w-fit text-themebg-dark dark:text-themebg-light flex items-center gap-1 text-[15px] cursor-pointer opacity-80 hover:opacity-100 hover:shadow-inner"
    >
      <span>{icon()}</span>
      <span>{label}</span>
    </button>
  );
};

export default Tag;
