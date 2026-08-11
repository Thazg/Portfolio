"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <section id="skills" className="py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-5" />
          <p className="text-base text-muted-foreground max-w-3xl">
            A comprehensive list of the technologies, languages, and tools I use to bring ideas to life.
          </p>
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
          const Icon = skillGroup.icon;
          return (
            <StaggerItem key={idx}>
              <Card className="h-full bg-card/40 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2.5 text-base font-heading">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </section>
  );
}
