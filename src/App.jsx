import { Routes, Route } from "react-router-dom";
import Main from "./modules/main/main";
import About from "./modules/about/about";
import Navbar from "./modules/Navbar/navbar";

export default function Freelance() {
  return (
    <>
      <main className="animate-fade-in">
        <Navbar />{" "}
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
