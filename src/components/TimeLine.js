import React from "react";
import { eduInfo, workInfo } from "../assets/data/data";
import {
  github_icon,
  link_icon,
  map_icon,
  Video_Icon,
} from "../assets/svgs/svgs";

const TimeLineCompo = ({ dataKey, projects }) => {
  const timeLineInfo = {
    Work: {
      component: ({ company, logo, role, duration, desc, employmentType }) => {
        return (
          <div className=" p-[20px] border border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14] rounded-md max-w-[500px] shadow-lg">
            <div className="text-[15px] flex justify-between my-2 opacity-70">
              <span>{employmentType} </span>
              <span>{duration}</span>
            </div>
            <div className="text-[20px] font-semibold bg-gradient-to-l from-primary1 to-primary2 text-transparent bg-clip-text my-2">
              {role}
            </div>
            <div className="my-2  opacity-70">{desc}</div>
            <div className="text-[15px] flex justify-end pt-3">
              <img src={logo} className="w-[70px]" alt="logo-company" />
            </div>
          </div>
        );
      },
      data: workInfo,
    },
    Education: {
      component: ({ institute, logo, standard, duration, isPresent }) => {
        return (
          <div className=" p-[20px] border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14] rounded-md max-w-[500px] border shadow-lg">
            <div className="text-[15px] flex justify-between my-2 opacity-70">
              {isPresent && <span>Present</span>}
              <span>{duration}</span>
            </div>
            <div className="text-[20px] font-semibold bg-gradient-to-l from-primary1 to-primary2 text-transparent bg-clip-text my-2">
              {standard}
            </div>
            <div className="my-2  opacity-70 flex justify-start gap-3">
              {map_icon()}
              {institute}
            </div>
            <div className="text-[15px] flex justify-end pt-3">
              <img src={logo} className="w-[70px]" alt={institute} />
            </div>
          </div>
        );
      },
      data: eduInfo,
    },
    Projects: {
      component: ({
        name,
        description,
        skillsUsed,
        websiteLink,
        githubLink,
        videoPath,
      }) => {
        return (
          <div className=" p-[20px] border border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14] rounded-md max-w-[500px]  shadow-lg">
            <div className="text-[20px] font-semibold bg-gradient-to-l from-primary1 to-primary2 text-transparent bg-clip-text my-2">
              {name}
            </div>
            <div className="my-2  opacity-70">{description}</div>
            <div className="my-2  opacity-70 flex gap-1">
              {skillsUsed.map((tech, index) => {
                return (
                  <span
                    key={index}
                    className="px-2 py-1 text-[12px] border border-borderTheme-dark rounded-full"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
            <div className="flex gap-3 items-center">
              {websiteLink && (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-white border border-borderTheme-dark p-2 rounded-full"
                >
                  {link_icon()}
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-black dark:text-white border border-borderTheme-light p-2 rounded-full"
                >
                  {github_icon(24)}
                </a>
              )}
              {videoPath && (
                <a
                  href={videoPath}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-black dark:text-white border border-borderTheme-light p-2 rounded-full"
                >
                  {Video_Icon(24)}
                </a>
              )}
            </div>
          </div>
        );
      },
      data: projects,
    },
  };
  console.log("🚀 ~ TimeLineCompo ~ timeLineInfo.Projects.projects:", projects);
  const Item = timeLineInfo[dataKey]?.component;
  return (
    <div className="flex flex-row flex-wrap gap-3 text-themeText-light dark:text-themeText-dark ">
      {timeLineInfo[dataKey]?.data.map((data, index) => (
        <Item key={index} {...data} />
      ))}
    </div>
  );
};

export default TimeLineCompo;
