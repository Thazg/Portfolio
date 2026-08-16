"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex w-full max-w-[1100px] scroll-mt-24 items-center justify-center overflow-hidden px-5 pb-0 pt-28 md:px-8 md:pt-32">
      {/* Keep the ambient light on the copy side so the portrait edge stays clean. */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#60A5FA]/[0.03] rounded-full blur-[100px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:col-span-7 z-10 space-y-5"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/60 border border-white/5 text-xs font-semibold text-[#60A5FA] w-fit backdrop-blur-md">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
            </span>
            {PORTFOLIO_DATA.headline}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
              Hi, I&apos;m
            </span>
            <h1 className="text-4xl md:text-[4.5rem] lg:text-[5.5rem] font-bold font-heading leading-[1.05] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#7C3AED]">
                {PORTFOLIO_DATA.name}
              </span>
            </h1>
          </div>

          <div className="space-y-3">
            <p className="text-xl lg:text-2xl text-foreground/90 font-semibold tracking-tight">
              {PORTFOLIO_DATA.role}
            </p>

            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl leading-relaxed font-medium">
              {PORTFOLIO_DATA.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="rounded-xl h-11 px-5 text-base font-semibold shadow-lg hover:shadow-[#60A5FA]/20 transition-all hover:-translate-y-1 bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl h-11 px-5 text-base font-semibold border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1" asChild>
              <a href="#contact">
                <Mail className="mr-2 w-4 h-4" /> Contact Me
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end lg:col-span-5"
        >
          {/* Personal Image */}
          <div className="relative w-full max-w-[350px] aspect-square">
            <div className="absolute inset-0 rounded-[2rem] bg-card/40 border border-white/10 shadow-2xl overflow-hidden p-2">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gradient-to-tr from-white/5 to-white/10">
                <Image
                  src="/profile.png"
                  alt="Nguyen Tam Thang"
                  fill
                  sizes="(max-width: 1024px) 350px, 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
