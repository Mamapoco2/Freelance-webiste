import Navbar from "../Navbar/navbar";
import Data from "../../data";
export default function Freelance() {
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

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center pt-20 bg-gray-100">
        <h1 className="text-4xl md:text-7xl leading-tight font-light">
          Achieve More, <br />
          <span className="text-gray-800 font-medium">Stress Less,</span> <br />
          <span className="text-gray-900 font-semibold">
            Excel Effortlessly.
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl">
          Professional freelance services designed to elevate your business with
          simplicity and excellence.
        </p>
        <div className="flex gap-4 pt-6">
          <button className="bg-gray-900 text-white font-semibold px-10 py-3 cursor-pointer">
            Contact Us
          </button>
          <button className="border border-gray-900 text-gray-900 font-semibold px-10 py-3 hover:bg-black hover:text-white duration-200 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <section className="h-[150vh] flex flex-col items-center justify-center px-6">
        <h2 className="text-5xl font-medium mb-4">What We Offer</h2>
        <p className="text-gray-700 mb-10 max-w-2xl text-center">
          Comprehensive freelance services designed to meet your business needs
          with precision and excellence.
        </p>

        {/* Grid for services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {Services}
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-5xl font-medium mb-4">
          Frequently asked Questions
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl text-center">
          Comprehensive freelance services designed to meet your business needs
          with precision and excellence.
        </p>
      </section>
    </main>
  );
}
