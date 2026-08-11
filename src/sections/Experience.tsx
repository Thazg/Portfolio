"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Work Experience
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <div className="relative border-l-2 border-border/50 ml-4 md:ml-8 space-y-6">
        <StaggerChildren>
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <StaggerItem key={idx} className="relative pl-10 md:pl-0">
              <div className="hidden md:flex absolute -left-[53px] w-10 h-10 bg-card rounded-full border-[3px] border-primary items-center justify-center text-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="md:hidden absolute -left-[13px] top-2 w-6 h-6 bg-card rounded-full border-[3px] border-primary" />
              
              <div className="md:ml-16 p-4 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-3">
                  <div>
                    <h3 className="text-base md:text-lg font-bold font-heading text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium text-sm md:text-base mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full bg-secondary w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="space-y-2 mt-3 text-muted-foreground text-sm md:text-base">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex gap-3">
                      <span className="text-primary mt-1 text-base">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
