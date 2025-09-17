import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// nourd
// const nourd = Nourd({
//   variable: "--font-nourd",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dyer-Jones Entertainment - High Quality Live Performances",
  description: "Dyer-Jones Entertainment is your partner to bring high quality classicly trained musicians directly to you.",
  keywords: "arts, performance, theater, Houston, live performance, music, opera",
  authors: [{ name: "Dyer-Jones Entertainment" }],
  openGraph: {
    title: "Dyer-Jones Entertainment",
    description: "Classicly Trained Performers, Modern Entertainment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
