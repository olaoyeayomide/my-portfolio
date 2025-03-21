import React from "react";
import { MapPin, Mail, FileText, Phone } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-none dark:bg-[#0d1117] p-6">
      <div className="max-md:flex max-md:flex-row items-center gap-4">
        <img
          src="https://i.ibb.co/LnTLK62/myself.jpg"
          alt="Profile"
          className="rounded-full w-[120px] h-[120px] lg:w-[310px] max-md:flex-left lg:h-[310px] object-cover border-2 border-gray-200 dark:border-gray-700"
        />
        <div className="font-github">
          <h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-gray-100">
            Olaoye Ayomide
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">olaoyeayomide</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Software Engineer || Fullstack Engineer || Frontend Engineer || Backend
        Engineer👨🏽‍💻
      </p>

      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2 max-w-[25rem] space-y-2">
          {/* Tech Badges */}
          <img
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML Badge"
          />
          <img
            src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
            alt="React Badge"
          />
          <img
            src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"
            alt="Tailwind CSS Badge"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="JavaScript Badge"
          />
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            alt="Python Badge"
          />
          <img
            src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"
            alt="FastAPI Badge"
          />
          <img
            src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
            alt="Django Badge"
          />
        </div>
      </div>

      <div className="space-y-4 mt-6 mb-6">
        <button
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          onClick={() => {
            window.open(
              "https://www.canva.com/design/DAGRU9qLaqw/DGBMfyqyYBPDwMupdUTCFw/view?embed",
              "_blank"
            );
          }}
        >
          <FileText className="w-4 h-4 mr-2" />
          Download Resume
        </button>
        <a
          href="tel:+2348114721756"
          className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <Phone className="w-4 h-4 mr-2" />
          Contact Me
        </a>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-gray-600 dark:text-gray-400" />
          <a
            href="mailto:olaoyeayomide@email.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ayomideolaoye84@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <MapPin size={18} />
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
