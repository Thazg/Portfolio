"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Terminal, Cpu, Network } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-24 w-full max-w-[1400px] px-6 md:px-12 relative overflow-hidden">
      {/* Softer, more elegant ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#60A5FA]/[0.03] rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 translate-y-1/4 w-[400px] h-[400px] bg-[#7C3AED]/[0.03] rounded-full blur-[100px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:col-span-7 z-10 space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/60 border border-white/5 text-sm font-semibold text-[#60A5FA] w-fit backdrop-blur-md">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
            </span>
            {PORTFOLIO_DATA.headline}
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-wide">
              Hi, I&apos;m
            </span>
            <h1 className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-bold font-heading leading-[1.05] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#7C3AED]">
                {PORTFOLIO_DATA.name}
              </span>
            </h1>
          </div>
          
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl text-foreground/90 font-semibold tracking-tight">
              {PORTFOLIO_DATA.role}
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium">
              {PORTFOLIO_DATA.intro}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Button size="lg" className="rounded-xl h-16 px-10 text-xl font-semibold shadow-lg hover:shadow-[#60A5FA]/20 transition-all hover:-translate-y-1 bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl h-16 px-10 text-xl font-semibold border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1" asChild>
              <a href="#contact">
                <Mail className="mr-3 w-6 h-6" /> Contact Me
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
          {/* Professional Glassmorphism AI Visualization */}
          <div className="relative w-full max-w-[450px] aspect-square">
            {/* Extremely soft backdrop glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#60A5FA]/5 to-[#7C3AED]/5 animate-pulse blur-3xl" />
            
            <div className="absolute inset-0 rounded-[2.5rem] bg-card/20 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col p-8 overflow-hidden">
              
              {/* Decorative neural connections */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-[#60A5FA] animate-pulse" />
                <path d="M20,80 Q50,40 80,80" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-[#7C3AED]" />
              </svg>

              <div className="flex justify-between items-start mb-auto z-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  <Cpu className="w-8 h-8 text-[#60A5FA]" />
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-[#60A5FA]" />
                  <div className="w-3 h-3 rounded-full bg-[#7C3AED]" />
                </div>
              </div>

              <div className="z-10 text-center space-y-4 my-auto">
                <div className="inline-flex p-5 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-md mb-4">
                  <Network className="w-16 h-16 text-[#7C3AED]" />
                </div>
                <h3 className="text-3xl font-bold text-foreground tracking-tight">NTT_Core</h3>
                <p className="text-lg text-muted-foreground font-mono bg-black/20 py-2 px-4 rounded-lg inline-block border border-white/5">
                  Status: Optimizing...
                </p>
              </div>

              <div className="mt-auto flex justify-between items-end z-10 border-t border-white/10 pt-6">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Architecture</div>
                  <div className="font-mono text-foreground font-semibold">Transformer-XL</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-sm text-muted-foreground">Latency</div>
                  <div className="font-mono text-green-400 font-semibold">12ms</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
