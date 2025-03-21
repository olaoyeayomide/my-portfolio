import { useEffect, useState } from "react";

const GITHUB_USERNAME = "olaoyeayomide";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const PinnedRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!GITHUB_TOKEN) {
      console.warn("GitHub Token is missing!");
    }

    fetch(GITHUB_API_URL, {
      headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Unexpected response format");
        }
        const sortedRepos = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(sortedRepos);
      })
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div
              key={repo.id}
              className="border-2 p-4 rounded-lg bg-white dark:border-gray-700 dark:bg-[#0d1117]"
            >
              <h3 className="font-github text-xl font-bold text-[#4493f8] dark:text-[#4493f8]">
                {repo.name}
              </h3>
              <p className="font-github text-sm text-gray-600 dark:text-gray-300">
                {repo.description}
              </p>
              <div className="flex justify-between mt-2">
                <span className="font-githubMono text-yellow-400">
                  ⭐ {repo.stargazers_count}
                </span>
                <a
                  href={repo.html_url}
                  className="inline-block px-3 py-1 border-[1px] border-gray-300 bg-white dark:bg-blue-900 text-gray-600 dark:text-blue-300 rounded-full text-sm font-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading repositories...</p>
        )}
      </div>
    </div>
  );
};

export default PinnedRepos;
