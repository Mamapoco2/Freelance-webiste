import Team from "./components/Team";
import Footer from "../footer/footer";

export default function About() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-[100px] bg-gray-50 animate-fade-in">
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          About <span className="text-green-500">AcadStack</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
          We are a team of passionate professionals dedicated to helping
          students and businesses excel through thoughtful design, efficient
          development, and strategic solutions.
        </p>
      </section>

      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-6 border-l-4 border-green-500 bg-gray-50 shadow-sm rounded-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality academic and freelance solutions that
              empower individuals and organizations to achieve more with less
              stress. We strive to simplify complex challenges through
              innovation and dedication.
            </p>
          </div>
          <div className="p-6 border-l-4 border-green-500 bg-gray-50 shadow-sm rounded-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become the leading partner for academic and business solutions,
              recognized for excellence, reliability, and impact in every
              project we deliver.
            </p>
          </div>
        </div>
      </section>

      <Team />

      <Footer />
    </main>
  );
}
