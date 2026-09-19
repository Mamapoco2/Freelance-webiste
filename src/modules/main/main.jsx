import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../footer/footer";
import Data from "../../data";
import faqs from "../../FAQ";

import { useState } from "react";

export default function Freelance() {
  const [openItem, setOpenItem] = useState(null);
  const Services = Data.map((data, index) => (
    <div
      key={index}
      className="p-12 text-center bg-white border-1 border-gray-200 hover:-translate-y-2 transition duration-300 hover:shadow-lg"
    >
      <data.icon className="w-12 h-12 bg-gray-200 rounded-full p-3 mx-auto mb-4 text-gray-700" />
      <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
      <p className="text-gray-600 text-sm">{data.description}</p>
    </div>
  ));

  function toggle(index) {
    setOpenItem((prev) => (prev === index ? null : index));
  }

  const faqItems = faqs.map((faq, index) => (
    <div key={index} className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center py-6 px-0 text-left hover:bg-gray-50 focus:outline-none transition-colors cursor-pointer"
      >
        <h3 className="text-base font-normal text-gray-800 pr-4">
          {faq.question}
        </h3>
        <Plus
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            openItem === index ? "rotate-45" : ""
          }`}
        />
      </button>
      {openItem === index && (
        <div className="pb-6 px-0 animate-in slide-in-from-top-2 duration-200">
          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  ));

  return (
    <main className="min-h-screen w-full overflow-x-hidden animate-fade-in">
      <div className="w-full min-h-[100dvh] flex flex-col justify-center items-center text-center pt-32 md:pt-20 px-4 bg-gray-100">
        <h1 className="text-3xl sm:text-5xl md:text-7xl leading-tight font-light">
          Achieve More, <br />
          <span className="text-gray-800 font-medium">Stress Less,</span> <br />
          <span className="text-gray-900 font-semibold">
            Excel Effortlessly.
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-md sm:max-w-xl">
          Professional freelance services designed to elevate your business with
          simplicity and excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto px-6 sm:px-0">
          <Link
            to="/contact"
            className="bg-gray-900 text-white font-semibold px-10 py-3 cursor-pointer w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <section className="py-20 md:py-32 flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl sm:text-5xl font-medium mb-4">What We Offer</h2>
        <p className="text-gray-700 mb-10 max-w-2xl text-center text-sm sm:text-base">
          Comprehensive freelance services designed to meet your business needs
          with precision and excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {Services}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-8">{faqItems}</div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
