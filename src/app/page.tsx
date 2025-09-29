"use client";
import Image from "next/image";
import Link from "next/link";
import Projects from "./components/ProjectCard";

export default function Page() {
  return (
    <div>
      <section className="py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div>
            <h2 className="text-[#FFFFFF] font-bigShot text-[65px]">
              Hi, I am Leko bebei.
            </h2>
            <p className="text-[#C7C7C7] font-bigShot w-[490px] text-[20px]">
              From Tbilisi, Georgia. Front end developer, passionate about
              building accessible and user-friendly websites.
            </p>

            <div className="flex mt-[40px] gap-[20px]">
              <Link
                href="mailto:levdidebashvili@gmail.com"
                className="
                  flex items-center justify-center gap-2
                  px-6 py-3 rounded-full
                  bg-[#6896f8] text-black font-semibold
                  shadow-md
                  active:scale-95 active:shadow-inner
                  transition-transform duration-150 ease-in-out
                "
              >
                CONTACT ME
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </Link>

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

          <div className="flex-shrink-0">
            <Image
              src="/images/leko.jpg"
              width={460}
              height={460}
              alt="lex"
              className=" lg:mr-[170px]
    rounded-lg 
    flex-shrink-0
    w-[250px] h-[250px]        
    sm:w-[300px] sm:h-[300px]  
    md:w-[350px] md:h-[350px]  
    lg:w-[400px] lg:h-[400px]  
    xl:w-[460px] xl:h-[460px]  
  "
            />
          </div>
        </div>
      </section>

      <Projects />
    </div>
  );
}
