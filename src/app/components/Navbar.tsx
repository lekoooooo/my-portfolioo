import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="px-6 bg-red-500">
      <div className="flex justify-between items-center py-4">
        <div>
          <Link href="/" className="text-white font-bold text-lg">
            $velvet21
          </Link>
        </div>

        <nav className="">
          <ul className="flex  list-none ">
            <li>
              <Link href="/projects" className="hover:underline ">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
