"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/animations/Reveal";

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1200px] scroll-mt-24 px-5 pt-16 md:px-12">
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
          <div className="max-w-[62ch] space-y-5 text-left text-base leading-7 text-muted-foreground">
            <p>{PORTFOLIO_DATA.about.bio}</p>
            <p>{PORTFOLIO_DATA.about.secondary}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} width="100%">
          <div className="rounded-2xl bg-card/50 p-5 text-left md:p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Current Focus
            </h3>
            <ul className="mt-5 space-y-5">
              {PORTFOLIO_DATA.about.focus.map((item) => (
                <li key={item.title} className="space-y-1.5">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="max-w-[54ch] text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
