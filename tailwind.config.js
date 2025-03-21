// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/layout/Navigation.jsx",
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/layout/Sidebar.jsx",
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/layout/SpeedDialThemeToggle.jsx",

    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/tabs/About.jsx",
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/tabs/Blog.jsx",
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/tabs/GithubHeatmap.jsx",
    // "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/tabs/PinnedRepos.jsx",
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/tabs/Skills.jsx",
    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/components/tabs/Work.jsx",

    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/pages/Portfolio.jsx",

    "C:/Users/ayomi/Desktop/Project/portfolio/olaoyeayomide-portfolio/my-portfolio/src/App.js",
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
