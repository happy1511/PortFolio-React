import React, { useState } from "react";
import { eduInfo, workInfo } from "../assets/data/data";
import {
  close_icon,
  github_icon,
  link_icon,
  map_icon,
  Video_Icon,
} from "../assets/svgs/svgs";

const TimeLineCompo = ({ dataKey, projects }) => {
  const [flippedCard, setFlippedCard] = useState(null);

  const timeLineInfo = {
    Work: {
      component: ({ company, logo, role, duration, desc, employmentType }) => (
        <div className="p-[20px] border border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14] rounded-md shadow-lg">
          <div className="text-[15px] flex justify-between my-2 opacity-70">
            <span>{employmentType} </span>
            <span>{duration}</span>
          </div>
          <div className="text-[20px] font-semibold bg-gradient-to-l from-primary1 to-primary2 text-transparent bg-clip-text my-2">
            {role}
          </div>
          <div className="my-2 opacity-70">{desc}</div>
          <div className="text-[15px] flex justify-end pt-3">
            <img src={logo} className="w-[30px]" alt="logo-company" />
          </div>
        </div>
      ),
      data: workInfo,
    },
    Education: {
      component: ({ institute, logo, standard, duration, isPresent }) => (
        <div className="p-[20px] border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14] rounded-md  border shadow-lg">
          <div className="text-[15px] flex justify-between my-2 opacity-70">
            {isPresent && <span>Present</span>}
            <span>{duration}</span>
          </div>
          <div className="text-[20px] font-semibold bg-gradient-to-l from-primary1 to-primary2 text-transparent bg-clip-text my-2">
            {standard}
          </div>
          <div className="my-2 opacity-70 flex justify-start gap-3">
            {map_icon()}
            {institute}
          </div>
          <div className="text-[15px] flex justify-end pt-3">
            <img src={logo} className="w-[70px]" alt={institute} />
          </div>
        </div>
      ),
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
        index,
      }) => (
        <div
          className={`p-[20px] border border-borderTheme-dark bg-[#00000005] dark:bg-[#ffffff14] rounded-md shadow-lg ${
            flippedCard === index ? "animate-flip" : ""
          }`}
        >
          {flippedCard === index ? (
            <div className="relative animate-flip">
              <button
                onClick={() => setFlippedCard(null)}
                className="absolute -top-[10px] -right-[10px] w-[30px] h-[30px] z-10 text-red-700"
              >
                {close_icon()}
              </button>
              <video
                controls
                autoPlay
                controlsList="play nodownload fullscreen  "
                src={videoPath}
                className="w-full h-full rounded"
              ></video>
            </div>
          ) : (
            <>
              <div className="text-[20px] font-semibold bg-gradient-to-l from-primary1 to-primary2 text-transparent bg-clip-text my-2">
                {name}
              </div>
              <div className="my-2 opacity-70">{description}</div>
              <div className="my-2 opacity-70 flex gap-1 flex-wrap">
                {skillsUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-[12px] border border-borderTheme-dark rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 items-center">
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white border border-borderTheme-dark p-2 rounded-full"
                  >
                    {link_icon()}
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black dark:text-white border border-borderTheme-light p-2 rounded-full"
                  >
                    {github_icon(24)}
                  </a>
                )}
                {videoPath && (
                  <button
                    className="bg-gradient-to-l from-primary1 to-primary2 dark:text-white border border-borderTheme-light p-2 rounded-full text-white"
                    onClick={() => setFlippedCard(index)}
                  >
                    {Video_Icon(24)}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      ),
      data: projects, // projects data passed here
    },
  };

  const Item = timeLineInfo[dataKey]?.component;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-themeText-light dark:text-themeText-dark">
      {timeLineInfo[dataKey]?.data.map((data, index) => (
        <Item key={index} {...data} index={index} />
      ))}
    </div>
  );
};

export default TimeLineCompo;
