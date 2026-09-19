import { Code2, Palette, Smartphone, Database, FileText } from "lucide-react";
import svcWeb from "../assets/services/svc-web.webp";
import svcData from "../assets/services/svc-data.webp";
import svcDocs from "../assets/services/svc-docs.webp";

/* `people` holds team ids — only where a member's stated role covers the work. */
const services = [
  {
    key: "web",
    title: "Web development",
    icon: Code2,
    body: "Custom websites and web applications built with modern technologies and best practices — front-end through back-end, responsive and built to perform.",
    people: ["jc", "colin", "dean"],
    credit: "Built by John Carlo, Colin and Dean",
    image: svcWeb,
    imageAlt: "Web interface layouts designed by the team",
  },
  {
    key: "uiux",
    title: "UI/UX design",
    icon: Palette,
    body: "Interfaces that are clear to use and pleasant to look at, designed to hold up once real content and real users arrive.",
    people: ["jc"],
    credit: "Led by John Carlo",
  },
  {
    key: "mobile",
    title: "Mobile development",
    icon: Smartphone,
    tone: "gold",
    body: "Native and cross-platform mobile applications that deliver exceptional user experiences on the devices your users actually carry.",
  },
  {
    key: "database",
    title: "Database management",
    icon: Database,
    body: "MySQL work focused on secure, reliable, optimised data handling — from schema design through performance tuning and long-term maintenance.",
    tags: ["Design & modeling", "Migration & integration", "Performance tuning", "Backup & recovery", "Security & access", "Ongoing maintenance"],
    people: ["colin", "dean"],
    credit: "Handled by Colin and Dean",
    image: svcData,
    imageAlt: "Database tables and query tooling",
  },
  {
    key: "academic",
    title: "Academic & paperwork services",
    icon: FileText,
    tone: "gold",
    body: "Expert assistance with thesis and capstone papers, academic papers, reviews, essays, presentations and technical papers — researched, structured and referenced properly.",
    tags: ["Thesis writing", "Research papers", "Feasibility studies", "Capstone projects", "Dissertations", "Technical documentation"],
    image: svcDocs,
    imageAlt: "Academic and research paper layouts",
  },
];

export default services;
