export const projects = [
  {
    title: "StoxAI",
    subtitle: "India & US Market Analyzer",
    duration: "Jan 2026 - Mar 2026",
    description:
      "Orchestrated a distributed ETL workflow using AWS Step Functions and Lambda to transform 5+ years of raw market data for 1,000 tickers into a high-performance Parquet Data Lake.",
    highlights: [
      "Custom MCP Server on AWS Lambda for LLM-based SQL queries (using AWS Athena)",
      "Agentic RAG Pipeline with Perplexity Sonar integration",
      "Professional-Grade Streamlit UI with Smart Intent Planner (40% API optimization)",
      "AWS Step Functions for ETL orchestration",
    ],
    technologies: [
      "AWS Lambda",
      "AWS Athena",
      "AWS Step Functions",
      "Parquet",
      "Python",
      "Streamlit",
      "S3"
    ],
    github: "https://github.com/Abhijeet418/stoxAI",
    screenshots: [
      "/images/stox/Screenshot 2026-02-11 182944.png",
      "/images/stox/Screenshot 2026-02-11 183033.png",
      "/images/stox/Screenshot 2026-02-11 183104.png",
    ],
  },
  {
    title: "NIFTY Tracker & Strategy Simulation",
    duration: "Nov 2025 - Dec 2025",
    description:
      "Architected a real-time event-driven pipeline utilizing AWS Glue and RabbitMQ for high-frequency data ingestion with 1-minute latency.",
    highlights: [
      "Real-time event-driven pipeline with AWS Glue & RabbitMQ",
      "Custom Python Shell ETL jobs for complex strategy logic",
      "Snowflake integration for scalable storage",
      "Interactive Streamlit dashboard for real-time analytics",
    ],
    technologies: [
      "AWS Glue Workflow",
      "RabbitMQ",
      "Python",
      "Snowflake",
      "Streamlit",
      "EC2",
    ],
    github: "https://github.com/Abhijeet418/NIFTY-tracker",
    screenshots: [
      "/images/livedata/Screenshot 2026-02-10 104316.png",
      "/images/livedata/Screenshot 2026-02-10 104324.png",
      "/images/livedata/Screenshot 2026-02-10 104330.png",
      "/images/livedata/Screenshot 2026-02-10 104337.png",
    ],
  },
  {
    title: "Indian Market Risk Dashboard",
    duration: "Sep 2025 - Oct 2025",
    description:
      "Architected a serverless ETL pipeline using AWS Lambda, S3, and EventBridge Scheduler with Medallion Architecture in Snowflake.",
    highlights: [
      "Serverless ETL with Lambda, S3 & EventBridge",
      "Medallion Architecture (Bronze/Silver/Gold) in Snowflake",
      "Complex risk metrics computation (volatility, Sharpe ratio)",
      "AWS CloudWatch integration for Slack alerts",
    ],
    technologies: [
      "AWS Lambda",
      "S3",
      "EventBridge",
      "Snowflake",
      "SQL",
      "Streamlit",
      "AWS CloudWatch",
    ],
    github: "https://github.com/Abhijeet418/indian-market-data-dashboard",
    screenshots: [
      "/images/market-risk/Screenshot 2026-01-31 173546.png",
      "/images/market-risk/Screenshot 2026-01-31 173712.png",
    ],
  },
  {
    title: "Personality Detection using ML",
    duration: "Aug 2022 - Aug 2023",
    description:
      "A machine learning project for analyzing and detecting personality traits using advanced ML algorithms and data analysis techniques.",
    highlights: [
      "CNN model training and evaluation",
      "MBTI Personality Classification with 99.6% accuracy (using 1 Million Tweets)",
      "Twitter data pipelining, preprocessing and feature engineering",
      "React Native App for real-time personality detection",
    ],
    technologies: [
      "Python",
      "Convolutional Neural Networks",
      "Data Science",
      "Scikit-learn",
      "TensorFlow",
      "React Native",
      "Deep Learning",
      "Text Vectorization"
    ],
    github: "https://github.com/Abhijeet418/Personality-Detection-using-ML",
  },
];

export const workExperience = [
  {
    title: "Intern - Software Developer",
    company: "Fidelity International",
    duration: "Jan 2025 – July 2025",
    highlights: [
      "Cloud Migration & Containerization: Migrated 10+ Java microservices to Kubernetes, managing container versioning in Harbor and implementing liveness/readiness probes via Spring Boot Actuator",
      "Release Operations (GitOps): Managed daily deployment cycles using Jenkins for continuous integration and ArgoCD for continuous delivery",
      "Infrastructure Reliability: Diagnosed complex Kubernetes networking issues causing N-1 dependency failures, implementing configuration fixes",
    ],
  },
];

export const skills = {
  programming: ["Python", "Java", "JavaScript", "C/C++"],
  database: ["MySQL", "MongoDB", "Snowflake", "Parquet"],
  cloud: [
    "AWS (Lambda, S3, Glue, Step Functions, EC2, SNS, EventBridge, Athena)",
    "Azure",
    "Kubernetes",
  ],
  tools: [
    "Jenkins",
    "ArgoCD",
    "Harbor",
    "Nexus",
    "AWS Glue",
    "RabbitMQ",
    "GitOps",
  ],
  frameworks: ["Streamlit", "Flask", "FAST API", "Spring Boot", "Next.js", "React/Native"],
  softSkills: ["Teamwork", "Adaptability", "Communication", "Attention to Detail"],
};

export const education = {
  school: "Manav Rachna International Institute of Research and Studies",
  location: "Faridabad",
  degree: "Bachelor of Technology in Computer Science and Engineering (AIML)",
  gpa: "8.7",
};
