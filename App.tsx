import React, { useState, useEffect } from "react";
import ProfileSidebar from "./components/ProfileSidebar";
import RepoCard from "./components/RepoCard";
import WorkCard from "./components/WorkCard";
import ContributionGraph from "./components/ContributionGraph";
import AIChat from "./components/AIChat";
import {
  MY_PROFILE,
  PROJECTS,
  PINNED_PROJECT_IDS,
  SKILLS,
  SERVICES,
} from "./constants";
import { Tab } from "./types";
import {
  Book,
  Layout,
  Package,
  Star,
  Cpu,
  Github,
  Twitter,
  LinkIcon,
  Briefcase,
  Terminal,
  PenTool,
  Moon,
  Sun,
  CheckCircle,
  Zap,
  Globe,
  Mail,
} from "./components/Icons";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ABOUT);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Initialize theme
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.ABOUT:
        return (
          <div className="space-y-6 animate-fade-in">
            {/* README.md Style Container */}
            <div className="border border-github-border rounded-md bg-github-bg overflow-hidden shadow-sm">
              <div className="bg-github-card px-4 py-3 border-b border-github-border flex items-center justify-between sticky top-0">
                <div className="flex items-center gap-2 text-sm font-mono text-github-text">
                  <span className="font-semibold">{MY_PROFILE.username}</span>
                  <span className="text-github-muted">/</span>
                  <span>README.md</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-6 pb-2 border-b border-github-border">
                  Hello there; welcome 👋
                </h1>

                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://github.com/olaoyeayomide"
                    className="flex items-center gap-2 bg-[#24292e] text-white px-4 py-1.5 rounded-md text-sm font-semibold border border-github-border hover:bg-[#2f363d] transition-colors"
                  >
                    <Github size={16} /> GITHUB
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olaoye-ayomide"
                    className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-1.5 rounded-md text-sm font-semibold border border-transparent hover:bg-[#006097] transition-colors"
                  >
                    <LinkIcon size={16} /> LINKEDIN
                  </a>
                  <a
                    href="https://x.com/RockxyOmahpasta"
                    className="flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-md text-sm font-semibold border border-github-border hover:bg-gray-900 transition-colors"
                  >
                    <Twitter size={16} /> X
                  </a>
                </div>

                <div className="prose prose-invert max-w-none text-github-text">
                  <p className="text-base leading-relaxed mb-6">
                    I am{" "}
                    <strong className="text-github-accent">
                      {MY_PROFILE.name}
                    </strong>
                    , a passionate software engineer and freelancer focused on
                    helping businesses grow through smart, effective web
                    solutions. I specialize in{" "}
                    <strong className="text-[#61dafb]">identifying</strong> and{" "}
                    <strong className="text-[#3572A5]">
                      fixing website problems that limit growth
                    </strong>
                    , turning underperforming online presences into tools that
                    actually support business goals.
                  </p>
                  <p className="text-base leading-relaxed mb-6">
                    My work centers on partnering with businesses to uncover
                    challenges, refine their digital strategy, and transform
                    problems into opportunities that drive sustainable growth
                    through clear, practical, and results-driven solutions.
                  </p>

                  <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4 border-b border-github-border pb-2">
                      I can help you with
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {SERVICES.map((service, idx) => (
                        <div
                          key={idx}
                          className="p-4 border border-github-border rounded-lg bg-github-card hover:border-github-accent transition-colors"
                        >
                          <div className="mb-2 text-github-accent">
                            {service.icon === "Layout" && <Layout size={24} />}
                            {service.icon === "Globe" && <Globe size={24} />}
                            {service.icon === "Zap" && <Zap size={24} />}
                          </div>
                          <h3 className="font-semibold mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-github-muted">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="list-none space-y-2 pl-0 mt-8">
                    <li className="flex items-center gap-2">
                      💼{" "}
                      <span className="font-semibold text-github-green">
                        Available for freelance projects
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      🌱{" "}
                      <span className="text-github-muted">
                        Currently learning
                      </span>{" "}
                      <span className="font-semibold">
                        Advanced Generative AI Patterns
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ContributionGraph />
            </div>
          </div>
        );
      case Tab.WORK:
        return (
          <div className="animate-fade-in">
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-github-text">
                  Featured Work
                </h2>
                <p className="text-github-muted">
                  A selection of client projects and open source contributions.
                </p>
              </div>
              <div className="flex gap-2 text-sm">
                <button className="px-3 py-1 bg-github-accent text-white rounded-full font-medium">
                  All
                </button>
                <button className="px-3 py-1 bg-github-card border border-github-border text-github-text rounded-full hover:bg-github-btnHover transition-colors">
                  Client Work
                </button>
                <button className="px-3 py-1 bg-github-card border border-github-border text-github-text rounded-full hover:bg-github-btnHover transition-colors">
                  Open Source
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-github-btn border border-github-border text-github-text px-6 py-2 rounded-md font-medium hover:bg-github-btnHover transition-colors">
                View all repositories
              </button>
            </div>
          </div>
        );
      case Tab.SKILLS:
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-github-text">
              Technical Proficiency
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-github-border p-4 rounded-md bg-github-bg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Layout size={18} className="text-github-accent" /> Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Next.js",
                    "Redux",
                    "HTML5/CSS3",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-github-card rounded border border-github-border text-sm hover:border-github-accent/50 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-github-border p-4 rounded-md bg-github-bg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Terminal size={18} className="text-github-green" /> Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "PHP",
                    "Python",
                    "FastAPI",
                    "Django",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "GraphQL",
                    "Docker",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-github-card rounded border border-github-border text-sm hover:border-github-green/50 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-github-border p-4 rounded-md bg-github-bg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Cpu size={18} className="text-purple-400" /> AI & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Gemini API", "Docker", "AWS", "Git", "Linux", "CI/CD"].map(
                    (s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-github-card rounded border border-github-border text-sm hover:border-purple-400/50 transition-colors cursor-default"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case Tab.AI_CHAT:
        return (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-github-text mb-2">
                Talk to my Digital Twin
              </h2>
              <p className="text-github-muted">
                Powered by the{" "}
                <span className="text-github-accent">Gemini API</span>. Ask
                about my experience, specific coding skills, or availability.
              </p>
            </div>
            <AIChat />
          </div>
        );
      default:
        return (
          <div className="text-center py-20 text-github-muted">
            This section is under construction.
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-github-bg text-github-text transition-colors duration-300">
      {/* Top Navigation */}
      <header className="bg-github-card py-4 border-b border-github-border sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-github-text/10 rounded-full p-1 cursor-pointer hover:opacity-80 transition-opacity">
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="fill-github-text"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </div>
            <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-github-text">
              <span className="cursor-pointer hover:text-github-muted">
                {MY_PROFILE.username}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Hire Me Button */}
            <a
              href={`mailto:${MY_PROFILE.email}`}
              className="hidden md:flex items-center gap-2 bg-github-green text-white px-3 py-1.5 rounded-md text-sm font-bold shadow-sm hover:bg-github-greenHover transition-colors"
            >
              <Mail size={16} /> Hire Me
            </a>

            <div className="w-[1px] h-6 bg-github-border mx-1"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-github-muted hover:text-github-accent rounded-full border border-transparent hover:border-github-border transition-all"
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="w-8 h-8 rounded-full border border-github-border bg-github-btn hover:bg-github-btnHover cursor-pointer flex items-center justify-center ml-2">
              <img
                src={MY_PROFILE.avatarUrl}
                alt=""
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 md:px-8 py-8 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="md:col-span-3 lg:col-span-3 -mt-12 md:mt-0 relative z-10">
            <ProfileSidebar profile={MY_PROFILE} />
          </aside>

          {/* Right Content */}
          <div className="md:col-span-9 lg:col-span-9">
            {/* Sticky Navigation Tabs */}
            <div
              className={`sticky top-0 bg-github-bg z-40 border-b border-github-border mb-6 pt-2 transition-all ${
                isScrolled ? "shadow-md bg-opacity-95 backdrop-blur-sm" : ""
              }`}
            >
              <nav className="flex items-center overflow-x-auto gap-1 no-scrollbar">
                {[
                  { id: Tab.ABOUT, icon: Book, label: "About Me" },
                  { id: Tab.WORK, icon: Briefcase, label: "Work" },
                  { id: Tab.SKILLS, icon: Terminal, count: SKILLS.length },
                  { id: Tab.BLOG, icon: PenTool, label: "Blog" },
                  { id: Tab.REPO, icon: Star, label: "repo" },
                  {
                    id: Tab.AI_CHAT,
                    icon: Cpu,
                    label: "Ask AI",
                    badge: "Beta",
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-all whitespace-nowrap
                            ${
                              activeTab === tab.id
                                ? "border-[#fd8c73] font-semibold text-github-text"
                                : "border-transparent text-github-text hover:bg-github-btnHover hover:border-github-border rounded-t-md"
                            }`}
                  >
                    <tab.icon
                      size={16}
                      className={
                        activeTab === tab.id
                          ? "text-github-text"
                          : "text-github-muted"
                      }
                    />
                    <span>{tab.label || tab.id}</span>
                    {tab.count !== undefined && (
                      <span className="bg-github-btn text-github-text text-xs px-2 py-0.5 rounded-full border border-github-border">
                        {tab.count}
                      </span>
                    )}
                    {tab.badge && (
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1 shadow-sm">
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">{renderContent()}</div>
          </div>
        </div>
      </main>

      <footer className="mt-12 py-8 border-t border-github-border container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-github-muted">
          <div className="flex items-center gap-2">
            <div className="font-bold text-github-text text-lg">Olaoye.</div>
            <span>© 2025 All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-6 md:ml-auto">
            <a
              href="#"
              className="hover:text-github-accent hover:underline transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-github-accent hover:underline transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="hover:text-github-accent hover:underline transition-colors"
            >
              Blog
            </a>
            <a
              href={`mailto:${MY_PROFILE.email}`}
              className="hover:text-github-accent hover:underline transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
