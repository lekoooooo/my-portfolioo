import "@/app/globals.css";
import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#1b1b1b] via-[#2a2a2a] to-[#3a3a3a] max-w-[1920px]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
