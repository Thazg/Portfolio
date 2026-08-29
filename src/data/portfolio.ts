import {
  Database,
  LineChart,
  Settings,
  Terminal,
} from "lucide-react";

export type PortfolioProject = {
  title: string;
  version?: string;
  hidden?: boolean;
  description: string;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
};

export const PORTFOLIO_DATA = {
  name: "Nguyen Tam Thang",
  role: "Computer Science Student",
  headline: "AI Engineering | Machine Learning | RAG Systems",
  intro:
    "I build practical AI systems with a focus on retrieval, evaluation, and reliable deployment. I enjoy experimenting with different approaches, measuring what works, and turning those experiments into usable applications.",
  about: {
    bio: "I am a Computer Science student at Ho Chi Minh City University of Technology (HCMUT - VNU-HCM), focused on building reliable AI-powered software. I work across retrieval systems, backend APIs, frontend product engineering, testing, and deployment.",
    secondary:
      "Through the Enterprise Knowledge Intelligence Platform and other applied projects, I build citation-backed systems with hybrid retrieval, evaluation, and production deployment. I use each project to learn the full engineering lifecycle instead of stopping at a model demo.",
    focus: [
      "Building knowledge systems with grounded retrieval and cited generation",
      "Benchmarking retrieval quality to make measurable engineering decisions",
      "Shipping reliable AI products with robust APIs, observability, testing, and deployment",
    ],
  },
  skills: [
    {
      category: "Retrieval & AI",
      icon: LineChart,
      items: ["RAG", "BGE", "BM25", "Hybrid Search", "Weighted RRF", "Qdrant", "FastEmbed", "Reranking", "Multi-Query", "Retrieval Evaluation", "Groq"],
    },
    {
      category: "Backend",
      icon: Terminal,
      items: ["Python", "FastAPI", "Pydantic", "REST APIs", "Request Validation", "API Observability"],
    },
    {
      category: "Frontend",
      icon: Database,
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Quality & Delivery",
      icon: Settings,
      items: ["Pytest", "Playwright", "GitHub Actions", "Docker", "Prometheus", "Vercel", "Render"],
    },
  ],
  certificates: [
    {
      name: "IELTS",
      score: "6.5",
      level: "CEFR B2",
      category: "English proficiency",
    },
  ],
  projects: [
    {
      title: "Enterprise Knowledge Intelligence Platform",
      version: "v1.0.0",
      description:
        "An end-to-end knowledge platform that turns private documents into grounded, citation-backed answers through production-ready ingestion, retrieval, evaluation, and generation pipelines.",
      image: "/knowledge-intelligence-platform-art.png",
      imageAlt: "Editorial illustration of documents flowing through a retrieval index into a cited answer",
      imageClassName: "object-cover",
      tech: ["Python", "FastAPI", "Qdrant", "Docker", "RAG"],
      highlights: [
        "Selected Weighted RRF after benchmarking five retrieval strategies on 100 queries, reaching 0.7247 MRR and 0.9300 Hit@10",
        "Achieved exact top-10 ranking parity on 100/100 queries between custom BM25-compatible sparse vectors in Qdrant Cloud and the local rank_bm25 implementation",
        "Added validation, readiness checks, timeouts, admission control, request IDs, Prometheus metrics, CI, and regression tests",
        "Deployed with Render, Qdrant Cloud, and Groq in a 130.5 MB Docker image within a 512 MiB memory budget",
      ],
      github: "https://github.com/Thazg/knowledge-intelligence-platform",
      demo: "https://enterprise-kip-api.onrender.com/docs",
      demoLabel: "API Docs",
    },
    {
      title: "Nova RAG Workspace",
      hidden: true,
      description:
        "A full-stack workspace for asking grounded questions about private documents, with account-isolated indexes, hybrid retrieval, source citations, and streamed responses.",
      image: "/nova-rag.png",
      imageAlt: "Nova RAG layered product mark",
      imageClassName:
        "object-contain p-7 brightness-125 contrast-110 drop-shadow-[0_16px_24px_rgba(139,92,246,0.38)] md:p-9",
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
      imageAlt: "Nguyen Tam Thang portfolio home page",
      imageClassName: "object-cover object-top",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Responsive single-page information architecture",
        "Keyboard focus states and reduced-motion support",
        "Server-backed contact form with structured validation",
      ],
      github: "https://github.com/Thazg/Portfolio",
      demo: "https://nguyentamthang.vercel.app/",
    },
  ] as PortfolioProject[],
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
