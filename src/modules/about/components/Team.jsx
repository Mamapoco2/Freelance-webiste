import { Linkedin, Github, Twitter } from "lucide-react";
import team from "./TeamComposition";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-12 py-16">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Meet Our Team
      </h2>

      {/* Subtext */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl text-center mt-4 mb-12 px-4">
        Dedicated professionals who bring expertise and passion to every
        project.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col text-center items-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Profile Image */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-green-500"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              {member.name}
            </h3>

            {/* Roles */}
            <div className="mt-2 text-gray-600 text-xs sm:text-sm space-y-1">
              {Array.isArray(member.roles) ? (
                member.roles.map((role, i) => <p key={i}>{role}</p>)
              ) : (
                <p>{member.role}</p>
              )}
            </div>

            {/* Quote */}
            {member.quote && (
              <p className="italic text-gray-500 mt-4 text-xs sm:text-sm px-2 sm:px-4">
                “{member.quote}”
              </p>
            )}

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.socials?.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {member.socials?.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
