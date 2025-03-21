import React from "react";
import { Github, Search, Plus, Bell, Inbox } from "lucide-react";
import { NAV_ITEMS } from "../../utils/constants";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white dark:bg-[#010409] text-black dark:text-white sticky top-0 shadow-md">
      <div className="mx-auto border-b dark:border-gray-700">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center space-x-4">
            <Github className="w-8 h-8 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300" />
            <h1 className="font-github font-semibold text-black dark:text-white">
              olaoyeayomide
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Type / to search"
                  className="w-full font-githubMono bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-1.5 px-3 pl-9 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                <Plus className="w-5 h-5" />
              </button>
              <button className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                <Inbox className="w-5 h-5" />
              </button>
              <button className="relative text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></span>
              </button>
              <img
                src="https://i.ibb.co/LnTLK62/myself.jpg"
                alt="Profile"
                className="w-8 h-8 object-cover rounded-full border border-gray-300 dark:border-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center px-4 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center px-3 py-3 text-sm font-medium border-b-2 font-github transition
                ${
                  activeTab === item.id
                    ? "border-[#fd8c73] text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-700 dark:text-gray-300 hover:border-gray-400"
                }`}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
              {item.count && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-gray-300 dark:bg-gray-700 rounded-full">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
