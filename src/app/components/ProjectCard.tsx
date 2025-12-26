import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/app/lib/projects";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="border-[1px] mb-[35px] border-[#c6c7c8] flex"></div>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[400px_1fr] gap-x-8 lg:gap-x-12 gap-y-6 lg:gap-y-10 items-start"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.15,
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="bg-[#333333c4] p-3 sm:p-4 rounded-lg flex-shrink-0 w-full max-w-sm lg:max-w-none mx-auto lg:mx-0">
              <Image
                src={project.image}
                alt={project.title}
                width={550}
                height={400}
                className="rounded-md w-full h-auto object-cover aspect-video"
              />
            </div>

            <div>
              <h3 className="text-white text-xl sm:text-2xl lg:text-[25px] font-bold mb-3 lg:mb-4">
                {project.title}
              </h3>
              <p className="text-[#C7C7C7] mb-4 lg:mb-6 text-sm sm:text-base">
                {project.description}
              </p>

              <div className="text-xs sm:text-sm text-[#C7C7C7] space-y-2 mb-4 lg:mb-6">
                <div className="border-t border-[#333] pt-2">
                  <strong className="text-white block text-sm sm:text-base">
                    PROJECT INFO
                  </strong>
                </div>
                {project.client && (
                  <div className="flex justify-between">
                    <span>Client</span>
                    <span>{project.client}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Year</span>
                  <span>{project.year}</span>
                </div>
                <div className="border-t border-[#5c5b5b]"></div>
                <div className="flex justify-between">
                  <span>Role</span>
                  <span>{project.role}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-4 lg:mt-6">
                {project.demoUrl && (
                  <motion.div
                    whileTap={{ x: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="px-4 py-2 bg-[#6896f8] rounded-full text-black font-medium flex items-center justify-center gap-2 shadow-md active:scale-95 transition text-sm sm:text-base"
                    >
                      LIVE DEMO ↗
                    </Link>
                  </motion.div>
                )}
                {!project.isPrivate && project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="px-4 py-2 bg-[#6896f8] rounded-full text-black font-medium flex items-center justify-center gap-2 shadow-md active:scale-95 transition text-sm sm:text-base"
                  >
                    SEE ON GITHUB
                    <Image
                      src="/images/lilhub.svg"
                      width={16}
                      height={16}
                      alt="GitHub"
                      className="sm:w-5 sm:h-5"
                    />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
