import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../../styles/heatmap.css";

const GITHUB_API_URL = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubHeatmap = () => {
  const [contributions, setContributions] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [totalContributions, setTotalContributions] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = {
        query: `
          query {
            user(login: "olaoyeayomide") {
              contributionsCollection(from: "${selectedYear}-01-01T00:00:00Z", to: "${selectedYear}-12-31T23:59:59Z") {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
                totalCommitContributions
              }
            }
          }
        `,
      };

      const response = await fetch(GITHUB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify(query),
      });

      const data = await response.json();

      const days =
        data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks
          .flatMap((week) => week.contributionDays)
          .map((day) => ({
            date: day.date,
            count: day.contributionCount,
          })) || [];

      setContributions(days);
      setTotalContributions(
        data?.data?.user?.contributionsCollection?.totalCommitContributions || 0
      );
    };

    fetchContributions();
  }, [selectedYear]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white dark:bg-[#0d1117] dark:border-gray-700 border-2 rounded-lg shadow p-6 mb-6 flex flex-col md:flex-row">
      {/* Heatmap Section */}
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-4 font-github">
          {totalContributions}{" "}
          {totalContributions === 1 ? "contribution" : "contributions"} in{" "}
          {selectedYear}
        </h2>

        <CalendarHeatmap
          startDate={new Date(`${selectedYear}-01-01`)}
          endDate={new Date(`${selectedYear}-12-31`)}
          values={contributions}
          classForValue={(value) => {
            if (!value || value.count === 0) return "color-empty";
            if (value.count >= 1 && value.count < 5) return "color-scale-1";
            if (value.count >= 5 && value.count < 10) return "color-scale-2";
            if (value.count >= 10 && value.count < 20) return "color-scale-3";
            return "color-scale-4";
          }}
        />

        <div className="flex items-center space-x-2 mt-4 text-gray-600 text-sm font-githubMono">
          <span>Less</span>
          <div className="w-4 h-4 bg-[#ebedf0] border rounded"></div>
          <div className="w-4 h-4 bg-[#9be9a8] border rounded"></div>
          <div className="w-4 h-4 bg-[#40c463] border rounded"></div>
          <div className="w-4 h-4 bg-[#30a14e] border rounded"></div>
          <div className="w-4 h-4 bg-[#216e39] border rounded"></div>
          <span>More</span>
        </div>
      </div>

      <div className="ml-6 flex flex-col space-y-2 mt-4 md:mt-0">
        {isMobile ? (
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="px-4 py-2 rounded text-lg font-semibold bg-gray-100 text-gray-700"
          >
            {[...Array(5)].map((_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        ) : (
          [...Array(5)].map((_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <button
                key={year}
                className={`px-4 py-2 rounded text-lg font-semibold ${
                  selectedYear === year
                    ? "bg-blue-600 text-white font-github"
                    : "bg-gray-100 text-gray-700 font-github"
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GitHubHeatmap;
