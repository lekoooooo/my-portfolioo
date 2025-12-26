"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AboutProps = {
  showMoreLink?: boolean;
};

export default function AboutComponent({ showMoreLink = false }: AboutProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      ref={ref}
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 lg:py-20 text-white"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold mb-6 lg:mb-8"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ABOUT ME
      </motion.h1>

      <motion.div
        className="max-w-4xl"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl sm:text-2xl lg:text-[28px] font-semibold leading-snug mb-4"
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          I am a front-end developer based in Tbilisi, with all the skills to
          help you make your website better.
        </motion.h2>

        <motion.p
          className="text-[#C7C7C7] mb-6 text-sm sm:text-base leading-relaxed"
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          I am a front-end developer based in Tbilisi looking for exciting
          opportunities. Likes to focus on accessibility when developing.
          Passionate and curious about solving problems. Currently, I’m
          exploring React.js, Next.js and a bit of Node.js and Express. While I
          am not programming, I enjoy playing basketball, music and driving.
          Always learning more to improve my skills.
        </motion.p>

        {showMoreLink && (
          <motion.div className="mt-6 lg:mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition text-sm sm:text-base"
            >
              Click for more info →
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
