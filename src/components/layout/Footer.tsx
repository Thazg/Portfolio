import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card/50 py-8 mt-10">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold font-heading text-primary">
            NTT.
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={PORTFOLIO_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={PORTFOLIO_DATA.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <FaFacebook className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
