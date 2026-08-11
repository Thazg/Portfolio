"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <StaggerItem key={idx} className="group flex">
            <Card className="flex flex-col h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] overflow-hidden">
              <div className="relative w-full h-40 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <CardHeader className="pt-5">
                <CardTitle className="font-heading text-base md:text-lg">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col gap-3.5">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="bg-secondary/60 text-xs px-2.5 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 pb-5 border-t border-border/50">
                {project.github && (
                  <Button variant="outline" size="lg" className="w-full rounded-lg" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub className="w-4 h-4 mr-2" /> Source Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
