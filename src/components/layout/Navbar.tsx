"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full transition-all duration-300",
        scrolled ? "py-5" : "py-10"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-[1400px] px-10 py-5 transition-all duration-300 rounded-full",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/10 mx-6"
            : "bg-transparent border-transparent"
        )}
      >
        <NextLink href="/" className="text-3xl font-bold font-heading text-primary tracking-tight">
          NTT.
        </NextLink>

        <nav className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <NextLink
              key={link.name}
              href={link.href}
              className="text-lg font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <NextLink href="https://github.com" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full w-14 h-14 hover:bg-secondary/80 hover:text-foreground transition-colors">
              <FaGithub className="w-7 h-7" />
              <span className="sr-only">GitHub</span>
            </Button>
          </NextLink>
          <NextLink href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full w-14 h-14 hover:bg-secondary/80 hover:text-foreground transition-colors">
              <FaLinkedin className="w-7 h-7" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </NextLink>
        </div>
      </div>
    </motion.header>
  );
}
