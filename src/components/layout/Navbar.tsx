"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full transition-all duration-300",
          scrolled ? "py-2.5" : "py-6"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between w-full max-w-[1200px] px-5 py-2.5 transition-all duration-300 rounded-full",
            scrolled
              ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/10 mx-4 md:mx-6"
              : "bg-transparent border-transparent mx-4 md:mx-6"
          )}
        >
          <NextLink
            href="/"
            className="text-lg sm:text-xl font-bold font-heading text-primary tracking-tight"
            onClick={closeMobileMenu}
          >
            Nguyễn Tâm Thắng
          </NextLink>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NextLink
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </NextLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-secondary/80 hover:text-foreground transition-colors" asChild>
              <NextLink href="https://github.com/Thazg" target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </NextLink>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-secondary/80 hover:text-foreground transition-colors" asChild>
              <NextLink href="https://www.linkedin.com/in/thangnguyen0512/" target="_blank" rel="noreferrer">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </NextLink>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={mobileMenuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            className="lg:hidden rounded-full w-10 h-10 hover:bg-secondary/80 hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile navigation menu"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />

            <motion.nav
              id="mobile-navigation-menu"
              aria-label="Mobile navigation"
              className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-3xl border border-border/60 bg-background/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="grid gap-1.5">
                {NAV_LINKS.map((link) => (
                  <NextLink
                    key={link.name}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </NextLink>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
