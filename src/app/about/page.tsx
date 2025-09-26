import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="px-8 md:px-16 lg:px-32 py-20 text-white">
      <section className="mb-20">
        <h1 className="text-[48px] font-bold mb-8">ABOUT ME</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[28px] font-semibold leading-snug mb-4">
              I am a front-end developer based in Tbilisi.
              <br />
              Has Mechanical Engineering background.
            </h2>
            <p className="text-[#C7C7C7] mb-6">
              I am a front-end developer based in Tbilisi looking for exciting
              opportunities. Has a Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring React.js,
              Next.js, and a bit of design. While I am not programming, I enjoy
              playing football, photography and Valorant. Always learning more
              to improve my skills.
            </p>

            <div className="flex gap-4">
              <button
                className="
                  px-6 py-3 rounded-full
                  bg-[#C6F368] text-black font-semibold
                  shadow-md
                  active:scale-95 active:shadow-inner
                  transition-transform duration-150 ease-in-out
                "
              >
                DOWNLOAD RESUME
              </button>

              <Link
                href="https://github.com/lekoooooo"
                target="_blank"
                rel="noopener noreferrer"
                className="
              flex items-center justify-center
              w-[52px] h-[52px] rounded-full
              bg-[#2c2c2c]
              shadow-md
              active:scale-95 active:shadow-inner
              transition-transform duration-150 ease-in-out
            "
              >
                <Image
                  src="/images/lilhub.svg"
                  width={24}
                  height={24}
                  alt="Github"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/profile.png"
                alt="Leko Bebei"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[28px] font-bold mb-6">MY CAPABILITIES</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-[#C7C7C7]">
            I am always looking to add more skills. Currently focused on modern
            web development, UI/UX, and performance optimization.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Figma",
              "Accessibility",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#2c2c2c] rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
