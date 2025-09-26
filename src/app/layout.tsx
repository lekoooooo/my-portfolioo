import Navbar from "./components/Navbar";
import "@/app/globals.css";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";

// import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1b1b1b] max-w-[1920px]">
        <Navbar />

        <main className=" px-4 sm:px-8 md:px-16">{children}</main>
        <ProjectCard />
        <About />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
