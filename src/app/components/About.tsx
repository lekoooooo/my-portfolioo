// // "use client";
// // import Link from "next/link";
// // import { motion, useInView } from "framer-motion";
// // import { useRef } from "react";

// // type AboutProps = {
// //   showMoreLink?: boolean; // default: false
// // };

// // export default function About({ showMoreLink = false }: AboutProps) {
// //   const ref = useRef<HTMLDivElement | null>(null);
// //   const isInView = useInView(ref, { once: false });

// //   return (
// //     <section ref={ref} className="px-8 md:px-16 lg:px-32 py-20 text-white">
// //       <motion.h1
// //         className="text-[48px] font-bold mb-8"
// //         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
// //         transition={{ duration: 0.8, ease: "easeOut" }}
// //       >
// //         ABOUT ME
// //       </motion.h1>

// //       <motion.div
// //         className="max-w-3xl"
// //         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
// //         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
// //       >
// //         <motion.h2
// //           className="text-[28px] font-semibold leading-snug mb-4"
// //           animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
// //           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
// //         >
// //           I am a front-end developer based in Tbilisi, with all the skills to
// //           help you make your website better.
// //         </motion.h2>

// //         <motion.p
// //           className="text-[#C7C7C7] mb-6"
// //           animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
// //           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
// //         >
// //           I am a front-end developer based in Tbilisi looking for exciting
// //           opportunities. Likes to focus on accessibility when developing.
// //           Passionate and curious about solving problems. Currently, I’m
// //           exploring React.js, Next.js and a bit of Node.js and Express. While I
// //           am not programming, I enjoy playing basketball, music and driving.
// //           Always learning more to improve my skills.
// //         </motion.p>

// //         {/* 🔗 Show link only if showMoreLink is true */}
// //         {showMoreLink && (
// //           <motion.div
// //             className="mt-8"
// //             animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
// //             transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
// //           >
// //             <Link
// //               href="/about"
// //               className="inline-flex items-center gap-2 px-6 py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition"
// //             >
// //               Click for more info →
// //             </Link>
// //           </motion.div>
// //         )}
// //       </motion.div>
// //     </section>
// //   );
// // }
// "use client";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// type AboutProps = {
//   showMoreLink?: boolean; // optional boolean
// };

// export default function About({ showMoreLink = false }: AboutProps) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: false });

//   return (
//     <section ref={ref} className="px-8 md:px-16 lg:px-32 py-20 text-white">
//       <motion.h1
//         className="text-[48px] font-bold mb-8"
//         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         ABOUT ME
//       </motion.h1>

//       <motion.div
//         className="max-w-3xl"
//         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//       >
//         <motion.h2
//           className="text-[28px] font-semibold leading-snug mb-4"
//           animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           I am a front-end developer based in Tbilisi, with all the skills to
//           help you make your website better.
//         </motion.h2>

//         <motion.p
//           className="text-[#C7C7C7] mb-6"
//           animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         >
//           I am a front-end developer based in Tbilisi looking for exciting
//           opportunities. Likes to focus on accessibility when developing.
//           Passionate and curious about solving problems. Currently, I’m
//           exploring React.js, Next.js and a bit of Node.js and Express. While I
//           am not programming, I enjoy playing basketball, music and driving.
//           Always learning more to improve my skills.
//         </motion.p>

//         {/* Show "Click for more info" only if showMoreLink is true */}
//         {showMoreLink && (
//           <motion.div
//             className="mt-8"
//             animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
//             transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
//           >
//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition"
//             >
//               Click for more info →
//             </Link>
//           </motion.div>
//         )}
//       </motion.div>
//     </section>
//   );
// }

////////////////////////

// "use client";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// type AboutProps = {
//   showMoreLink?: boolean; // optional boolean
// };

// export default function About({ showMoreLink = false }: AboutProps) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: false });

//   return (
//     <section ref={ref} className="px-8 md:px-16 lg:px-32 py-20 text-white">
//       <motion.h1
//         className="text-[48px] font-bold mb-8"
//         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         ABOUT ME
//       </motion.h1>

//       <motion.div
//         className="max-w-3xl"
//         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//       >
//         <motion.h2
//           className="text-[28px] font-semibold leading-snug mb-4"
//           animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           I am a front-end developer based in Tbilisi, with all the skills to
//           help you make your website better.
//         </motion.h2>

//         <motion.p
//           className="text-[#C7C7C7] mb-6"
//           animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         >
//           I am a front-end developer based in Tbilisi looking for exciting
//           opportunities. Likes to focus on accessibility when developing.
//           Passionate and curious about solving problems. Currently, I’m
//           exploring React.js, Next.js and a bit of Node.js and Express. While I
//           am not programming, I enjoy playing basketball, music and driving.
//           Always learning more to improve my skills.
//         </motion.p>

//         {/* Show "Click for more info" only if showMoreLink is true */}
//         {showMoreLink && (
//           <motion.div
//             className="mt-8"
//             animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
//             transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
//           >
//             <Link
//               href="/about"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition"
//             >
//               Click for more info →
//             </Link>
//           </motion.div>
//         )}
//         <About showMoreLink={false} />
//       </motion.div>
//     </section>
//   );
// }

////////////////////////////////////

// components/About.tsx
// components/About.tsx
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
          I am a front-end developer based in Tbilisi, with all the skills to
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
          exploring React.js, Next.js and a bit of Node.js and Express. While I
          am not programming, I enjoy playing basketball, music and driving.
          Always learning more to improve my skills.
        </motion.p>

        {showMoreLink && (
          <motion.div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6896f8] text-black font-medium rounded-full shadow-md hover:scale-105 transition"
            >
              Click for more info →
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
