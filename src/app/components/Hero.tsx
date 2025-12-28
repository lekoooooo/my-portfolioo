"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <section className="py-20">
        <div>
          <h2 className="text-[#FFFFFF] font-bigShot text-[65px]">
            Hi, I am Leko bebei.
          </h2>
          <p className="text-[#C7C7C7] font-bigShot w-[490px] text-[20px]">
            From Tbilisi, Georgia. Front end developer, passionate about
            building accessible and user-friendly websites.
          </p>
        </div>

        <div className="flex mt-[40px] gap-[20px]">
          <Link
            href="/about"
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
              src="/images/svg/lilhub.svg"
              width={24}
              height={24}
              alt="Github"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
