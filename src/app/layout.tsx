import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Tâm Thắng | AI Engineer",
  description: "AI Engineer specializing in Machine Learning, Deep Learning, Artificial Intelligence, Software Development, and Data Science.",
  applicationName: "Nguyễn Tâm Thắng Portfolio",
  authors: [{ name: "Nguyễn Tâm Thắng" }],
  creator: "Nguyễn Tâm Thắng",
  publisher: "Nguyễn Tâm Thắng",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "Software Development", "Data Science", "Nguyễn Tâm Thắng"],
  openGraph: {
    title: "Nguyễn Tâm Thắng | AI Engineer",
    description: "AI Engineer specializing in Machine Learning, Deep Learning, Artificial Intelligence, Software Development, and Data Science.",
    type: "website",
    siteName: "Nguyễn Tâm Thắng Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Tâm Thắng | AI Engineer",
    description: "AI Engineer specializing in Machine Learning, Deep Learning, Artificial Intelligence, Software Development, and Data Science.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground min-h-screen flex flex-col`}
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
