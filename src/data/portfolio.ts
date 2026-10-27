import {
  Database,
  LineChart,
  Settings,
  Code2,
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
  note?: string;
  metrics?: { value: string; label: string; context: string }[];
};

export const PORTFOLIO_DATA = {
  name: "Nguyen Tam Thang",
  role: "Computer Science Student",
  headline: "AI Engineering | Retrieval & Recommendations",
  intro:
    "I build AI applications around retrieval, recommendation, and measurable evaluation. My work connects data preparation and model experiments with backend APIs and usable interfaces.",
  about: {
    bio: "I'm a Computer Science student at Ho Chi Minh City University of Technology (HCMUT – VNU-HCM), working toward a career in AI Engineering. I focus on how data, models, and software fit together in a usable system.",
    secondary:
      "I compare simple baselines before adding complexity, keep evaluation protocols explicit, and carry models through packaging, API serving, testing, and deployment. I care about reproducible results and explaining where a system still falls short.",
    focus: [
      {
        title: "Retrieval & recommendations",
        description: "Developing candidate retrieval, ranking, and grounded document search, with clear comparisons against simpler baselines.",
      },
      {
        title: "Evaluation & reproducibility",
        description: "Using temporal splits, explicit metrics, and versioned artifacts to make experiments repeatable and their limits visible.",
      },
      {
        title: "Serving & reliability",
        description: "Packaging model state, defining API contracts, and testing failure, recovery, and resource boundaries.",
      },
    ],
  },
  skills: [
    {
      category: "ML & Retrieval",
      icon: LineChart,
      items: ["RAG", "BM25", "Dense Embeddings", "RRF", "ItemKNN", "Implicit ALS", "Learning to Rank", "PyTorch"],
    },
    {
      category: "Data & Backend",
      icon: Database,
      items: ["Python", "NumPy", "Pandas", "FastAPI", "Pydantic", "REST APIs", "SSE", "Model Artifacts"],
    },
    {
      category: "Frontend",
      icon: Code2,
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
    },
    {
      category: "Quality & Delivery",
      icon: Settings,
      items: ["Temporal Evaluation", "Pytest", "Playwright", "GitHub Actions", "Docker", "Prometheus", "Vercel", "Render"],
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
        "A knowledge platform connecting document ingestion, hybrid retrieval, evaluation, and cited generation, with a public API and web interface.",
      metrics: [
        { value: "93%", label: "Hit@10", context: "93/100 queries; dense: 89/100" },
        { value: "0.7247", label: "Local MRR", context: "Dense baseline: 0.6644" },
        { value: "130.5 MB", label: "Cloud image", context: "Validated Docker image size" },
      ],
      note: "Retrieval scores use the frozen 100-query local benchmark, not answer-quality or HTTP measurements. Exact BM25 parity is a 500-chunk canary; the independent local semantic gate remains unmet.",
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
      demo: "https://enterprisekip.vercel.app/",
      demoLabel: "Live Demo",
    },
    {
      title: "E-commerce Recommendation System",
      version: "v1.0.0",
      metrics: [
        { value: "3.85% → 5.46%", label: "HR@20", context: "3,237 / 59,323 warm user-windows; RRF baseline: 2,285 hits" },
        { value: "+41.7%", label: "Relative improvement", context: "+1.60 percentage points vs. RRF on the same candidate pool" },
        { value: "101/101", label: "Reference outputs matched", context: "Local API, before and after restart" },
      ],
      description:
        "A Retailrocket recommendation pipeline spanning chronological evaluation, hybrid candidate retrieval, learned ranking, versioned model bundles, and a verified local API.",
      image: "/ecommerce-recommendations-art.webp",
      imageAlt: "Concept illustration of a curated sneaker, blue headphones and a yellow lamp connected as product recommendations",
      imageClassName: "object-cover",
      tech: ["Python", "FastAPI", "ItemKNN", "Implicit ALS", "Learned Ranking"],
      highlights: [
        "Learned ranking found 3,237 Top-20 targets versus 2,285 for RRF on the same candidate pool across 59,323 warm user-windows",
        "Combined five retrieval sources while preserving source scores, ranks, cutoff-time features, and full-history seen filtering",
        "Packaged checksum-verified snapshots with explicit warm/cold routes and 101/101 local reference-output parity before and after restart",
      ],
      note: "Ranking results are post-selection diagnostics on inspected folds 5–9, not blind validation. The shopping demo uses a separate browser policy; the model explorer shows saved outputs. Full-model inference runs locally.",
      github: "https://github.com/Thazg/ecommerce-recsys",
      demo: "https://shoprecome.vercel.app/",
      demoLabel: "Shopping Demo",
    },
    {
      title: "Nova RAG Workspace",
      metrics: [
        { value: "83.33%", label: "Page Hit@5", context: "75/90 answerable; ablation: 73/90" },
        { value: "100", label: "Questions", context: "90 answerable + 10 unanswerable" },
        { value: "10", label: "Research PDFs", context: "160 pages, 555 indexed chunks" },
      ],
      version: "v1.0.0",
      description:
        "A private document Q&A workspace with account-scoped indexes, streamed answers, and inspectable filename, page, and extracted-line sources.",
      image: "/nova-rag-workspace-art.webp",
      imageAlt: "Concept illustration of source documents and selected evidence passages connected to a cited answer",
      imageClassName: "object-cover",
      tech: ["Python", "FastAPI", "React", "BM25", "FAISS"],
      highlights: [
        "Production BM25 reached page Hit@5 of 75/90 answerable questions versus 73/90 for the lexical ablation on the same ten-paper benchmark",
        "Built the document lifecycle from validated upload and indexing to scoped questions, plain source citations, and original-file downloads",
        "Preserved interrupted SSE output and verified backend contracts, retrieval gates, dependency audits, and Chromium E2E in CI",
      ],
      note: "The 100-question benchmark measures offline retrieval, not answer accuracy. Human answer/citation review and real multi-host staging remain unverified; FAISS/RRF retrieval is optional.",
      github: "https://github.com/Thazg/NovaRAGChatBot",
      demo: "https://novachatbot.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      metrics: [
        { value: "4", label: "Projects", context: "Featured engineering work" },
        { value: "6", label: "Sections", context: "Home, about, skills, work, education, contact" },
        { value: "3", label: "Viewports checked", context: "390, 768 and 1440 px" },
      ],
      description:
        "A responsive portfolio built to present engineering work clearly, with accessible navigation, purposeful motion, optimized media, and a validated contact workflow.",
      image: "/portfolio-preview-white.webp",
      imageAlt: "Current portfolio introduction with the formal white-background portrait",
      imageClassName: "object-contain",
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
