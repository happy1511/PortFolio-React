import axios from "axios";
import { Spinner } from "flowbite-react";
import React from "react";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import {
  jobs,
  skillArr,
  social_links,
  website_data,
} from "../assets/data/data";
import {
  contact_icon,
  github_icon,
  linkedin_icon,
  waving_hand,
} from "../assets/svgs/svgs";
import CodeText from "../components/CodeText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { SkillSection } from "../components/Skill";
import Tag from "../components/Tag";
import Timeline from "../components/TimeLine";

const PortFolioPage = () => {
  const [name, setName] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [mailId, setmailId] = React.useState("");
  const formRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    skillsSections: [],
    projects: [],
    urls: {
      github_url: null,
      linkedin_url: null,
    },
  });

  const handleMail = (e) => {
    e.preventDefault();
    setLoading(true);
    formRef.current.reset();
    axios
      .post(process.env.REACT_APP_API_URL, {
        name,
        msg,
        mailId,
      })
      .then((res) => {
        setLoading(false);
        toast.success("Mail Sent Successfully");
      })
      .catch((er) => {
        setLoading(false);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex flex-col items-center bg-themebg-light dark:bg-themebg-dark">
      <div className="max-w-screen-xl w-full min-h-[100dvh]">
        <NavBar />
        <section
          className="flex flex-col items-center justify-center min-h-[80vh] py-3 px-7"
          id="about"
        >
          <div className="w-full flex gap-7 lg:items-center items-start flex-col md:flex-row">
            <div className="w-full md:w-[60%]">
              <p className="text-themeText-light dark:text-themebg-light flex items-center text-[20px]">
                Hello! <span>{waving_hand()}</span>
              </p>
              <h1 className="text-themeText-light dark:text-themebg-light text-[50px] font-bold">
                I'm <span className="text-primary1">Happy Patel </span>
              </h1>
              <h1>
                <TypeAnimation
                  sequence={jobs}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "40px", display: "inline-block" }}
                  repeat={Infinity}
                  className="text-themeText-light dark:text-themebg-light"
                />
              </h1>
              <p className="text-themeText-light dark:text-themeText-dark opacity-85 text-[14px] py-1">
                I craft engaging, user-friendly, visually stunning online
                experiences and mobile apps using React Native.I turn ideas into
                dynamic websites and apps that exceed expectations. From
                responsive layouts to cutting-edge tech integration, I
                specialize in it all.
                <br />
                Let's collaborate and bring your digital dreams to life!
              </p>
              <div className="flex gap-2 flex-wrap py-3">
                {[
                  {
                    label: "Github",
                    link: website_data.urls.github_url,
                    icon: github_icon,
                  },
                  {
                    label: "Linkedin",
                    link: website_data.urls.linkedin_url,
                    icon: linkedin_icon,
                  },
                ].map((tag, index) => (
                  <Tag key={index} {...tag} />
                ))}
              </div>
              <div>
                <button
                  onClick={() =>
                    document.getElementById("contact").scrollIntoView()
                  }
                  className="text-nowrap text-transparent bg-clip-text font-bold text-[18px] flex items-center gap-1 py-2 px-5 border rounded-full border-borderTheme-dark dark:border-borderTheme-light bg-gradient-to-l from-primary1 to-primary2 transition-all duration-300 ease-in-out hover:border-primary1 dark:hover:border-primary1  hover:shadow-lg hover:shadow-primary1/50 dark:hover:shadow-borderTheme-light/10"
                >
                  Contact Me{" "}
                  <span className="text-primary1">{contact_icon()}</span>
                </button>
              </div>
            </div>
            <div className="md:w-[40%] w-full flex justify-center">
              <CodeText>
                <code className="text-themeText-dark flex flex-col gap-1">
                  <div>
                    <span className="text-primary1">const</span> coder{" "}
                    <span className="text-primary1">=</span>{" "}
                    <span className="text-white opacity-50">{"{"}</span>
                  </div>
                  <div className="text-justify ps-4">
                    name:
                    <span className="text-yellow-300"> 'Happy Patel'</span>,
                  </div>
                  <div className="flex flex-wrap ps-4">
                    Skills:&nbsp;
                    <span className="text-white opacity-50">{"["}</span>&nbsp;
                    {skillArr.map((text, index) => (
                      <p key={index}>
                        '<span className="text-yellow-300">{text}</span>'
                        {skillArr.length > index + 1 && ","}&nbsp;
                      </p>
                    ))}
                    <span className="text-white opacity-50">{"]"}</span>,
                  </div>
                  <div className="text-justify ps-4">
                    hardWorker:
                    <span className="text-orange-500"> true</span>,
                  </div>
                  <div className="text-justify ps-4">
                    quickLearner:
                    <span className="text-orange-500"> true</span>,
                  </div>
                  <div className="text-justify ps-4">
                    problemSolver:
                    <span className="text-orange-500"> true</span>,
                  </div>
                  <div>
                    <span className="text-white opacity-50">{"}"}</span>
                  </div>
                </code>
              </CodeText>
            </div>
          </div>
        </section>
        <section className="py-3 px-7" id="skills">
          <Header title="What I know" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {website_data.skillsSections.map((section, index) => (
              <SkillSection
                key={index}
                title={section.name}
                skills={section.skills}
              />
            ))}
          </div>
        </section>
        <section className="py-3 px-7 my-[80px]" id="experience">
          <Header title="My Experiences" />
          <Timeline dataKey={"Work"} projects={website_data.projects} />
        </section>
        <section className="py-3 px-7 my-[80px]" id="projects">
          <Header title="Projects" />
          <Timeline dataKey={"Projects"} projects={website_data.projects} />
        </section>
        <section className="py-3 px-7 my-[80px]" id="education">
          <Header title="Education" />
          <Timeline dataKey={"Education"} projects={website_data.projects} />
        </section>
        <section
          className="py-3 px-7 my-[80px]  text-themeText-light dark:text-themeText-dark "
          id="contact"
        >
          <Header title="Contact Me" />
          <div className="flex items-center gap-3 flex-col sm:flex-row">
            <div className="sm:w-[50%] w-full">
              <div className="w-full">
                <form
                  ref={formRef}
                  className="flex flex-col w-full border border-borderTheme-dark p-4 gap-5 rounded-lg"
                  onSubmit={handleMail}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className=" text-[15px] font-semibold ms-2"
                    >
                      Your Name:
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      required
                      className="bg-transparent rounded-full w-full  border border-borderTheme-dark"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className=" text-[15px] font-semibold ms-2"
                    >
                      Your Email:
                    </label>
                    <input
                      onChange={(e) => setmailId(e.target.value)}
                      type="email"
                      required
                      name="name"
                      className="bg-transparent rounded-full w-full  border border-borderTheme-dark"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className=" text-[15px] font-semibold ms-2"
                    >
                      Your Message:
                    </label>
                    <input
                      onChange={(e) => setMsg(e.target.value)}
                      required
                      type="text"
                      name="name"
                      className="bg-transparent rounded-full w-full  border border-borderTheme-dark"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      disabled={loading}
                      type="submit"
                      className="text-nowrap text-transparent bg-clip-text font-bold text-[18px] flex items-center gap-1 py-2 px-5 border rounded-full border-borderTheme-dark dark:border-borderTheme-light bg-gradient-to-l from-primary1 to-primary2 hover:border-primary1 dark:hover:border-borderTheme-light hover:shadow-inner"
                    >
                      {loading ? (
                        <Spinner
                          className="fill-primary1-light"
                          aria-label="Default status example"
                        />
                      ) : (
                        <>
                          Send Message{" "}
                          <span className="text-primary1">
                            {contact_icon()}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="sm:w-[50%] w-full flex flex-col sm:flex-row justify-center items-center">
              <div className="flex sm:flex-col gap-3 flex-row">
                {social_links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-4 items-center text-[15px] font-semibold p-2 border border-borderTheme-dark rounded-lg hover:shadow-lg my-2 text-themeText-light dark:text-themeText-dark "
                  >
                    {link.icon(30)}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PortFolioPage;
