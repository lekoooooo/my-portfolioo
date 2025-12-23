"use client";

import { useEffect, useState } from "react";
import PageLoader from "./PageLoader/PageLoader";

import Navbar from "./components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); //

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      {!loading && (
        <>
          <Navbar />
          <main className="px-4 sm:px-8 md:px-16">{children}</main>
        </>
      )}
    </>
  );
}
