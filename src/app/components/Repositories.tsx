"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import { motion } from "framer-motion";

export default function Repositories() {
  return (
    <section className="py-20">
      <h2 className="text-[28px] font-bold mb-8">MY REPOSITORIES</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const CardContent = (
            <motion.div
              className={`bg-[#1a1a1a] rounded-lg p-6 border transition-colors
                ${
                  project.isPrivate
                    ? "border-[#333] cursor-not-allowed"
                    : "border-[#333] hover:border-[#C6F368] cursor-pointer"
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.isPrivate && (
                  <span className="text-[#C7C7C7] text-sm">🔒 Private</span>
                )}
              </div>

              <p className="text-[#C7C7C7] text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {project.language && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#C6F368]"></div>
                  <span className="text-[#C7C7C7] text-sm">
                    {project.language}
                  </span>
                </div>
              )}

              <div className="flex gap-4">
                {project.githubUrl && !project.isPrivate && (
                  <span className="text-[#C6F368] text-sm">GitHub →</span>
                )}

                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C6F368] hover:underline text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo
                  </Link>
                )}
              </div>
            </motion.div>
          );

          // PUBLIC clickable card
          if (project.githubUrl && !project.isPrivate) {
            return (
              <Link
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </Link>
            );
          }

          // PRIVATE  not clickable
          return <div key={project.id}>{CardContent}</div>;
        })}
      </div>
      <div>
        <motion.div className="mt-8">
          <div className="flex justify-end mt-6">
            <Link
              href="/work"
              className="inline-flex gap-2 px-6 py-3 bg-[#C6F368] text-black font-medium rounded-full shadow-md hover:scale-105 transition"
            >
              Click for more repositories →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
