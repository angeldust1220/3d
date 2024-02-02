import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  jgc,
  rgc,
  shirt,
  openai,
  nft,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI / UX Designer",
    icon: backend,
  },
  {
    title: "3D Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Project Operations",
    company_name: "JGC Technical Assistances Services INC.",
    icon: jgc,
    iconBg: "#383E56",
    date: "April 2023 - September 2023",
    points: [
      "Used Microsoft Power Apps with SharePoint to enhance collaboration and data sharing among interns.",
      "Developing digital forms using MODS software tool specifically designed to build custom forms for our clients.",
      "Gained experience on maintenance through tools such as debugging, documenting and testing.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ranked Gaming Client",
    icon: rgc,
    iconBg: "#383E56",
    date: "September 2021 - December 2022",
    points: [
      "Utilized HTML/CSS and JavaScript to assist in developing, designing and updating websites for our company.",
      "Developed accessible, responsive and functional user interface to allow users or visitors on any devices to have the same perfect user experience.",
      "Developing and maintaining web applications using React.js and other related technologies",
      "Created a mockup UI / UX web design using Figma, Locify.ai and Anima.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "work in progress",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "work in progress",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "work in progress",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Shirt Customizer",
    description:
      "A responsive 3D application to ensure a seamless experience across various devices. Developed using React.js and Three.js. Features includes Framer Motion Animation, Download Options and Theme Change with Color Selection",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/angeldust1220/3D-Tshirt",
  },
  {
    name: "AI Website Summarizer",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/angeldust1220/ai_summarizer",
  },
  {
    name: "NFT Auction Website",
    description:
      "A responsive design using CSS Flexbox. It contains Marketplace, Best Sellers, Guarantees, Footer, Navbar and a Header section",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
