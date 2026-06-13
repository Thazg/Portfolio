"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations/Reveal";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 w-full max-w-[1200px] px-5 md:px-12">
      <Reveal>
        <div className="mb-8 flex flex-col items-center text-center">
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
