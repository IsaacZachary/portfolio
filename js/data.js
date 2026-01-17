// Portfolio Data Object
const portfolioData = {
  person: {
    name: "Isaac Zachary",
    title: "DevOps & Infrastructure Developer",
    location: "Nairobi, Kenya",
    email: "isaaczachary18@gmail.com",
    linkedin: "https://linkedin.com/in/isaaczachary",
    github: "https://github.com/IsaacZachary",
    tagline: "Building reliable, containerized systems with hands-on deployment experience — AI-enabled, always learning."
  },
  
  featuredProjects: [
    {
      id: "zakaflow",
      name: "ZakaFlow",
      tagline: "Containerized data pipeline architecture",
      description: "Exploring modern data engineering patterns through a multi-service architecture",
      status: "Architecture Prototype",
      year: "2024",
      technologies: ["Docker", "Docker Compose", "Apache Kafka", "Apache Spark", "Apache Airflow", "dbt", "Terraform (concepts)"],
      githubUrl: "https://github.com/IsaacZachary/zaka-flow",
      demoUrl: null,
      story: "Started as a learning project to understand data pipelines in production. Designed multi-service architecture with Docker Compose connecting Kafka, Spark, Airflow, and dbt to explore distributed systems patterns.",
      learnings: [
        "Multi-service Docker architecture",
        "Data flow between distributed systems",
        "Infrastructure-as-code concepts",
        "Real-time vs batch processing tradeoffs"
      ]
    },
    {
      id: "coffee-kiosk",
      name: "Coffee Kiosk",
      tagline: "E-commerce platform with M-Pesa integration",
      description: "Full-stack e-commerce application with mobile payment integration, Dockerized deployment",
      status: "Deployed Demo",
      year: "2024",
      technologies: ["React", "Node.js", "Docker", "M-Pesa API", "PostgreSQL"],
      githubUrl: "https://github.com/IsaacZachary/coffee-kiosk",
      demoUrl: "https://coffee-kiosk-demo.example.com",
      story: "Built a complete e-commerce solution for a local coffee business. Integrated M-Pesa mobile payments, implemented Docker containerization for consistent deployments, and created a responsive React frontend. This project taught me about payment gateway integration, container orchestration, and production deployment practices.",
      learnings: [
        "M-Pesa API integration patterns",
        "Docker multi-stage builds",
        "Payment callback handling",
        "Production deployment workflows"
      ]
    },
    {
      id: "ai-recommender",
      name: "Smart AI Recommender",
      tagline: "FastAPI + React AI system",
      description: "AI-powered recommendation system with OpenAI integration and modern web interface",
      status: "Functional Prototype",
      year: "2024",
      technologies: ["FastAPI", "React", "OpenAI API", "Python", "Docker"],
      githubUrl: "https://github.com/IsaacZachary/ai-recommender",
      demoUrl: null,
      story: "Developed an AI recommendation system combining FastAPI backend with OpenAI's API. Built a React frontend for user interaction and containerized the entire stack. This project demonstrated practical AI integration, API design, and modern full-stack development patterns.",
      learnings: [
        "OpenAI API integration",
        "FastAPI async patterns",
        "AI prompt engineering",
        "React state management"
      ]
    },
    {
      id: "techcareafrica",
      name: "TechCareAfrica",
      tagline: "IT Helpdesk System",
      description: "Comprehensive IT support ticketing system built with Django",
      status: "Production Ready",
      year: "2023",
      technologies: ["Python", "Django", "Bootstrap", "PostgreSQL"],
      githubUrl: "https://github.com/IsaacZachary/TechCareAfrica",
      demoUrl: "https://github.com/IsaacZachary/TechCareAfrica",
      story: "Built to provide affordable and efficient IT solutions for African businesses. Created a full helpdesk system with ticket management, user roles, and reporting. This project combined my technical support experience with software development skills.",
      learnings: [
        "Django ORM and models",
        "User authentication systems",
        "Bootstrap UI components",
        "Database design patterns"
      ]
    }
  ],
  
  otherProjects: [
    {
      name: "Django Tailwind Blog",
      description: "A Developer Portfolio & Blog",
      technologies: ["Python-Django", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/IsaacZachary/blog-site-django"
    },
    {
      name: "Firebase Task Management WebApp",
      description: "Simple to-do list with ReactJS, Redux and Firebase",
      technologies: ["ReactJS", "Firebase", "Redux"],
      githubUrl: "https://github.com/IsaacZachary/Firebase-Task-Management-Webapp",
      demoUrl: "https://task-manager-135a7.web.app/login"
    },
    {
      name: "IT Workshop Computer Maintenance System",
      description: "Support ticketing project based on Laravel 8",
      technologies: ["PHP-Laravel", "Vue"],
      githubUrl: "https://github.com/IsaacZachary/IT-Workshop-Computer-Maintenance"
    },
    {
      name: "Online Management System",
      description: "Jua's Enterprise Online Management System in PHP",
      technologies: ["PHP", "JavaScript", "Apache"],
      githubUrl: "https://github.com/IsaacZachary/Online-Management-System"
    }
  ],
  
  articles: [
    {
      id: "computer-packages",
      title: "Computer Packages Practical Tutorial Guide",
      category: "Tutorial",
      readTime: "15 min read",
      year: "2022",
      excerpt: "A comprehensive self-published guide covering Microsoft Office Suite, graphic design basics, and fundamental networking concepts. Designed for beginners transitioning to digital tools in business and education contexts.",
      content: "This booklet started as a collection of notes while teaching computer basics to small business owners and students. It covers practical skills from Word document formatting to Excel formulas, PowerPoint presentations, and basic graphic design with free tools. The networking section focuses on real-world scenarios faced by Kenyan businesses.",
      link: "https://isaaczachary.github.io/computer-packages-guide/"
    },
    {
      id: "docker-lessons",
      title: "Getting Started with Docker: Lessons from My First Containerized Deployments",
      category: "DevOps",
      readTime: "5 min read",
      year: "2024",
      excerpt: "What I learned containerizing real applications: from basic Dockerfiles to multi-service architectures, common pitfalls, and production considerations.",
      content: "When I first started using Docker, I thought it was just about packaging applications. But containerizing real projects taught me about layer caching, multi-stage builds, volume management, and networking between services. This article shares the mistakes I made and the patterns that work.",
      link: null
    },
    {
      id: "support-to-devops",
      title: "From Technical Support to DevOps: A Practical Transition Guide",
      category: "Career",
      readTime: "8 min read",
      year: "2024",
      excerpt: "How my background in troubleshooting prepared me for infrastructure work, and the specific skills I focused on developing.",
      content: "My years in technical support gave me something valuable: deep empathy for what breaks in production. This article explores how troubleshooting skills translate to DevOps, the gaps I had to fill, and practical steps for making the transition.",
      link: null
    },
    {
      id: "ai-assisted-dev",
      title: "AI-Assisted Development: Practical Workflows for Building Faster",
      category: "Development",
      readTime: "6 min read",
      year: "2024",
      excerpt: "How I use AI tools effectively while maintaining code quality: specific prompts, review processes, and balancing automation with understanding.",
      content: "AI tools can accelerate development, but they require careful integration. I share my workflow for using AI assistants: when to use them, how to structure prompts, and the review process that ensures I understand every line of generated code.",
      link: null
    },
    {
      id: "mpesa-integration",
      title: "M-Pesa API Integration for Kenyan Applications",
      category: "Development",
      readTime: "7 min read",
      year: "2023",
      excerpt: "A practical guide to integrating mobile payments: sandbox setup, callback handling, error management, and UX considerations.",
      content: "M-Pesa is the dominant payment method in Kenya, but integrating it requires understanding callback patterns, error handling, and user experience flows. This guide covers the technical implementation and the business logic needed for reliable payment processing.",
      link: null
    }
  ],
  
  experience: [
    {
      company: "First Basics Technologies",
      role: "Technical Support Agent → Infrastructure Support",
      period: "Feb 2024 - Present",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Providing customer technical support for internet services",
        "Resolving network connectivity issues and enhancing customer satisfaction",
        "Infrastructure monitoring and troubleshooting",
        "Documenting support procedures and knowledge base articles"
      ]
    },
    {
      company: "Humble Crib Investment",
      role: "IT Support & Entrepreneurship",
      period: "Feb 2022 - Nov 2023",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Providing IT related solutions and implementing software in the business",
        "Installation and configuration of operating systems (Windows/Linux) and other productive software",
        "Sales and service delivery, financial accounting & managing enterprise projects"
      ]
    },
    {
      company: "JAK All-Time Tech",
      role: "Entrepreneur & IT Solutions",
      period: "Jan 2021 - Jul 2021",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Managed cyber services, e-citizen support, printing & creative designs",
        "Provided IT solutions for businesses and individuals"
      ]
    },
    {
      company: "GES Telecommunications Company",
      role: "Technician Assistant (Trainee)",
      period: "Apr 2019 - Sep 2020",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Installed & configured CCTV systems, electric fences, and automated gates",
        "Assisted in network cabling and troubleshooting"
      ]
    }
  ],
  
  skills: {
    production: [
      { name: "Docker & Containerization", level: 85 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Linux & Server Management", level: 80 },
      { name: "Python Development", level: 90 },
      { name: "React & Frontend", level: 80 },
      { name: "Database Design", level: 85 }
    ],
    learning: [
      { name: "Kubernetes", level: 45 },
      { name: "Terraform", level: 40 },
      { name: "AWS Basics", level: 50 },
      { name: "Monitoring", level: 35 }
    ]
  }
};
