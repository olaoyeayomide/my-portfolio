// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/layout/Navigation.jsx",
    "./src/components/layout/Sidebar.jsx",
    "./src/components/layout/SpeedDialThemeToggle.jsx",

    "./src/components/tabs/About.jsx",
    "./src/components/tabs/Blog.jsx",
    "./src/components/tabs/GithubHeatmap.jsx",
    "./src/components/tabs/Skills.jsx",
    "./src/components/tabs/Work.jsx",

    "./src/pages/Portfolio.jsx",

    "./src/App.js",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#ffffff",
          text: "#333333",
        },
        dark: {
          bg: "#1a1a2e",
          text: "#ffffff",
        },
        dark_dimmed: {
          bg: "#2d2d2d",
          text: "#e0e0e0",
        },
        system: {
          bg: "#f8f9fa",
          text: "#111111",
        },
      },
      fontFamily: {
        github: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        githubMono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
