"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 w-full max-w-[1200px] px-5 md:px-12">
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
              <div className="hidden md:flex absolute -left-[57px] w-12 h-11 bg-card rounded-full border-[3px] border-accent items-center justify-center text-accent shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="md:hidden absolute -left-[13px] top-2 w-6 h-6 bg-card rounded-full border-[3px] border-accent" />
              
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
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <h4 className="text-base font-medium text-foreground mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
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
