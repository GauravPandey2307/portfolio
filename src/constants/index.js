import project1 from "../assets/projects/cropped.png";
import project2 from '../assets/projects/portfolio.png';
import project3 from '../assets/projects/news.png';


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js,Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Excited and committed software developer with a recent master’s degree in Computer Application. Skilled in programming languages such as Java,JavaScriptand C++, with a strong grasp of software development methodologies. Keen to apply
academic knowledge and practical skills to contribute to innovative projects and collaborate within teams. Eager aboututilizing technology to solve real-world problems and propel positive change.`;

// export const EXPERIENCES = [
//   {
//     year: "",
//     role: "",
//     company: "",
//     description: ``,
//     technologies: [''],
//   },
// ];

export const PROJECTS = [
  {
    title: "Gym Management System",
    image: project1,
    description:
      "Designed a web application for local small scale gyms to manage client’s database. Provided user friendly interface so that gym owners can manage payments,programs and trainers efficiently. The over all objective is to develop most free and atomized gym management system which bring the gym owner and different branches more closely to each other so that they can gain what they deserve.",
    technologies: ["HTML","CSS", "JavaScript","PHP"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwindcss", "Framer Motion"],
  },
  {
    title: "News Website",
    image: project3,
    description:
      " Developed a dynamic news website utilizing the News.org API for real-time data gathering. Implemented EJS for "+
      "efficient view rendering, ensuring a seamless user experience. Integrated secure login and registration functionality"+
      " with JWT token-based authentication.",
    technologies: ["EJS", "ExpressJs", "NodeJS",],
  }
];

export const CONTACT = {
  address: "9,Devi Mandir Lane,Liluah-Howrah,West Bengal,711204",
  phoneNo: "+91-9673464532 ",
  email: "g.pandey123456@gmail.com",
};