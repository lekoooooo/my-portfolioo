"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-32 py-20 text-white">
      <motion.h1
        className="text-[48px] font-bold mb-8"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ABOUT ME
      </motion.h1>
      <motion.div
        className="max-w-3xl"
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-[28px] font-semibold leading-snug mb-4"
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          I am a front-end developer based in Tbilisi, With all the skills to
          help you make your website better.
        </motion.h2>
        <motion.p
          className="text-[#C7C7C7] mb-6"
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          I am a front-end developer based in Tbilisi looking for exciting
          opportunities. Likes to focus on accessibility when developing.
          Passionate and curious about solving problems. Currently, I’m
          exploring React.js, Next.js and a bit of node.js, express . . . While
          I am not programming, I enjoy playing basketball, music and driving.
          Always learning more to improve my skills.
        </motion.p>
        <motion.div
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/about"
            className="text-[#C6F368] font-semibold hover:underline"
          >
            MORE ABOUT ME
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
