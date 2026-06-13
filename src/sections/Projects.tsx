"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-32 w-full max-w-[1400px] px-6 md:px-12">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <StaggerItem key={idx} className="group flex">
            <Card className="flex flex-col h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] overflow-hidden">
              <div className="relative w-full h-72 md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <CardHeader className="pt-8">
                <CardTitle className="font-heading text-2xl md:text-3xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col gap-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="bg-secondary/60 text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-6 pb-8 border-t border-border/50 gap-4">
                {project.github && (
                  <Button variant="outline" size="lg" className="w-full rounded-xl text-base" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub className="w-5 h-5 mr-3" /> Source Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="lg" className="w-full rounded-xl text-base" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-5 h-5 mr-3" /> Live Demo
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
