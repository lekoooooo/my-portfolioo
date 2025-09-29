import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/lib/projects";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="border-[1px] mb-[35px] border-[#c6c7c8] flex"></div>
      <div className="space-y-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 xl:grid-cols-[630px_1fr] gap-x-12 gap-y-10 items-start"
          >
            <div className="bg-[#333333c4] p-4 rounded-lg flex-shrink-0 w-[630px]">
              <Image
                src={project.image}
                alt={project.title}
                width={550}
                height={400}
                className="rounded-md w-full h-auto object-cover"
              />
            </div>

            <div>
              <h3 className="text-white text-[25px] font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-[#C7C7C7] mb-6">{project.description}</p>

              <div className="text-sm text-[#C7C7C7] space-y-2 mb-6">
                <div className="border-t border-[#333] pt-2">
                  <strong className="text-white block">PROJECT INFO</strong>
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

              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="px-4 py-2 bg-[#6896f8] rounded-full text-black font-medium flex items-center gap-2 shadow-md active:scale-95 transition"
                  >
                    LIVE DEMO ↗
                  </Link>
                )}
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="px-4 py-2 bg-[#6896f8] rounded-full text-black font-medium flex items-center gap-2 shadow-md active:scale-95 transition"
                >
                  SEE ON GITHUB
                  <Image
                    src="/images/lilhub.svg"
                    width={18}
                    height={18}
                    alt="GitHub"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
