"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  private: boolean;
  homepage: string | null;
}

// GitHub language colors
const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#ed8e00",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#239120",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Dart: "#00B4AB",
  Shell: "#89e051",
  PowerShell: "#012456",
  Vue: "#4FC08D",
  React: "#61DAFB",
  Svelte: "#ff3e00",
  // Default color for unknown languages
  default: "#586069",
};

export default function Repositories() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [contributedRepos, setContributedRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch user's own repos
        const response = await fetch(
          "https://api.github.com/users/lekoooooo/repos?sort=updated&per_page=100"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: Repo[] = await response.json();
        // Filter to show only repos hosted on Vercel
        const vercelRepos = data.filter(
          (repo) => repo.homepage && repo.homepage.includes("vercel.app")
        );
        setRepos(vercelRepos);

        // Fetch contributions (repos user has contributed to)
        const eventsResponse = await fetch(
          "https://api.github.com/users/lekoooooo/events?per_page=100"
        );
        if (eventsResponse.ok) {
          const events = await eventsResponse.json();
          const contributedRepoUrls = new Set<string>();
          events.forEach((event: any) => {
            if (
              event.type === "PushEvent" &&
              event.repo.name !== `lekoooooo/${event.repo.name.split("/")[1]}`
            ) {
              contributedRepoUrls.add(event.repo.url);
            }
          });
          const contributedRepoDetails = await Promise.all(
            Array.from(contributedRepoUrls)
              .slice(0, 10)
              .map(async (url) => {
                const res = await fetch(url);
                return res.ok ? res.json() : null;
              })
          );
          setContributedRepos(
            contributedRepoDetails.filter((repo): repo is Repo => repo !== null)
          );
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#C7C7C7]">Loading repositories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-6 lg:mb-8">
        MY REPOSITORIES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {repos.map((repo, index) => {
          const CardContent = (
            <motion.div
              className={`bg-[#1a1a1a] rounded-lg p-4 sm:p-6 border transition-colors
                ${
                  repo.private
                    ? "border-[#333] cursor-not-allowed"
                    : "border-[#333] hover:border-[#C6F368] cursor-pointer"
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {repo.name}
                </h3>

                {repo.private && (
                  <span className="text-[#C7C7C7] text-xs sm:text-sm">
                    🔒 Private
                  </span>
                )}
              </div>

              <p className="text-[#C7C7C7] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                {repo.description || "No description available"}
              </p>

              {repo.language && (
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] || languageColors.default,
                    }}
                  ></div>
                  <span className="text-[#C7C7C7] text-xs sm:text-sm">
                    {repo.language}
                  </span>
                </div>
              )}

              <div className="flex gap-3 sm:gap-4">
                {!repo.private && (
                  <span className="text-[#C6F368] text-xs sm:text-sm">
                    GitHub →
                  </span>
                )}
              </div>
            </motion.div>
          );

          // PUBLIC clickable card
          if (!repo.private) {
            return (
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </Link>
            );
          }

          // PRIVATE not clickable
          return <div key={repo.id}>{CardContent}</div>;
        })}
      </div>

      {contributedRepos.length > 0 && (
        <>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-6 lg:mb-8 mt-12">
            CONTRIBUTED REPOSITORIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {contributedRepos.map((repo, index) => {
              const CardContent = (
                <motion.div
                  className="bg-[#1a1a1a] rounded-lg p-4 sm:p-6 border border-[#333] hover:border-[#C6F368] cursor-pointer transition-colors"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {repo.name}
                    </h3>
                    <span className="text-[#C6F368] text-xs sm:text-sm">
                      Contributed
                    </span>
                  </div>

                  <p className="text-[#C7C7C7] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                    {repo.description || "No description available"}
                  </p>

                  {repo.language && (
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div
                        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] ||
                            languageColors.default,
                        }}
                      ></div>
                      <span className="text-[#C7C7C7] text-xs sm:text-sm">
                        {repo.language}
                      </span>
                    </div>
                  )}

                  <div className="flex gap-3 sm:gap-4">
                    <span className="text-[#C6F368] text-xs sm:text-sm">
                      GitHub →
                    </span>

                    <div className="flex items-center gap-2 text-[#C7C7C7] text-xs sm:text-sm">
                      <span>⭐ {repo.stargazers_count}</span>
                      <span>🍴 {repo.forks_count}</span>
                    </div>
                  </div>
                </motion.div>
              );

              return (
                <Link
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
