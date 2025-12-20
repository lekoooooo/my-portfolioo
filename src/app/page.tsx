"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Projects from "./components/ProjectCard";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div>
      <section ref={ref} className="py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div>
            <motion.h2
              className="text-[#FFFFFF] font-bigShot text-[65px]"
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I am Leko bebei.
            </motion.h2>
            <motion.p
              className="text-[#C7C7C7] font-bigShot w-[490px] text-[20px]"
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              From Tbilisi, Georgia. Front end developer, passionate about
              building accessible and user-friendly websites.
            </motion.p>

            <motion.div
              className="flex mt-[40px] gap-[20px]"
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
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
            </motion.div>
          </div>

          <motion.div
            className="flex-shrink-0"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </section>

      <Projects />
    </div>
  );
}
