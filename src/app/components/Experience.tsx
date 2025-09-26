import { experiences } from "@/app/lib/data";

export default function Experience() {
  return (
    <div className="space-y-10">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            {exp.company && (
              <p className="text-[#C6F368] font-medium">{exp.company}</p>
            )}
            <p className="text-[#C7C7C7] max-w-xl">{exp.description}</p>
          </div>
          <p className="text-sm text-gray-400 whitespace-nowrap mt-2 md:mt-0">
            {exp.date}
          </p>
        </div>
      ))}
    </div>
  );
}
