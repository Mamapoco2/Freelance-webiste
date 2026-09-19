import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">AcadStack</h2>
          <p className="text-sm mb-6">
            Professional freelance services designed to elevate your business
            with simplicity and excellence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Navigation</h3>
          <div className="space-y-2 flex flex-col">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Academic Writing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © 2025 AcadStack. All rights reserved.
      </div>
    </footer>
  );
}
