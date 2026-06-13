"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full max-w-[1400px] px-6 md:px-12">
      <Reveal>
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive list of the technologies, languages, and tools I use to bring ideas to life.
          </p>
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
          const Icon = skillGroup.icon;
          return (
            <StaggerItem key={idx}>
              <Card className="h-full bg-card/40 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-4 text-2xl font-heading">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-base font-medium shadow-sm"
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
