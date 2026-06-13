"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-14 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <Reveal>
          <div className="text-base md:text-base text-muted-foreground leading-relaxed space-y-5 font-medium">
            <p>{PORTFOLIO_DATA.about.bio}</p>
            <p>
              My goal is to build software that not only solves real-world problems but also provides intuitive and engaging user experiences. I am constantly learning and adapting to new technologies to stay at the forefront of the industry.
            </p>
          </div>
        </Reveal>

        <StaggerChildren className="grid grid-cols-2 gap-5">
          {PORTFOLIO_DATA.about.stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <Card className="bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 hover:bg-secondary/20 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                  <span className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
