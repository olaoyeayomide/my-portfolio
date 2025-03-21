import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Python", level: 80 },
        { name: "Django", level: 65 },
        { name: "FastAPI", level: 80 },
        { name: "PostgresSQL", level: 70 },
      ],
    },
  ];

  return (
    <div className="mb-6 space-y-8">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-lg shadow p-6"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {category.category}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 rounded-full h-2"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
