import React from "react";

const About = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow p-6 mb-6 font-github dark:bg-[#0d1117] dark:border-gray-700 dark:text-dark-text">
        <p className="text-sm font-light font-githubMono text-left mb-6 text-gray-600 dark:text-white">
          olaoyeayomide / README.md
        </p>
        <h2 className="text-2xl font-bold font-github">
          Hello there; welcome 👋🏾
        </h2>

        <div className="border-t-2 mt-4 mb-4 border-gray-300 dark:border-gray-600">
          <div className="flex gap-4 mt-4 mb-4">
            <a href="https://github.com/olaoyeayomide">
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>

            <a href="https://linkedin.com/in/your-username">
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>

            <a href="https://twitter.com/your-username">
              <img
                src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white"
                alt="Twitter (X)"
              />
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mt-4 mb-4">
            I am Olaoye Ayomide, a passionate software engineer. I specialize in
            <span className="font-githubMono text-blue-600 dark:text-blue-400">
              {" "}
              React
            </span>{" "}
            and
            <span className="font-githubMono text-green-600 dark:text-green-400">
              {" "}
              Python
            </span>{" "}
            building scalable web applications and seamless user experiences.
            Clean code, efficiency, and innovation drive my work. I thrive on
            continuous learning, taking on new challenges, and pushing the
            boundaries of technology. Beyond coding, I enjoy art & design🎨
            singing🎤 and watching movies👨🏽‍💻which fuel my creativity and
            problem-solving skills. I’m always excited to collaborate and create
            impactful digital solutions.
          </p>

          <div className="space-y-2 pb-4 border-b-4 border-gray-300 dark:border-gray-600">
            <ul className="list-inside pl-5 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  🎓
                </span>
                <div className="text-gray-600 dark:text-gray-400">
                  Software Engineering student at Tech University
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  💼
                </span>
                <div className="text-gray-600 dark:text-gray-400">
                  Open to work and collaborations
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="w-5 h-5 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  🚀
                </span>
                <div className="text-gray-600 dark:text-gray-400">
                  Working on exciting web and open-source projects
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-7">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=olaoyeayomide&theme=dark"
            alt="GitHub Streak Stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=olaoyeayomide&layout=compact&theme=default"
            alt="Top Languages"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 font-github">
        <div className="bg-white rounded-lg dark:border-gray-700 border-2 shadow p-4 dark:bg-[#0d1117] dark:text-dark-text">
          <h3 className="font-semibold mb-2">Experience Highlights</h3>
          <div className="flex justify-between">
            <div>
              <div className="text-2xl font-bold">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Coding
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg dark:border-gray-700 border-2 shadow p-4 dark:bg-[#0d1117] dark:text-dark-text">
          <h3 className="font-semibold mb-2">Core Skills</h3>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm mr-2 font-githubMono">
                JavaScript
              </span>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full text-sm mr-2 font-githubMono">
                Python
              </span>
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded-full text-sm font-githubMono">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
