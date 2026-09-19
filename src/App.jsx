import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Facts from "./components/Facts";
import Services from "./components/Services";
import Team from "./components/Team";
import Why from "./components/Why";
import Process from "./components/Process";
import Work from "./components/Work";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* The old multi-page routes now map onto sections of the single page,
   so existing links such as /about or /services still land in the right place. */
const ROUTE_TO_SECTION = {
  "/about": "team",
  "/services": "services",
  "/contact": "contact",
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = ROUTE_TO_SECTION[pathname];
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <div id="top" />
        <Hero />
        <Facts />
        <Services />
        <Team />
        <Why />
        <Process />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
