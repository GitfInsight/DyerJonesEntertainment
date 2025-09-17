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
  title: "ConTempo Studios - Interdisciplinary Arts Organization",
  description: "ConTempo Studios is an interdisciplinary arts organization focused on creating accessible and live performance art in Houston.",
  keywords: "arts, performance, theater, Houston, interdisciplinary, live performance, non-profit",
  authors: [{ name: "ConTempo Studios" }],
  openGraph: {
    title: "ConTempo Studios",
    description: "Interdisciplinary. Accessible. Live Performances.",
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
