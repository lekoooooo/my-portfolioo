import Link from "next/link";

export default function About() {
  return (
    <section className="px-8 md:px-16 lg:px-32 py-20 text-white">
      <h1 className="text-[48px] font-bold mb-8">ABOUT ME</h1>
      <div className="max-w-3xl">
        <h2 className="text-[28px] font-semibold leading-snug mb-4">
          I am a front-end developer based in Tbilisi, With all the skills to
          help you make your website better.
        </h2>
        <p className="text-[#C7C7C7] mb-6">
          I am a front-end developer based in Tbilisi looking for exciting
          opportunities. Likes to focus on accessibility when developing.
          Passionate and curious about solving problems. Currently, I’m
          exploring React.js, Next.js and a bit of node.js, express . . . While
          I am not programming, I enjoy playing basketball, music and driving.
          Always learning more to improve my skills.
        </p>
        <Link
          href="/about"
          className="text-[#C6F368] font-semibold hover:underline"
        >
          MORE ABOUT ME
        </Link>
      </div>
    </section>
  );
}
