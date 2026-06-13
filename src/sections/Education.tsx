"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-32 w-full max-w-[1400px] px-6 md:px-12">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Education
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <div className="relative border-l-2 border-border/50 ml-4 md:ml-8 space-y-16">
        <StaggerChildren>
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <StaggerItem key={idx} className="relative pl-10 md:pl-0">
              <div className="hidden md:flex absolute -left-[61px] w-14 h-14 bg-card rounded-full border-[3px] border-accent items-center justify-center text-accent shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="md:hidden absolute -left-[13px] top-2 w-6 h-6 bg-card rounded-full border-[3px] border-accent" />
              
              <div className="md:ml-16 p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-accent/50 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-medium text-lg mt-1">{edu.university}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-base font-medium text-muted-foreground px-4 py-2 rounded-full bg-secondary w-fit">
                      {edu.duration}
                    </span>
                    <span className="text-base font-medium text-foreground">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h4 className="text-lg font-medium text-foreground mb-4">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm font-medium"
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
