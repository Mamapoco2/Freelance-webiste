import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovkezlp");
  const [selectedService, setSelectedService] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setSuccessMessage(
        "✅ Thanks for reaching out! We’ll get back to you soon."
      );
      const timer = setTimeout(() => setSuccessMessage(""), 30000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const services = [
    "Web Development",
    "Academic Writing",
    "Database Management",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-[140px] bg-gray-50 animate-fade-in">
      {successMessage && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 
                bg-green-100 border border-green-400 text-green-700 
                px-6 py-3 rounded-lg shadow-md z-50
                ${state.succeeded ? "animate-fade-out" : ""}`}
        >
          {successMessage}
        </div>
      )}

      <div className="relative pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-700 font-medium text-sm">
              Let's Connect
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need web development, academic writing, or database
            solutions, we're here to bring your vision to life.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3">
                Type of Service
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-5 py-2 rounded-full border-2 transition-colors text-sm font-medium cursor-pointer
                      ${
                        selectedService === service
                          ? "border-green-500 text-green-500 bg-green-50"
                          : "border-green-500 text-gray-700 hover:bg-green-50"
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              <input type="hidden" name="subject" value={selectedService} />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 w-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 italic mb-6">
            "We’d love to hear from you — let’s build something great together."
          </p>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-xl">📧</span>
            <a
              href="mailto:AcadStack@gmail.com"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              AcadStack@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
