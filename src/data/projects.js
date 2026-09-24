/* ---------------------------------------------------------------
   Real work goes here. While the array is empty the Work section
   renders its empty state. Add an entry and the grid takes over.

   {
     title: "Project name",
     summary: "One or two sentences on what it is and what it does.",
     services: ["Web development", "Database management"],
     tech: ["ReactJS", "NodeJS", "MySQL"],
     people: ["jc", "colin"],          // ids from data/team.js
     image: importedImage,             // import from ../assets/work/
     href: "https://example.com",      // optional
   }
   --------------------------------------------------------------- */

import work1 from "../assets/work/Work1.webp";
import work2 from "../assets/work/Work2.webp";
import work3 from "../assets/work/Work3.webp";

const projects = [
  {
    title: "BookClub",
    summary:
      "A web application that allows users to create and manage book clubs, share book recommendations, and discuss books with other members.",
    services: ["Web development", "Database management"],
    tech: ["ReactJS", "NodeJS", "MySQL"],
    people: ["ransh"],
    image: work1,
    href: "https://book-cl.netlify.app/",
  },
  {
    title: "ads",
    summary:
      "A web application that allows users to create and manage book clubs, share book recommendations, and discuss books with other members.",
    services: ["Web development", "Database management"],
    tech: ["ReactJS", "NodeJS", "MySQL"],
    people: ["ransh"],
    image: work2,
    href: "https://n-hire.netlify.app/",
  },
  {
    title: "BuildCraft",
    summary:
      "A web application that allows users to create and manage book clubs, share book recommendations, and discuss books with other members.",
    services: ["Web development", "Database management"],
    tech: ["ReactJS"],
    people: ["jc"],
    image: work3,
  },
];

export default projects;
