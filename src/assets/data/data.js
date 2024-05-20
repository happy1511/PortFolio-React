import {
  bootstrap_icon,
  express_icon,
  github_icon,
  html_icon,
  linkedin_icon,
  mongodb_icon,
  mysql_icon,
  node_icon,
  react_icon,
  tailwind_icon,
} from "../svgs/svgs";

export const skillArr = [
  "React",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Tailwind CSS",
  "Bootstrap",
];

export const socialTags = [
  {
    label: "Github",
    link: "#",
    icon: github_icon,
  },
  {
    label: "Linkedin",
    link: "#",
    icon: linkedin_icon,
  },
];

export const skillWithIcon = {
  Frontend: [
    {
      icon: html_icon,
      skill: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: tailwind_icon,
      skill: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      icon: bootstrap_icon,
      skill: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      icon: react_icon,
      skill: "ReactJS",
      link: "https://react.dev/",
    },
  ],
  "Backend & Database": [
    {
      icon: node_icon,
      skill: "NodeJS",
      link: "https://nodejs.org/en",
    },
    {
      icon: express_icon,
      skill: "ExpressJS",
      link: "https://expressjs.com/",
    },
    {
      icon: mongodb_icon,
      skill: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      icon: mysql_icon,
      skill: "MySQL",
      link: "https://www.mysql.com/",
    },
  ],
  "Mobile app Development": [
    {
      icon: react_icon,
      skill: "React Native",
      link: "https://reactnative.dev/",
    },
  ],
};

export const workInfo = [
  {
    company: "Crest Infotech",
    logo: "https://www.crestinfotech.com/wp-content/uploads/2023/05/crest-logo.svg",
    role: "ReactJS & React-Native Developer",
    duration: "Jan 2024 - Present",
    employmentType: "Full-Time",
    desc: "Working on various projects and handling the team of developers",
  },
  {
    company: "Crest Infotech",
    logo: "https://www.crestinfotech.com/wp-content/uploads/2023/05/crest-logo.svg",
    role: "ReactJS & React-Native Developer",
    duration: "Sept 2023 - Jan 2024",
    employmentType: "Internship",
    desc: "Working on various projects and handling the team of developers",
  },
];

export const eduInfo = [
  {
    institute: "LJ Institute of Engineering and Technology",
    logo: "https://ljku.edu.in/web/image/res.company/1/logo",
    standard: "B.Tech in Information Technology",
    duration: "2021 - 2025",
    isPresent: true,
  },
  {
    institute: "Uma Vidyalaya",
    logo: null,
    standard: "Higher Secondary",
    duration: "2019 - 2021",
    isPresent: false,
  },
];

export const projectInfo = [
  {
    title: "Learn To Trade",
    desc: "live stock market paper-trading platform that allows you to check the stock market and trade in real-time.it's a platform where you can learn to trade.",
    techStack: ["React", "Node.js", "Firebase"],
    weblink: "https://learntoearnapp.vercel.app/about",
    githublink: "https://learntoearnapp.vercel.app/about",
  },
  {
    title: "Samaan.com",
    desc: "It is a e-commerce website where you can buy products.Implemented cart functionality.",
    techStack: ["React", "Node.js", "MongoDB"],
    weblink: "https://samaan1.vercel.app/",
  },
  {
    title: "Don't Tap White Game",
    desc: "This is a game where you have to tap on black tiles and avoid white tiles.",
    techStack: ["Django"],
    weblink: "https://learntoearnapp.vercel.app/about",
    githublink: "https://github.com/happy1511/don-t-tap-white-game-django",
  },
  // {
  //   title: "Freelanz",
  //   desc: "This is a web application where you can buy course to learn how to freelance.I worked on the frontend part of this project.",
  //   techStack: ["React", "Django"],
  //   link: "https://www.freelanz.app/",
  // },
  // {
  //   title: "eazyfit",
  //   desc: "This is a project description",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   link: "https://www.eazyfit.app/course",
  // },
  // {
  //   title: "Project 4",
  //   desc: "This is a project description",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   link: "#",
  // },
];

export const social_links = [
  {
    label: "Github",
    link: "#",
    icon: github_icon,
  },
  {
    label: "Linkedin",
    link: "#",
    icon: linkedin_icon,
  },
  {
    label: "Mail",
    link: "mailto:happypatel151103@gmail.com",
    icon: () => (
      <span className="text-[30px]" style={{ lineHeight: "30px" }}>
        @
      </span>
    ),
  },
];
