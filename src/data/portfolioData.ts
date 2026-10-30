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
    lastName: "Gautam",
    fullName: "Himanshu Gautam",
    handle: "himanshuu-g",
    role: "Web Developer & Computer Science Graduate",
    secondaryRole: "Frontend, Backend & AI / Machine Learning",
    tagline: "Computer Science graduate (B.Tech, 2026) with hands-on experience in web development and performance testing. Comfortable across the frontend stack with growing exposure to backend and QA workflows.",
    status: {
      isAvailable: true,
      text: "Open for full-time opportunities",
    },
    location: "New Delhi, India",
    phone: "+91 7703940978",
    email: "gautamji616@gmail.com",
    github: "https://github.com/himanshuu-g",
    linkedin: "https://linkedin.com/in/himanshu-gautam-7a401a29a",
    twitter: "https://twitter.com",
    discord: "@himanshu_dev",
    resumeUrl: "#",
    avatarUrl: "/Monochrome Tech Portfolio Portrait.png",
    aboutPortraitUrl: "/himanshuimage.jpeg",
    experienceYears: "1+",
    projectsCompleted: "10+",
    happyClients: "Professional",
  },

  // Floating badges around hero portrait
  heroBadges: [
    { id: "1", label: "React.js & Web", position: "top-[16%] left-[6%] md:left-[14%]" },
    { id: "2", label: "JavaScript & Python", position: "top-[28%] left-[2%] md:left-[10%]" },
    { id: "3", label: "MongoDB & Firebase", position: "top-[40%] left-[4%] md:left-[12%]" },
    { id: "4", label: "CNN & Grad-CAM", position: "top-[16%] right-[6%] md:right-[14%]" },
    { id: "5", label: "OCR Text Extraction", position: "top-[28%] right-[2%] md:right-[10%]" },
    { id: "6", label: "Performance QA", position: "top-[40%] right-[4%] md:right-[12%]" },
  ],

  // Bottom dock tools matching technical skills from resume
  dockSkills: [
    { name: "React.js", icon: "atom", level: "Core Framework" },
    { name: "JavaScript", icon: "code-2", level: "Language" },
    { name: "Python", icon: "terminal", level: "Language / ML" },
    { name: "MongoDB", icon: "database", level: "Database" },
    { name: "Firebase", icon: "server", level: "Cloud DB" },
    { name: "MySQL", icon: "database", level: "Relational DB" },
    { name: "Git & GitHub", icon: "box", level: "Version Control" },
    { name: "HTML5 & CSS3", icon: "palette", level: "Styling & Markup" },
  ],

  // Career experience & education timeline from resume
  timeline: [
    {
      id: "exp-1",
      period: "Jan 2026 — Present",
      role: "Web Developer",
      company: "O3 Plus (Visage Beauty & Healthcare Pvt Ltd)",
      location: "Noida, Uttar Pradesh, India",
      description: "Developing and maintaining web application features using JavaScript, React.js, and MongoDB as part of the core web engineering team.",
      highlights: [
        "Collaborating with designers and backend developers to translate requirements into responsive, functional UI components",
        "Participating in debugging, testing, and iterative improvements to the existing codebase to improve performance and reliability"
      ]
    },
    {
      id: "exp-2",
      period: "Jun 2025 — Aug 2025",
      role: "Performance Test Engineer",
      company: "Airtel Digital (via Xtelify Limited)",
      location: "Gurugram, Haryana, India",
      description: "Executed performance test suites and documented analytical results to support engineering teams in optimizing web application performance.",
      highlights: [
        "Worked cross-functionally with development teams to report and track performance issues through resolution",
        "Assisted in identifying frontend latency bottlenecks and validating regression fixes"
      ]
    },
    {
      id: "edu-1",
      period: "2023 — 2026 (Expected)",
      role: "B.Tech in Computer Science and Engineering",
      company: "Jamia Hamdard University",
      location: "New Delhi, India",
      description: "Comprehensive undergraduate engineering degree covering data structures, computer networks, database management systems, and modern web application development.",
      highlights: [
        "Volunteer in Google Developer Groups (GDG) Marketing Team",
        "Built core competency in modern JavaScript, Python, and full-stack software architecture"
      ]
    },
    {
      id: "edu-2",
      period: "2019 — 2023",
      role: "Diploma in Mechanical Engineering",
      company: "Delhi Institute of Technology, Management & Research",
      location: "Delhi NCR, India",
      description: "Built strong engineering fundamentals, mathematical reasoning, and structured problem-solving methodologies.",
      highlights: [
        "Graduated with rigorous technical discipline and analytical problem formulation skills"
      ]
    }
  ],

  // Technical Projects from resume
  projects: [
    {
      id: "proj-1",
      title: "Skin Analysis & Skincare Recommender",
      subtitle: "Deep learning CNN classifier with explainable Grad-CAM heatmaps",
      category: "AI / Machine Learning",
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      description: "A full-stack Flask web application that classifies user skin types (oily, dry, normal) by combining uploaded portrait photos with a comprehensive skin-health questionnaire.",
      techStack: ["Python", "Flask", "MobileNet (CNN)", "Grad-CAM", "SQLite", "OpenCV"],
      liveUrl: "https://github.com/himanshuu-g",
      githubUrl: "https://github.com/himanshuu-g",
      featured: true,
      metrics: [
        { label: "Model Architecture", value: "MobileNet CNN" },
        { label: "Explainability", value: "Grad-CAM Heatmaps" },
        { label: "Stack", value: "Flask + SQLite" }
      ],
      overview: "Solo end-to-end engineered application delivering transparent, vision-driven skin classification and custom skincare recommendations.",
      challenge: "Providing users with transparent, trustworthy predictions rather than an opaque black-box machine learning output.",
      solution: "Trained and fine-tuned a MobileNet-based CNN with a custom preprocessing pipeline, integrating Grad-CAM to visually highlight the exact facial image regions driving each classification."
    },
    {
      id: "proj-2",
      title: "Handwritten Notes Digitizer",
      subtitle: "OCR-powered web application for indexing and converting physical notes",
      category: "Frontend",
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
      description: "A web-based system engineered to convert physical handwritten notes into digital, searchable, and easily editable text using optical character recognition.",
      techStack: ["JavaScript", "Python", "OCR", "HTML5", "CSS3", "React.js"],
      liveUrl: "https://github.com/himanshuu-g",
      githubUrl: "https://github.com/himanshuu-g",
      featured: true,
      metrics: [
        { label: "OCR Extraction", value: "Real-time" },
        { label: "Text Search", value: "Instant Index" },
        { label: "Format", value: "Editable Output" }
      ],
      overview: "Designed to solve paper clutter and improve academic note organization by allowing instant search, tagging, and digital archiving of handwritten content.",
      challenge: "Handling handwriting variations, uneven document lighting, and skewed phone camera captures.",
      solution: "Engineered pre-OCR image filtering and thresholding to enhance character contrast before executing extraction, ensuring high legibility and quick text editing."
    },
    {
      id: "proj-3",
      title: "O3 Plus Core Web Platform",
      subtitle: "High-performance responsive UI components for beauty & wellness brand",
      category: "Full Stack",
      year: "2026",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      description: "Developing responsive web features, functional UI components, and state management routines using JavaScript, React.js, and MongoDB for O3 Plus.",
      techStack: ["JavaScript", "React.js", "MongoDB", "HTML5", "CSS3", "Git"],
      liveUrl: "https://github.com/himanshuu-g",
      githubUrl: "https://github.com/himanshuu-g",
      featured: true,
      metrics: [
        { label: "Role", value: "Web Developer" },
        { label: "Database", value: "MongoDB" },
        { label: "UI Library", value: "React.js" }
      ],
      overview: "Working as part of the core web engineering team at Visage Beauty & Healthcare to enhance digital commerce and customer engagement interfaces.",
      challenge: "Translating diverse design specifications into lightweight, bug-free, and accessible React components.",
      solution: "Adopted strict component modularity, standardized prop structures, and conducted iterative code reviews with backend teammates."
    }
  ],

  // Articles & Technical Notes
  articles: [
    {
      id: "art-1",
      title: "Building Interpretable Computer Vision Models with MobileNet & Grad-CAM",
      slug: "interpretable-cv-mobilenet-gradcam",
      date: "2025",
      readTime: "5 min read",
      tag: "Machine Learning",
      summary: "How to combine lightweight convolutional neural networks with Class Activation Mapping (Grad-CAM) to explain predictions to end users visually.",
      content: "Explainable AI is crucial in healthcare and aesthetic diagnostics. In this article, we walk through fine-tuning MobileNet for skin classification and extracting the gradient of the score for target classes with respect to feature maps to generate visual heatmaps."
    },
    {
      id: "art-2",
      title: "Best Practices for Web Performance Testing in Enterprise Applications",
      slug: "web-performance-testing-enterprise",
      date: "2025",
      readTime: "6 min read",
      tag: "Performance QA",
      summary: "Key lessons from executing performance suites, tracking latency regressions, and collaborating cross-functionally with dev teams.",
      content: "Monitoring p95 and p99 response times during heavy client loads ensures production web applications stay responsive under peak traffic. We break down the end-to-end testing lifecycle from issue reporting to verified resolution."
    },
    {
      id: "art-3",
      title: "OCR Pipelines in the Browser: Preprocessing and Text Extraction",
      slug: "ocr-pipelines-browser-preprocessing",
      date: "2025",
      readTime: "4 min read",
      tag: "Web Development",
      summary: "Practical techniques for preparing user-submitted images for Optical Character Recognition to maximize transcription accuracy.",
      content: "Extracting handwritten notes requires preprocessing: grayscale conversion, Otsu thresholding, and perspective correction drastically improve OCR accuracy on non-ideal mobile phone captures."
    }
  ]
};
