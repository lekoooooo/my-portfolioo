import Navbar from "./components/Navbar";
import "@/app/globals.css";

// import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-screen px-4 sm:px-8 md:px-16">{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
