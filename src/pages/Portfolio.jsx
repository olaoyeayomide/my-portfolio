import React, { useState } from "react";
import Navigation from "../components/layout/Navigation";
import Sidebar from "../components/layout/Sidebar";
import About from "../components/tabs/About";
import Work from "../components/tabs/Work";
import Skills from "../components/tabs/Skills";
import Blog from "../components/tabs/Blog";
import PinnedRepos from "../components/tabs/PinnedRepos";
import GitHubHeatmap from "../components/tabs/GitHubHeatmap";
import SpeedDialThemeToggle from "../components/layout/SpeedDialThemeToggle";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "skills":
        return <Skills />;
      case "blog":
        return <Blog />;
      case "repo":
        return <PinnedRepos />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen w-fit xl:w-auto bg-gray-50 dark:bg-[#0d1117]">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <div className="w[100%] lg:w-3/4">
            {renderActiveTab()}
            {/* <PinnedRepos /> */}
            <GitHubHeatmap />
            <SpeedDialThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
