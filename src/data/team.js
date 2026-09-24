import jc from "../assets/portraits/jc.webp";
import colin from "../assets/portraits/colin.webp";
import sharmaine from "../assets/portraits/sharmaine.webp";
import sharmaine1 from "../assets/portraits/sharmaine1.webp";
import dean from "../assets/portraits/dean.webp";
import avJc from "../assets/avatars/av-jc.webp";
import avColin from "../assets/avatars/av-colin.webp";
import avSharmaine from "../assets/avatars/av-sharmaine.webp";
import avDean from "../assets/avatars/av-dean.webp";

const team = [
  {
    id: "jc",
    name: "John Carlo V. Goco",
    first: "John Carlo",
    role: "Front-End Developer & UI/UX Designer",
    quote: "Design with purpose, build with passion.",
    image: jc,
    avatar: avJc,
    teamImage: jc,
    socials: {
      linkedin: "https://linkedin.com/in/john-carlo-goco-a8768a384",
      github: "https://github.com/Mamapoco2",
    },
  },
  {
    id: "colin",
    name: "Colin Arias",
    first: "Colin",
    role: "Back-End Developer",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    image: colin,
    avatar: avColin,
    teamImage: colin,
    socials: {
      linkedin: "https://www.linkedin.com/in/colin-arias-b8203236b/",
      github: "https://github.com/ColinArias23",
    },
  },
  {
    id: "ransh",
    name: "Ransh Dy",
    first: "Ransh",
    role: "Quality Assurance",
    quote: "Talk is cheap. Show me the code.",
    image: sharmaine,
    teamImage: sharmaine1,
    avatar: avSharmaine,
    socials: {
      linkedin: "https://www.linkedin.com/in/sharmaine-banquiles-404320322/",
      github: "https://github.com/shabdy",
    },
  },
  {
    id: "dean",
    name: "Dean Zaballero",
    first: "Dean",
    role: "Full-Stack Developer",
    quote: "Design with purpose, build with passion.",
    image: dean,
    avatar: avDean,
    teamImage: dean,
    socials: {
      linkedin: "https://ph.linkedin.com/in/dean-andrew-zaballero-59a937273",
      github: "https://github.com/feyded",
    },
  },
];

export const byId = Object.fromEntries(team.map((m) => [m.id, m]));
export default team;
