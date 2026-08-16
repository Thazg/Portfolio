"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-[1200px] scroll-mt-24 px-5 pt-16 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-5" />
          <p className="text-base text-muted-foreground max-w-3xl">
            Technologies I use in the projects shown below, grouped by the part of the system they support.
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

      <Reveal delay={0.15} width="100%">
        <div className="mt-16">
          <div className="mb-8 text-left">
            <h3 className="mb-4 w-fit bg-gradient-to-r from-primary to-accent bg-clip-text font-heading text-2xl font-bold text-transparent md:text-3xl">
              Certificates
            </h3>
            <div className="h-1.5 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {PORTFOLIO_DATA.certificates.map((certificate) => (
              <div
                key={certificate.name}
                className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-primary/50 sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {certificate.category}
                  </p>
                  <h4 className="mt-1 font-heading text-lg font-bold text-foreground">
                    {certificate.name}
                  </h4>
                </div>

                <div className="grid shrink-0 grid-cols-2 divide-x divide-border/70 text-center">
                  <div className="px-3">
                    <span className="block font-heading text-xl font-bold text-primary">
                      {certificate.score}
                    </span>
                    <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
                      Overall
                    </span>
                  </div>
                  <div className="px-3">
                    <span className="block font-heading text-base font-bold text-foreground">
                      {certificate.level.replace("CEFR ", "")}
                    </span>
                    <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
                      CEFR
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
