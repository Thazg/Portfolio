"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Check, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const visibleProjects = PORTFOLIO_DATA.projects.filter((project) => !project.hidden);

  return (
    <section id="projects" className="w-full max-w-[1200px] scroll-mt-24 px-5 pt-16 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const hasLinks = Boolean(project.github || project.demo);

          return (
            <StaggerItem key={project.title} className="group flex min-w-0">
              <Card className="flex h-full min-w-0 w-full flex-col overflow-hidden border-border/60 bg-card/35 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_-28px_rgba(59,130,246,0.55)]">
                <div className="relative h-48 w-full overflow-hidden border-b border-border/50 bg-background/70 md:h-56">
                  {project.image && project.imageAlt ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                      className={`${project.imageClassName ?? "object-cover"} transition-transform duration-500 group-hover:scale-[1.02]`}
                    />
                  ) : null}
                </div>

                <CardHeader className="pt-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                    {project.version && (
                      <Badge variant="outline" className="shrink-0 border-primary/30 text-primary">
                        {project.version}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-grow flex-col gap-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <dl className="grid grid-cols-3 gap-x-3 gap-y-4 rounded-lg bg-background/55 p-3.5">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="flex min-w-0 flex-col">
                          <dt className="order-2 mt-1 text-[13px] font-semibold text-foreground/90">
                            {metric.label}
                          </dt>
                          <dd className={`order-1 font-heading font-semibold tracking-tight text-foreground tabular-nums ${metric.value.length > 10 ? "text-base leading-tight sm:text-lg" : "text-xl sm:text-2xl"}`}>
                            {metric.value}
                          </dd>
                          <dd className="order-3 mt-1 text-[13px] leading-relaxed text-muted-foreground">
                            {metric.context}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {project.note && (
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {project.note}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/60 px-2.5 py-1 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {hasLinks && (
                  <CardFooter
                    className={`grid gap-3 border-t border-border/50 pb-5 pt-4 ${
                      project.github && project.demo ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {project.github && (
                      <Button variant="outline" size="lg" className="min-w-0 w-full rounded-lg" asChild>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <FaGithub className="w-4 h-4 mr-2" /> Source Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="lg" className="min-w-0 w-full rounded-lg bg-foreground text-background hover:bg-foreground/90" asChild>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {project.demoLabel ?? "Live Demo"}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </section>
  );
}
