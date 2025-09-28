import Footer from "../footer/footer";
import { CheckCircle } from "lucide-react";

import Service1 from "./Assets/service1.png";
import Service2 from "./Assets/service2.png";

export default function Services() {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "ReactJS",
    "NextJS",
    "VueJS",
    "Tailwind CSS",
    "Bootstrap",
    "NodeJS",
    "ExpressJS",
    "Laravel",
  ];

  const academicServices = [
    "Thesis Writing",
    "Research Papers",
    "Feasibility Studies",
    "Capstone Projects",
    "Dissertations",
    "Technical Documentation",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-[140px] bg-gray-50 animate-fade-in">
      <div className="text-center px-6 mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive freelance solutions designed to elevate your business
          with precision, efficiency, and exceptional quality.
        </p>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={Service1}
            alt="Web Development Showcase"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 w-full text-left">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We offer comprehensive web development services designed to build
            reliable, user-friendly websites that cater to your specific needs.
            From front-end to back-end development, our team ensures that your
            website not only looks great but also performs optimally.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our expertise spans various technologies, enabling us to deliver
            dynamic and responsive web solutions that engage users and drive
            conversions. We specialize in:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={Service2}
            alt="Academic Papers Showcase"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 w-full text-left">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We provide professional assistance in preparing high-quality
            academic papers tailored to your needs. Whether you’re working on a
            thesis, research paper, or feasibility study, we ensure accuracy,
            clarity, and academic integrity in every document.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our team specializes in comprehensive research and documentation
            across different fields, helping students and professionals present
            well-structured and credible work. We can assist with:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {academicServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            A streamlined approach that ensures quality results and stress-free
            collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Discovery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understanding your needs, goals, and project requirements
                through detailed consultation.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Strategy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developing a comprehensive plan and timeline tailored to your
                specific objectives.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Execution
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementing the solution with regular updates and transparent
                communication.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">
                04
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Final review, testing, and handover with support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
