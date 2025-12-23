"use client";

import { useEffect, useState } from "react";
import PageLoader from "./PageLoader/pageLoader";

import Navbar from "./components/Navbar";
import About from "./components/About";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Run AFTER hydration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // ⬅️ adjust (400–800ms recommended)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      {!loading && (
        <>
          <Navbar />
          <main className="px-4 sm:px-8 md:px-16">{children}</main>
          <About />
        </>
      )}
    </>
  );
}
