export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  tag: string;
  summary: string;
  content: string;
}

export interface FloatingBadge {
  id: string;
  label: string;
  category: string;
  initialX: number;
  initialY: number;
  delay: number;
}

export const portfolioData = {
  profile: {
    firstName: "Himanshu",
    lastName: "Gautam", // Easily customizable
    fullName: "Himanshu Gautam",
    handle: "gautamhimanshu7703@gmail.com",
    role: "Full Stack Engineer & Creative Developer",
    secondaryRole: "Software Architect & UI/UX Technologist",
    tagline: "I design and build resilient digital products that balance deep engineering rigor, tactile micro-interactions, and fluid aesthetics.",
    status: {
      isAvailable: true,
      text: "Open for projects & opportunities",
    },
    location: "Global / Remote",
    email: "gautam@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    discord: "@gautam_dev",
    resumeUrl: "#",
    avatarUrl: "public/himanshuimage.jpeg",
    aboutPortraitUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    experienceYears: "5+",
    projectsCompleted: "35+",
    happyClients: "20+",
  },

  // Floating badges around hero portrait (Screenshot 1 matching)
  heroBadges: [
    { id: "1", label: "Full Stack Web", position: "top-[16%] left-[6%] md:left-[14%]" },
    { id: "2", label: "React & Next.js", position: "top-[28%] left-[2%] md:left-[10%]" },
    { id: "3", label: "System Design", position: "top-[40%] left-[4%] md:left-[12%]" },
    { id: "4", label: "Cloud & DevOps", position: "top-[16%] right-[6%] md:right-[14%]" },
    { id: "5", label: "AI Integration", position: "top-[28%] right-[2%] md:right-[10%]" },
    { id: "6", label: "API Architecture", position: "top-[40%] right-[4%] md:right-[12%]" },
  ],

  // Bottom dock tools matching screenshot 2
  dockSkills: [
    { name: "React", icon: "atom", level: "Expert" },
    { name: "TypeScript", icon: "code-2", level: "Expert" },
    { name: "Next.js", icon: "globe", level: "Expert" },
    { name: "Node.js", icon: "server", level: "Advanced" },
    { name: "Python", icon: "terminal", level: "Advanced" },
    { name: "Tailwind CSS", icon: "palette", level: "Expert" },
    { name: "PostgreSQL", icon: "database", level: "Advanced" },
    { name: "Docker", icon: "box", level: "Intermediate" },
  ],

  // Career experience timeline matching screenshot 2
  timeline: [
    {
      id: "exp-1",
      period: "2023 — Present",
      role: "Senior Full Stack Engineer",
      company: "Apex Hyperware",
      location: "San Francisco, CA (Remote)",
      description: "Spearheaded frontend and distributed microservice architectures for real-time collaboration platforms servicing 250k+ daily active users.",
      highlights: ["Reduced p99 latency by 42% through edge caching", "Mentored 6 junior engineers and modernized CI/CD pipeline"]
    },
    {
      id: "exp-2",
      period: "2021 — 2023",
      role: "Full Stack Software Developer",
      company: "Veloce Interactive",
      location: "New York, NY",
      description: "Engineered high-frequency reactive web applications, custom design systems, and WebGL interactive product experiences.",
      highlights: ["Led development of flagship dashboard adopted by Fortune 500 clients", "Integrated real-time WebSocket communication layer"]
    },
    {
      id: "exp-3",
      period: "2019 — 2021",
      role: "Junior Software Engineer",
      company: "Northframe Studio",
      location: "Austin, TX",
      description: "Built scalable RESTful APIs, headless CMS integrations, and high-performance client web portals with zero-downtime releases.",
      highlights: ["Implemented full automated unit & integration testing suite", "Refactored legacy monolith into modular micro-frontends"]
    }
  ],

  // Projects list
  projects: [
    {
      id: "proj-1",
      title: "Synthetix AI Studio",
      subtitle: "Multi-agent generative workflow orchestration engine",
      category: "AI / Machine Learning",
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      description: "A node-based generative AI workflow builder enabling engineering teams to orchestrate LLM chains, vector stores, and custom tools visually.",
      techStack: ["Next.js 15", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/synthetix",
      featured: true,
      metrics: [
        { label: "Pipeline Speed", value: "3.4x faster" },
        { label: "Active Nodes", value: "10,000+" },
        { label: "Latency", value: "<180ms" }
      ],
      overview: "Synthetix bridges developer code with visual canvas graph orchestration. Designed with fluid 60fps animations and resilient state synchronization.",
      challenge: "Handling complex DAG graph cycles in real-time while streaming LLM response tokens without UI frame drops.",
      solution: "Engineered an off-main-thread WebWorker state manager and custom virtualized canvas viewport utilizing WebGL acceleration."
    },
    {
      id: "proj-2",
      title: "PulseFlow Cloud",
      subtitle: "Real-time telemetry & distributed tracing platform",
      category: "Cloud & Systems",
      year: "2024",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: "Telemetry engine visualizing high-throughput server metrics, anomaly alarms, and serverless invocations across global clusters.",
      techStack: ["React", "Go", "Docker", "ClickHouse", "Tailwind CSS"],
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/pulseflow",
      featured: true,
      metrics: [
        { label: "Events / Sec", value: "1.2M+" },
        { label: "Uptime", value: "99.99%" }
      ],
      overview: "Built to replace clunky legacy APM tools with a lightning-fast, keyboard-driven UI inspired by high-end financial terminals.",
      challenge: "Rendering dense live charts with 50,000 data points updating every 500 milliseconds without browser stutter.",
      solution: "Implemented Canvas-based chart rendering coupled with WebSockets compression and delta-encoding."
    },
    {
      id: "proj-3",
      title: "OmniStore Commerce",
      subtitle: "Ultra-fast headless e-commerce with 3D product previews",
      category: "Full Stack",
      year: "2024",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      description: "Sub-second load times e-commerce flagship with 3D spatial model inspection and instant serverless checkout.",
      techStack: ["Next.js", "Three.js", "Stripe API", "GraphQL", "Tailwind CSS"],
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/omnistore",
      featured: true,
      metrics: [
        { label: "Conversion Rate", value: "+28%" },
        { label: "Lighthouse Score", value: "99/100" }
      ],
      overview: "Engineered from the ground up to redefine modern luxury digital storefronts with tactile animations and effortless mobile checkout.",
      challenge: "Optimizing heavy 3D GLTF asset downloads on cellular networks.",
      solution: "Integrated Draco compression and progressive mesh level-of-detail (LOD) streaming."
    },
    {
      id: "proj-4",
      title: "Aura Design System",
      subtitle: "Accessible React & Framer Motion component library",
      category: "Frontend",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      description: "Comprehensive tokenized UI kit with built-in accessibility compliance, micro-animations, and zero layout shift.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/aura-ui",
      featured: false,
      metrics: [
        { label: "npm Downloads", value: "45k/mo" },
        { label: "WCAG Level", value: "AAA" }
      ],
      overview: "Created to help developer teams ship polished, accessible, animated interfaces without starting from scratch.",
      challenge: "Ensuring complex interactive components like comboboxes and modals maintained strict keyboard accessibility.",
      solution: "Built on top of Radix primitives with custom Framer Motion spring physics wrappers."
    }
  ],

  // Articles & insights
  articles: [
    {
      id: "art-1",
      title: "Architecting Fluid 60fps Micro-Interactions in React",
      slug: "fluid-micro-interactions-react",
      date: "Oct 2025",
      readTime: "6 min read",
      tag: "UI Engineering",
      summary: "How to combine Framer Motion layout animations, GPU layer promotion, and spring physics for buttery smooth tactile interfaces.",
      content: "When building modern web applications, the difference between a good interface and an unforgettable one lies in micro-interactions. In this article, we explore how layout animations work under the hood, how FLIP (First, Last, Invert, Play) prevents layout thrashing, and how to configure spring damping for natural physical feedback."
    },
    {
      id: "art-2",
      title: "Building Real-Time State Engines with WebSockets & Rust",
      slug: "realtime-state-websockets-rust",
      date: "Aug 2025",
      readTime: "9 min read",
      tag: "System Design",
      summary: "Techniques for low-latency state synchronization across distributed clients using delta compression and conflict-free data types.",
      content: "Collaborative canvas tools require instantaneous consensus between dozens of active users. We dive deep into CRDTs (Conflict-free Replicated Data Types), binary protocol serialization with Protobuf, and connection connection pooling techniques."
    },
    {
      id: "art-3",
      title: "The Editorial Minimalist Aesthetic in Modern Web Design",
      slug: "editorial-minimalist-web-design",
      date: "Jun 2025",
      readTime: "4 min read",
      tag: "Design Philosophy",
      summary: "Deconstructing why giant typography, negative space, and monochromatic restraint captivate high-caliber engineering teams.",
      content: "Minimalism is not the absence of design; it is the presence of intention. By reducing visual noise and relying on strong typographic scale and spatial hierarchy, developers can let their work and craft take center stage."
    }
  ]
};
