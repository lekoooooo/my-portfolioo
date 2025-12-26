import { experiences } from "@/app/lib/data";

export default function Experience() {
  return (
    <div className="space-y-6 lg:space-y-10">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between gap-4"
        >
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {exp.role}
            </h3>
            {exp.company && (
              <p className="text-[#C6F368] font-medium text-sm sm:text-base mb-2">
                {exp.company}
              </p>
            )}
            <p className="text-[#C7C7C7] max-w-full md:max-w-xl text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap md:mt-0 shrink-0">
            {exp.date}
          </p>
        </div>
      ))}
    </div>
  );
}
