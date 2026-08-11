"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const duration = 1200;
    const startTime = performance.now();
    let animationFrame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, reduceMotion, value]);

  return <span ref={ref}>{reduceMotion && isInView ? value : count}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Achievements
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
      </Reveal>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PORTFOLIO_DATA.achievements.map((achievement, idx) => (
          <StaggerItem key={idx}>
            <div className="p-5 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 flex flex-col items-center justify-center text-center h-full hover:border-primary/50 transition-colors group shadow-lg">
              <div className="p-4 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold font-heading text-foreground mb-2 flex items-center">
                <AnimatedCounter value={achievement.count} />+
              </div>
              <p className="text-base font-medium text-muted-foreground">
                {achievement.title}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
