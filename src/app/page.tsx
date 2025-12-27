"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Projects from "./components/ProjectCard";
import AboutComponent from "./components/About";

export default function Page() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false });

  return (
    <div>
      <section ref={heroRef} className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <motion.h2
              className="text-[#FFFFFF] font-bigShot text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[65px] leading-tight"
              animate={{
                opacity: heroInView ? 1 : 0,
                y: heroInView ? 0 : -50,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I am Leko bebei.
            </motion.h2>

            <motion.p
              className="text-[#C7C7C7] font-bigShot text-base sm:text-lg md:text-xl lg:text-[20px] max-w-full sm:max-w-md md:max-w-lg lg:w-[490px] mt-4 md:mt-0"
              animate={{
                opacity: heroInView ? 1 : 0,
                x: heroInView ? 0 : -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              From Tbilisi, Georgia. Front end developer, passionate about
              building accessible and user-friendly and pixel perfect websites.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row mt-8 md:mt-[40px] gap-4 sm:gap-[20px] items-center md:items-start"
              animate={{
                opacity: heroInView ? 1 : 0,
                y: heroInView ? 0 : 50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <Link
                href="https://www.linkedin.com/in/levan-didebashvili-480837387/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00494B] text-black font-semibold shadow-md active:scale-95 transition text-sm sm:text-base"
              >
                CONTACT ME 🙉
              </Link>

              <Link
                href="https://github.com/lekoooooo"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-[#2c2c2c] shadow-md active:scale-95 transition"
              >
                <Image
                  src="/images/lilhub.svg"
                  width={20}
                  height={20}
                  alt="Github"
                  className="sm:w-6 sm:h-6"
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            animate={{
              opacity: heroInView ? 1 : 0,
              scale: heroInView ? 1 : 0.85,
            }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8 md:mt-0"
          >
            <Image
              src="/images/leko.jpg"
              width={460}
              height={460}
              alt="Leko"
              className="rounded-lg w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[460px] xl:h-[460px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="mt-8">
          <Projects />

          <div className="flex justify-center md:justify-end mt-6">
            <Link
              href="/work"
              className="inline-flex gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition text-sm sm:text-base"
            >
              Click for more repositories →
            </Link>
          </div>
        </div>
      </section>

      <AboutComponent showMoreLink={true} />
    </div>
  );
}
