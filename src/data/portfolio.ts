import {
  Database,
  LineChart,
  Settings,
  Terminal,
} from "lucide-react";

export const PORTFOLIO_DATA = {
  name: "Nguyễn Tâm Thắng",
  role: "Computer Science Student · AI Systems Developer",
  headline: "RAG Systems | Full-Stack AI Engineering | Software Development",
  intro:
    "I build complete AI products—from retrieval and evaluation pipelines to streaming APIs and responsive web interfaces. My current focus is making RAG systems grounded, measurable, and useful in production.",
  about: {
    bio: "I am a Computer Science student at Ho Chi Minh City University of Technology (HCMUT - VNU-HCM), focused on building reliable AI-powered software. I work across retrieval systems, backend APIs, frontend product engineering, testing, and deployment.",
    secondary:
      "My main project, Nova RAG, turns private documents into citation-backed answers through hybrid retrieval and streamed generation. I use projects like this to learn the full engineering lifecycle instead of stopping at a model demo.",
    focus: [
      "Building and evaluating retrieval-augmented generation systems",
      "Connecting Python AI services with production web interfaces",
      "Writing tests, benchmarks, and deployment tooling alongside features",
    ],
  },
  skills: [
    {
      category: "Retrieval & AI",
      icon: LineChart,
      items: ["RAG", "BM25", "FAISS", "Hybrid Search", "RRF", "Retrieval Evaluation", "Groq", "Ollama"],
    },
    {
      category: "Backend",
      icon: Terminal,
      items: ["Python", "FastAPI", "Pydantic", "REST APIs", "Server-Sent Events", "Authentication"],
    },
    {
      category: "Frontend",
      icon: Database,
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
    },
    {
      category: "Quality & Delivery",
      icon: Settings,
      items: ["Pytest", "Playwright", "GitHub Actions", "Docker", "Vercel", "Render"],
    },
  ],
  projects: [
    {
      title: "Nova RAG Workspace",
      description:
        "A full-stack workspace for asking grounded questions about private documents, with account-isolated indexes, hybrid retrieval, source citations, and streamed responses.",
      image: "/nova-rag.png",
      imageAlt: "Nova RAG layered product mark",
      imageClassName: "object-contain p-10 md:p-12",
      tech: ["React 19", "FastAPI", "BM25 + FAISS", "SSE", "Docker"],
      highlights: [
        "Hybrid BM25 and FAISS retrieval with reciprocal-rank fusion",
        "Citation-backed token streaming with cancellation and regeneration",
        "Retrieval benchmarks, backend tests, CI, and Playwright E2E coverage",
      ],
      github: "https://github.com/Thazg/NovaRAGChatBot",
      demo: "https://novachatbot.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio built to present engineering work clearly, with accessible navigation, purposeful motion, optimized media, and a validated contact workflow.",
      image: "/portfolio.png",
      imageAlt: "Nguyễn Tâm Thắng portfolio home page",
      imageClassName: "object-cover object-top",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Responsive single-page information architecture",
        "Keyboard focus states and reduced-motion support",
        "Server-backed contact form with structured validation",
      ],
      demo: "https://nguyentamthang.vercel.app/",
    },
  ],
  education: [
    {
      university: "Ho Chi Minh City University of Technology (HCMUT - VNU-HCM)",
      degree: "B.S. in Computer Science",
      duration: "2025 - 2029",
      gpa: "4.0 / 4.0",
    },
  ],
  socials: {
    github: "https://github.com/Thazg",
    linkedin: "https://www.linkedin.com/in/thangnguyen0512/",
    facebook: "https://www.facebook.com/ntt0512/",
  },
};
