import { useState } from "react";
import { Menu, X } from "lucide-react";

import About from "../about/about";
import { Link, Routes, Route } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 p-5 bg-white flex justify-between items-center border-b border-gray-200">
        <h1 className="font-bold text-3xl">
          Acad<span className="text-green-400">Stack</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex uppercase justify-evenly gap-4 text-sm">
          <Link
            to="/"
            className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            About
          </Link>
          <Link
            to="/services"
            className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Services
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block p-2 bg-black text-white rounded-md cursor-pointer">
          Inquire now!
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-end items-center p-5 border-b border-gray-200">
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col p-6 space-y-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="uppercase text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 border-b border-transparent hover:border-black pb-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="uppercase text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 border-b border-transparent hover:border-black pb-2"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="uppercase text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 border-b border-transparent hover:border-black pb-2"
          >
            Services
          </Link>

          {/* Mobile CTA Button */}
          <button
            onClick={closeMenu}
            className="mt-8 p-3 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800 transition-colors duration-200 text-center"
          >
            Inquire now!
          </button>
        </div>
      </div>
    </>
  );
}
