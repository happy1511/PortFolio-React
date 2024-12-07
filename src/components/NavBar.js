import { DarkThemeToggle, Navbar } from "flowbite-react";
import React from "react";
import { download_icon } from "../assets/svgs/svgs";

const NavBar = () => {
  // const [resumePath, setResumePath] = React.useState("");

  // React.useEffect(() => {
  //   axios.get(process.env.REACT_APP_API_URL + "/admin/resume").then((res) => {
  //     setResumePath(res.data.path);
  //   });
  // }, []);

  return (
    <Navbar
      fluid
      rounded
      className="dark:bg-themebg-dark bg-themebg-light py-3 px-7  animate-navbarAni"
    >
      <Navbar.Brand href="https://flowbite-react.com" className="md:hidden">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden md:flex">
          Happy Patel
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle className="rounded-full" />
        <a
          href={
            "https://res.cloudinary.com/dszbuhdfz/image/upload/v1731333958/resumes/Happy_Patel.pdf"
          }
          download
          target="_blank"
          rel="noreferrer"
          className="relative text-themeText-light dark:text-themeText-dark flex items-center  hover:text-white gap-1 py-2 px-3 border font-bold rounded-full border-borderTheme-dark dark:border-borderTheme-light overflow-hidden group"
        >
          <span className="absolute -inset-x-[4rem] -inset-y-[4rem] bg-gradient-to-tr from-primary1 to-primary2 transform -translate-x-full rotate-45 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

          <span className="relative z-10 flex items-center gap-1">
            {download_icon()}Download Resume
          </span>
        </a>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:static absolute top-[70px] start-0 bg-white md:h-auto h-screen dark:bg-black z-[100] md:p-0 py-2 px-5">
        <Navbar.Link
          href="#about"
          className="md:font-bold md:font-bold font-extrabold"
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="#skills" className="md:font-bold font-extrabold">
          Skills
        </Navbar.Link>
        <Navbar.Link href="#experience" className="md:font-bold font-extrabold">
          Experiences
        </Navbar.Link>
        <Navbar.Link href="#projects" className="md:font-bold font-extrabold">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#education" className="md:font-bold font-extrabold">
          Education
        </Navbar.Link>
        <Navbar.Link href="#contact" className="md:font-bold font-extrabold">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
