import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  variable: "--font-sans",
  weight: "variable",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nguyentamthang.vercel.app"),
  title: "Nguyen Tam Thang | AI Systems Developer",
  description: "Computer Science student at HCMUT building full-stack AI systems, including retrieval-augmented generation, streaming APIs, evaluation pipelines, and responsive web products.",
  applicationName: "Nguyen Tam Thang Portfolio",
  authors: [{ name: "Nguyen Tam Thang" }],
  creator: "Nguyen Tam Thang",
  publisher: "Nguyen Tam Thang",
  keywords: ["AI Systems Developer", "RAG", "FastAPI", "React", "Next.js", "Computer Science", "HCMUT", "Nguyen Tam Thang"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nguyen Tam Thang | AI Systems Developer",
    description: "Full-stack AI systems, retrieval engineering, evaluation, and production-minded software development.",
    type: "website",
    url: "/",
    siteName: "Nguyen Tam Thang Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1250,
        height: 712,
        alt: "Nguyen Tam Thang portfolio home page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Tam Thang | AI Systems Developer",
    description: "Full-stack AI systems, retrieval engineering, evaluation, and production-minded software development.",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${nunito.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
