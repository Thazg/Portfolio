"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <div className="relative border-l-2 border-border/50 ml-4 md:ml-8 space-y-12">
        <StaggerChildren>
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <StaggerItem key={idx} className="relative pl-10 md:pl-0">
              <div className="absolute -left-[57px] top-3 hidden h-11 w-12 items-center justify-center rounded-full border-[3px] border-accent bg-card text-accent shadow-[0_0_20px_rgba(139,92,246,0.3)] md:flex">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="absolute -left-[13px] top-5 h-6 w-6 rounded-full border-[3px] border-accent bg-card md:hidden" />
              
              <div className="md:ml-16 p-5 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-accent/50 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-medium text-base mt-1">{edu.university}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-sm font-medium text-muted-foreground px-3 py-1.5 rounded-full bg-secondary w-fit">
                      {edu.duration}
                    </span>
                    <span className="text-sm font-medium text-foreground">
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
