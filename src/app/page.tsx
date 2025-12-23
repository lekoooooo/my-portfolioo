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

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div>
      <section ref={heroRef} className="py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div>
            <motion.h2
              className="text-[#FFFFFF] font-bigShot text-[65px]"
              animate={{
                opacity: heroInView ? 1 : 0,
                y: heroInView ? 0 : -50,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I am Leko bebei.
            </motion.h2>

            <motion.p
              className="text-[#C7C7C7] font-bigShot w-[490px] text-[20px]"
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
              className="flex mt-[40px] gap-[20px]"
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
                href="mailto:levdidebashvili@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6896f8] text-black font-semibold shadow-md active:scale-95 transition"
              >
                CONTACT ME
                <span className="w-2 h-2 rounded-full bg-black" />
              </Link>

              <Link
                href="https://github.com/lekoooooo"
                target="_blank"
                className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#2c2c2c] shadow-md active:scale-95 transition"
              >
                <Image
                  src="/images/lilhub.svg"
                  width={24}
                  height={24}
                  alt="Github"
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
          >
            <Image
              src="/images/leko.jpg"
              width={460}
              height={460}
              alt="Leko"
              className="rounded-lg w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px]"
            />
          </motion.div>
        </div>
      </section>

      <section>
        <motion.div
          ref={projectsRef}
          className="mt-8"
          initial={{ opacity: 0, x: -120 }}
          animate={projectsInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Projects />

          <div className="flex justify-end mt-6">
            <Link
              href="/work"
              className="inline-flex gap-2 px-6 py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition"
            >
              Click for more repositories →
            </Link>
          </div>
        </motion.div>
      </section>

      <AboutComponent />
    </div>
  );
}
