import { Routes, Route } from "react-router-dom";
import Main from "./modules/main/main";
import About from "./modules/about/about";
import Navbar from "./modules/Navbar/navbar";
import Services from "./modules/services/services";
import Contact from "./modules/contact/contact";
import ScrollToTop from "./shared/ScrollToTop";

export default function Freelance() {
  return (
    <>
      <main className="animate-fade-in">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
