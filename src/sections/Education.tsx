"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="w-full max-w-[1200px] scroll-mt-24 px-5 pt-16 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-3 w-0.5 -translate-x-1/2 bg-border/50 md:left-[3.75rem]"
        />

        <StaggerChildren className="space-y-12">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <StaggerItem
              key={idx}
              className="relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-4 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-12"
            >
              <div className="relative z-10 flex justify-center">
                <div className="hidden h-11 w-12 items-center justify-center rounded-full border-[3px] border-accent bg-card text-accent shadow-[0_0_20px_rgba(139,92,246,0.3)] md:flex">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="mt-2 h-6 w-6 rounded-full border-[3px] border-accent bg-card md:hidden" />
              </div>
              
              <div className="rounded-2xl border border-border/50 bg-card/40 p-5 shadow-lg backdrop-blur-md transition-colors hover:border-accent/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-medium text-base mt-1">{edu.university}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:min-w-36 md:items-center">
                    <span className="text-sm font-medium text-muted-foreground px-3 py-1.5 rounded-full bg-secondary w-fit">
                      {edu.duration}
                    </span>
                    <span className="text-sm font-medium text-foreground md:text-center">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
                
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
