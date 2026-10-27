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
            Tools and methods implemented or evaluated in the featured projects, from retrieval and recommendation to data, APIs, and delivery.
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
                className="@container rounded-2xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-primary/50 sm:p-5"
              >
                <div className="flex min-w-0 flex-col gap-5 @sm:flex-row @sm:items-center">
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Award className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="break-words text-sm font-medium leading-snug text-muted-foreground">
                        {certificate.category}
                      </p>
                      <h4 className="mt-1 break-words font-heading text-lg font-bold text-foreground">
                        {certificate.name}
                      </h4>
                    </div>
                  </div>

                  <dl className="grid min-w-0 grid-cols-2 gap-4 text-center @sm:shrink-0 @sm:gap-6">
                    <div className="flex flex-col">
                      <dt className="order-2 mt-1 text-sm text-muted-foreground">Overall</dt>
                      <dd className="order-1 font-heading text-2xl font-bold text-primary">
                        {certificate.score}
                      </dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="order-2 mt-1 text-sm text-muted-foreground">CEFR</dt>
                      <dd className="order-1 font-heading text-2xl font-bold text-foreground">
                        {certificate.level.replace("CEFR ", "")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
