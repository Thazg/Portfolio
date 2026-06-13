"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview() {
  return (
    <section className="py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
              Latest Articles
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 group text-base" asChild>
            <Link href="#">
              View All Posts <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.blog.map((post, idx) => (
          <StaggerItem key={idx}>
            <Card className="flex flex-col h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group overflow-hidden shadow-lg">
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <CardHeader className="flex-grow pt-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardFooter className="pt-0 pb-6">
                <Button variant="link" className="p-0 text-primary hover:text-primary/80 text-base font-medium" asChild>
                  <Link href={post.link}>
                    Read More <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
