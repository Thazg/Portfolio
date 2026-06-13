import {
  Code2,
  Database,
  Globe,
  Layout,
  LineChart,
  Server,
  Settings,
  Terminal,
} from "lucide-react";

export const PORTFOLIO_DATA = {
  name: "Nguyễn Tâm Thắng",
  role: "AI Engineer",
  headline: "AI Engineer | Machine Learning | Deep Learning | Software Development",
  intro: "I build intelligent systems, machine learning solutions, and modern software applications. My interests include Artificial Intelligence, Data Science, Competitive Programming, and scalable software engineering.",
  about: {
    bio: "I am a dedicated AI Engineer and Software Developer with a strong foundation in Artificial Intelligence, Machine Learning, and Deep Learning. I specialize in building intelligent algorithms, predictive models, and scalable architectures that solve complex real-world problems. Whether it's training neural networks or deploying robust backend microservices, I am passionate about the intersection of data and software engineering.",
    stats: [
      { label: "AI Models Deployed", value: "10+" },
      { label: "Years Coding", value: "5+" },
      { label: "Projects Completed", value: "25+" },
      { label: "Hackathons Won", value: "3" },
    ],
  },
  skills: [
    {
      category: "AI & Machine Learning",
      icon: LineChart,
      items: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas", "LangChain", "OpenAI API"],
    },
    {
      category: "Software Engineering",
      icon: Terminal,
      items: ["C++", "Java", "TypeScript", "React", "Next.js", "Node.js", "Go"],
    },
    {
      category: "Data & Databases",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "Redis", "Vector Databases", "SQL"],
    },
    {
      category: "Tools & Infrastructure",
      icon: Settings,
      items: ["Git", "Docker", "Linux", "VS Code", "AWS", "CI/CD"],
    },
  ],
  projects: [
    {
      title: "Nova AI Agent",
      description: "An autonomous AI agent capable of planning and executing complex coding tasks, integrating with major LLMs to provide real-time architectural insights and automated pull request reviews.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      tech: ["Python", "LangChain", "OpenAI", "React", "FastAPI"],
      github: "https://github.com",
    },
    {
      title: "Deep Vision Analyzer",
      description: "A highly optimized computer vision pipeline using PyTorch for real-time anomaly detection in industrial manufacturing streams, achieving 99.8% accuracy on edge devices.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
      tech: ["Python", "PyTorch", "OpenCV", "TensorRT", "C++"],
      github: "https://github.com",
    },
    {
      title: "Scalable RAG System",
      description: "Enterprise-grade Retrieval-Augmented Generation system using vector databases and LangChain to index and query over 1 million internal company documents with sub-second latency.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
      tech: ["TypeScript", "Next.js", "Pinecone", "OpenAI", "Node.js"],
      github: "https://github.com",
    },
    {
      title: "Predictive Healthcare Analytics",
      description: "Machine learning platform analyzing electronic health records (EHR) to predict patient readmission rates, built with Scikit-Learn and deployed via scalable microservices.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
      tech: ["Python", "Scikit-Learn", "Pandas", "Docker", "AWS"],
      github: "https://github.com",
    },
  ],
  experience: [
    {
      company: "AI Research Lab",
      position: "Machine Learning Researcher",
      duration: "2023 - Present",
      responsibilities: [
        "Researched and implemented novel transformer architectures for natural language understanding.",
        "Optimized deep learning training pipelines, reducing epoch times by 35% across multi-GPU setups.",
        "Published findings on efficient parameter tuning in top-tier AI conferences.",
      ],
    },
    {
      company: "Tech Innovations Enterprise",
      position: "Software Engineer",
      duration: "2021 - 2023",
      responsibilities: [
        "Architected scalable backend microservices using Node.js and PostgreSQL handling 50k+ daily active users.",
        "Integrated advanced machine learning models into production systems via RESTful APIs.",
        "Mentored junior developers and established CI/CD best practices across the engineering organization.",
      ],
    },
  ],
  education: [
    {
      university: "National University",
      degree: "B.S. in Computer Science",
      duration: "2019 - 2023",
      gpa: "3.9 / 4.0",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Structures & Algorithms",
        "Deep Learning",
        "Distributed Systems",
      ],
    },
  ],
  achievements: [
    { title: "First Place, National AI Hackathon", count: 1 },
    { title: "Open Source Contributions", count: 100 },
    { title: "Machine Learning Certifications", count: 3 },
    { title: "Published Research Papers", count: 2 },
  ],
  blog: [
    {
      title: "The Evolution of Transformer Architectures in 2024",
      date: "Nov 15, 2023",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "Deploying PyTorch Models to Edge Devices using TensorRT",
      date: "Sep 28, 2023",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "Mastering Vector Databases for RAG Applications",
      date: "Aug 10, 2023",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
    twitter: "https://twitter.com",
  },
};
