import Navbar from "./components/Navbar";
import "@/app/globals.css";

import About from "./components/About";

// import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#1b1b1b] via-[#2a2a2a] to-[#3a3a3a] max-w-[1920px]">
        <Navbar />

        <main className=" px-4 sm:px-8 md:px-16">{children}</main>

        <About />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
