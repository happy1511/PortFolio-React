import React from "react";
import { Navbar, DarkThemeToggle } from "flowbite-react";
import { download_icon } from "../assets/svgs/svgs";

const NavBar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="dark:bg-themebg-dark bg-themebg-light py-3 px-7"
    >
      <Navbar.Brand href="https://flowbite-react.com" className="md:hidden">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden md:flex">
          Happy Patel
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle className="rounded-full" />
        <a
          href="/Happy_Patel_Resume.pdf"
          download
          target="_blank"
          className="text-themeText-light dark:text-themeText-dark flex items-center gap-1 py-2 px-3 border rounded-full border-borderTheme-dark dark:border-borderTheme-light hover:bg-gradient-to-l  from-primary1 to-transparent hover:border-primary1 dark:hover:border-borderTheme-light"
        >
          {download_icon()}Download Resume
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#about">Home</Navbar.Link>
        <Navbar.Link href="#skills">Skills</Navbar.Link>
        <Navbar.Link href="#experience">Experiences</Navbar.Link>
        <Navbar.Link href="#projects">Projects</Navbar.Link>
        <Navbar.Link href="#education">Education</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
