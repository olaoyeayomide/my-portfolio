import React, { useState, useEffect } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

const SpeedDialThemeToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      console.log("Current theme:", theme);
      document.documentElement.classList.toggle("dark", theme.includes("dark"));
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <div className="relative">
        {/* Theme options that slide out */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-4 transition-all duration-300">
            <button
              onClick={() => handleThemeChange("light")}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                theme === "light"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Light theme"
            >
              <Sun size={24} />
            </button>

            <button
              onClick={() => handleThemeChange("dark")}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                theme.includes("dark")
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Dark theme"
            >
              <Moon size={24} />
            </button>

            <button
              onClick={() => handleThemeChange("system")}
              className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                theme === "system"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="System theme"
            >
              <Laptop size={24} />
            </button>
          </div>
        )}

        <button
          onClick={toggleMenu}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
            isOpen
              ? "bg-transparent rotate-90"
              : "bg-white dark:bg-black border border-[#2563eb] hover:bg-green-600"
          }`}
          aria-label="Toggle theme menu"
          aria-expanded={isOpen}
        >
          {theme === "light" ? (
            <Sun size={24} className="transition-transform duration-300" />
          ) : theme.includes("dark") ? (
            <Moon size={24} className="transition-transform duration-300" />
          ) : (
            <Laptop size={24} className="transition-transform duration-300" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SpeedDialThemeToggle;
