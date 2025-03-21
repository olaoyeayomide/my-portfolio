import React from "react";

const Work = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
      image: "/api/placeholder/400/300",
      tech: ["Python", "FastAPI", "PostGres"],
      link: "#",
      github: "#",
    },
    {
      title: "Dr.Kleen Cleaning Services",
      description:
        "Developed a collaborative task management application with real-time updates",
      image: "/api/placeholder/400/300",
      tech: ["React", "Tailwind CSS", "Python", "FastAPI"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-github font-bold mb-2 text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-github">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-github"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline font-github transition duration-200"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="text-gray-600 dark:text-gray-400 hover:underline font-github transition duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
