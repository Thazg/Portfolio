"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:items-start">
        <Reveal width="100%">
          <div className="text-base md:text-base text-muted-foreground leading-relaxed space-y-5 font-medium">
            <p>{PORTFOLIO_DATA.about.bio}</p>
            <p>{PORTFOLIO_DATA.about.secondary}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} width="100%">
          <div className="rounded-2xl border border-border/60 bg-card/30 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Current focus
            </p>
            <div className="mt-4">
              {PORTFOLIO_DATA.about.focus.map((item, idx) => (
                <div
                  key={item}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border/60 py-4 first:border-t-0 first:pt-1 last:pb-0"
                >
                  <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
                  <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
