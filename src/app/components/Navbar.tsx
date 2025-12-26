import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="px-4 sm:px-6">
      <div className="flex justify-between items-center py-4">
        <div>
          <Link
            href="/"
            className="text-[#C7C7C7] font-bebas hover:text-amber-50 font-bold text-2xl sm:text-3xl lg:text-[32px]"
          >
            $velvet21
          </Link>
        </div>

        <nav className="flex">
          <ul className="flex gap-4 sm:gap-6 lg:gap-[32px] list-none text-sm sm:text-base">
            <li>
              <Link href="/work" className="hover:underline text-[#C7C7C7]">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-[#C7C7C7]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-[#C7C7C7]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-[1px] border-[#c6c7c8] flex"></div>
    </header>
  );
};

export default Navbar;
