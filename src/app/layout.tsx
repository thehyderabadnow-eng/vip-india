import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Volunteers for Ideal Politics (VIP)",
  description: "Bridging the Gap Between Public Problems and Policy Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-vip-light">
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        {/* Simple Footer for now */}
        <footer className="bg-vip-blue text-white py-6 text-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Volunteers for Ideal Politics. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}