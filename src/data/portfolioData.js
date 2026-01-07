// Static portfolio data - extracted from https://abhijnya002.github.io/

export const projectsData = [
  {
    _id: "1",
    projectTitle: "PersonaForge: Where Voice Meets AI",
    projectLink: "personaforge",
    projectDescription: "Spearheaded a Windows desktop voice assistant using Electron, React/TypeScript (Vite), Node.js, Electron IPC + pre-load, and Web Audio (AudioWorklet); integrated ElevenLabs (STT/TTS) with Gemini/OpenAI; implemented a 4-stage real-time loop and an executor framework for 8 core OS actions. Awarded Best Use of AI Using ElevenLabs.",
    projectTech: ["Electron", "React", "TypeScript", "Node.js", "ElevenLabs", "Gemini", "OpenAI", "Web Audio API"],
    projectHighlights: [
      "Spearheaded a Windows desktop voice assistant using Electron, React/TypeScript (Vite), Node.js, Electron IPC + pre-load, and Web Audio (AudioWorklet)",
      "Integrated ElevenLabs (STT/TTS) with Gemini/OpenAI",
      "Implemented a 4-stage real-time loop and an executor framework for 8 core OS actions",
      "Awarded Best Use of AI Using ElevenLabs"
    ],
    projectGitHubLink: "https://github.com/Kartavya904/PersonaForge",
    projectDemoLink: "",
    projectImagePath: "projectTable/PersonaForge",
    projectYear: "2025",
    projectPeriod: "MakeUC Hackathon 2025 | November 2025",
    featured: true
  },
  {
    _id: "2",
    projectTitle: "My AI Companion - Personal Portfolio Website",
    projectLink: "my-ai-companion",
    projectDescription: "Meet my AI Companion: He knows all about my journey and loves to share. Transforming a personal portfolio into an interactive experience with a custom AI chatbot that lives on the portfolio site, capable of answering questions about my background as if you're chatting with me. The AI Companion uses semantic vector search, GPT-4 for answer generation, and maintains conversation context. Features include Web Speech API for voice input, context-aware dialog, and real-time feedback with typewriter reveal effect.",
    projectTech: ["React", "Node.js", "Fastify", "MongoDB Atlas", "OpenAI GPT-4", "Vector Search", "Web Speech API"],
    projectHighlights: [
      "AI Companion that answers questions about my background using semantic vector search and GPT-4",
      "Knowledge base aggregation from portfolio content, resume, and GitHub repositories",
      "Conversation memory maintaining context across multiple interactions",
      "Voice input support using Web Speech API and real-time feedback with typewriter effect"
    ],
    projectGitHubLink: "https://github.com/Kartavya904/Kartavya-Portfolio-MERN",
    projectDemoLink: "",
    projectImagePath: "projectTable/My AI Companion",
    projectYear: "2025",
    projectPeriod: "Full-Stack AI Development | January 2025 - April 2025",
    featured: true
  }
];

export const experienceData = [
  {
    _id: "2",
    experienceTitle: "Data Analysis Engineer",
    experienceLink: "data-analysis-engineer-mercedes",
    experienceCompany: "Mercedes Benz Research and Development",
    experienceLocation: "Bangalore, India",
    experiencePeriod: "Aug 2022 - Aug 2024",
    experienceDescription: "Data Analysis Engineer optimizing analytics systems and building scalable data pipelines",
    experienceHighlights: [
      "Received BRONZE STAR award for driving customer-centric strategies, executing three critical service enhancements",
      "Enhanced project efficiency by 30% and accelerated delivery through Agile practices",
      "Designed and optimized scalable data pipelines using Python, AWS, and PostgreSQL, improving data quality to 99.9%",
      "Built CI/CD dashboard with AWS CodePipeline, reducing deployment issues by 30%",
      "Leveraged Power BI, Grafana, and PostgreSQL for real-time monitoring dashboards"
    ],
    experienceTech: ["Python", "AWS", "PostgreSQL", "Power BI", "Grafana", "CI/CD", "Agile"],
    experienceImagePath: "experienceTable/Data Analysis Engineer",
    experienceYear: "2022-2024"
  },
  {
    _id: "1",
    experienceTitle: "Research Assistant",
    experienceLink: "research-assistant-syracuse",
    experienceCompany: "Syracuse University",
    experienceLocation: "Syracuse, NY",
    experiencePeriod: "Jan 2025 - May 2025",
    experienceDescription: "Data and Research Engineer supporting data-driven policy research",
    experienceHighlights: [
      "Automated retrieval of large-scale datasets through REST APIs with pagination handling and rate-limit mitigation to ensure data completeness",
      "Designed modular Python scripts for parsing JSON responses, transforming metadata, and exporting structured Excel/CSV outputs for faculty research workflows",
      "Optimized end-to-end data pipelines with error handling, logging, and incremental updates, reducing processing overhead by 40%",
      "Collaborated with interdisciplinary research teams to enable reproducible data analysis and policy-driven insights"
    ],
    experienceTech: ["Python", "REST APIs", "Data Processing", "Excel/CSV"],
    experienceImagePath: "experienceTable/Research Assistant",
    experienceYear: "2025"
  },
  {
    _id: "3",
    experienceTitle: "Student Trainee",
    experienceLink: "student-trainee-mercedes",
    experienceCompany: "Mercedes Benz Research and Development",
    experienceLocation: "Bangalore, India",
    experiencePeriod: "Mar 2021 - Apr 2022",
    experienceDescription: "Student Trainee working on voice-enabled applications",
    experienceHighlights: [
      "Implemented voice-enabled Literary Info Bixby capsule integrating REST APIs",
      "Established structured capsule serving as reference for 3+ project teams",
      "Enhanced user experience through seamless voice interactions"
    ],
    experienceTech: ["Bixby", "REST APIs", "Voice Interface"],
    experienceImagePath: "experienceTable/Student Trainee",
    experienceYear: "2021-2022"
  }
];

export const honorsExperienceData = [
  {
    _id: "1",
    honorsExperienceTitle: "BRONZE STAR Award",
    honorsExperienceLink: "bronze-star-award",
    honorsExperienceCompany: "Mercedes Benz Research and Development",
    honorsExperienceLocation: "Bangalore, India",
    honorsExperiencePeriod: "2023",
    honorsExperienceDescription: "For driving customer-centric strategies and executing critical service enhancements",
    honorsExperienceImagePath: "honorsExperienceTable/BRONZE STAR Award",
    honorsExperienceYear: "2023"
  },
  {
    _id: "2",
    honorsExperienceTitle: "AWS re:Invent All Builders Welcome Grant",
    honorsExperienceLink: "aws-reinvent-grant",
    honorsExperienceCompany: "Amazon Web Services",
    honorsExperienceLocation: "Remote",
    honorsExperiencePeriod: "2025",
    honorsExperienceDescription: "Recognizing builders who advance innovation, diversity, and technical excellence in the cloud computing community",
    honorsExperienceImagePath: "honorsExperienceTable/AWS Grant",
    honorsExperienceYear: "2025"
  }
];

export const involvementData = [
  {
    _id: "1",
    involvementTitle: "Microsoft Certified: Power BI Data Analyst Associate",
    involvementLink: "microsoft-power-bi-certification",
    involvementSubTitle: "Microsoft",
    involvementTimeline: "Aug 2025 – Aug 2026",
    involvementTagline: "Professional certification in Power BI data analysis and visualization",
    involvementDescription: "Certified in Power BI for advanced data analysis, visualization, and business intelligence solutions. Valid until August 2026.",
    involvementParagraphs: [
      "Microsoft Certified: Power BI Data Analyst Associate certification demonstrates expertise in transforming data into actionable insights using Power BI.",
      "Covers advanced data modeling, visualization, and dashboard creation for business intelligence solutions.",
      "Certification valid from August 2025 to August 2026."
    ],
    involvementImagePath: "certifications/microsoft-power-bi",
    involvementYear: "2025"
  },
  {
    _id: "2",
    involvementTitle: "SQL (Advanced) – HackerRank",
    involvementLink: "hackerrank-sql-advanced",
    involvementSubTitle: "HackerRank",
    involvementTimeline: "2025",
    involvementTagline: "Advanced SQL skills certification from HackerRank",
    involvementDescription: "Achieved HackerRank certification in advanced SQL programming, demonstrating proficiency in complex queries, optimization, and database management.",
    involvementParagraphs: [
      "HackerRank SQL (Advanced) certification validates expertise in complex SQL queries, optimization techniques, and database management.",
      "Demonstrates proficiency in advanced SQL concepts including window functions, CTEs, and query optimization.",
      "Recognized credential for database and data engineering roles."
    ],
    involvementImagePath: "certifications/hackerrank-sql",
    involvementYear: "2025"
  },
  {
    _id: "3",
    involvementTitle: "AWS Cloud Technical Essentials",
    involvementLink: "aws-cloud-technical-essentials",
    involvementSubTitle: "Amazon Web Services",
    involvementTimeline: "2025",
    involvementTagline: "AWS foundational cloud computing certification",
    involvementDescription: "Completed AWS Cloud Technical Essentials course, gaining foundational knowledge in cloud computing, AWS services, and cloud architecture.",
    involvementParagraphs: [
      "AWS Cloud Technical Essentials certification provides foundational knowledge of AWS cloud computing services.",
      "Covers core AWS services including EC2, S3, RDS, and cloud architecture best practices.",
      "Essential credential for cloud engineering and AWS deployment roles."
    ],
    involvementImagePath: "certifications/aws-cloud-essentials",
    involvementYear: "2025"
  }
];

export const educationData = [
  {
    _id: "1",
    degree: "Master of Science (M.S), Computer Science",
    institution: "Syracuse University",
    location: "Syracuse, NY",
    period: "Aug 2024 - May 2026",
    gpa: "3.90/4.0",
    description: "Pursuing Master's degree in Computer Science with a focus on data engineering, machine learning, and full-stack development. Maintaining a GPA of 3.90/4.0 while working as a Graduate Research Assistant, conducting research in data-driven policy analysis and automated data processing pipelines."
  },
  {
    _id: "2",
    degree: "Bachelor of Engineering (B.E), Computer Science",
    institution: "BMS College of Engineering",
    location: "Bangalore, India",
    period: "Aug 2018 - Jun 2022",
    gpa: "9.54/10",
    description: "Completed Bachelor's degree in Computer Science with an outstanding CGPA of 9.54/10. Developed strong foundation in software engineering, data structures, algorithms, and full-stack web development. Participated in various projects and gained hands-on experience in modern web technologies and software development practices."
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: 95 }, // Core expertise: Research, data engineering, AI projects
    { name: "SQL", level: 95 }, // Professional use: PostgreSQL pipelines, data quality 99.9%, 400 coding hours
    { name: "JavaScript", level: 90 }, // React.js projects, dashboards
    { name: "Java", level: 85 }, // Listed in skills, good foundation
    { name: "C++", level: 80 }, // Listed in skills
    { name: "HTML/CSS", level: 90 }, // Frontend development experience
    { name: "PHP", level: 75 }, // Listed but less emphasis
    { name: "Groovy", level: 70 }, // Listed but less emphasis
    { name: "Data Structures & Algorithms", level: 95 } // Strong CS background (3.9/4 GPA) - Combined
  ],
  databases: [
    { name: "PostgreSQL", level: 95 }, // Professional use: 2+ years, data pipelines, 99.9% quality
    { name: "MySQL", level: 85 }, // Listed in skills
    { name: "MongoDB", level: 80 }, // NoSQL experience
    { name: "DynamoDB", level: 75 } // AWS service, some experience
  ],
  developerTools: [
    { name: "Git", level: 95 }, // Professional use, version control
    { name: "GitHub", level: 95 }, // Professional use, multiple projects
    { name: "VS Code", level: 90 }, // Primary development environment
    { name: "Docker", level: 90 }, // Professional DevOps experience
    { name: "AWS", level: 90 }, // Professional use: 2+ years, CodePipeline, data pipelines
    { name: "Jenkins", level: 85 }, // CI/CD experience
    { name: "Kubernetes", level: 80 }, // Listed, some experience
    { name: "Linux", level: 90 }, // Professional environment
    { name: "Unix", level: 85 }, // Professional environment
    { name: "Jira", level: 90 }, // Professional Agile use
    { name: "Excel", level: 95 } // Data analysis, professional use
  ],
  frameworks: [
    { name: "React.js", level: 95 }, // Multiple projects: Dashboards, NER system
    { name: "Flask", level: 90 }, // NER system, API development
    { name: "Node.js", level: 90 }, // Backend with React projects
    { name: "Express.js", level: 90 }, // Backend framework
    { name: "TensorFlow", level: 90 }, // AI/ML projects, NER system
    { name: "CNN", level: 85 }, // Machine learning expertise
    { name: "Agile", level: 95 }, // Professional experience, improved efficiency 30%
    { name: "Django", level: 80 }, // Listed but less emphasis
    { name: "Bootstrap", level: 85 }, // Frontend framework
    { name: "Angular", level: 75 } // Listed but less emphasis
    // CAD removed as requested
  ],
  dataVisualization: [
    { name: "Power BI", level: 95 }, // Professional use: 2+ years, dashboards, certified
    { name: "Grafana", level: 90 }, // Professional use: monitoring dashboards
    { name: "Tableau", level: 85 }, // Listed in skills
    { name: "R", level: 80 } // Data analysis tool
  ]
};

export const skillComponentsData = [
  {
    _id: "1",
    skillComponentName: "Languages",
    skillComponentSkills: ["C++", "Java", "Python", "SQL", "HTML/CSS", "JavaScript", "PHP", "Groovy", "Data Structures & Algorithms"],
    skillComponentColor: "#fcbc1d"
  },
  {
    _id: "2",
    skillComponentName: "Databases",
    skillComponentSkills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
    skillComponentColor: "#edeeef"
  },
  {
    _id: "3",
    skillComponentName: "Developer Tools",
    skillComponentSkills: ["VS Code", "GitHub", "Git", "Jira", "Docker", "Kubernetes", "Jenkins", "Linux", "Unix", "Excel"],
    skillComponentColor: "#fcbc1d"
  },
  {
    _id: "4",
    skillComponentName: "Frameworks",
    skillComponentSkills: ["React.js", "Node.js", "Angular", "Django", "Express.js", "Bootstrap", "Flask", "TensorFlow", "CNN", "Agile"],
    skillComponentColor: "#edeeef"
  },
  {
    _id: "5",
    skillComponentName: "Data Visualization",
    skillComponentSkills: ["Power BI", "Grafana", "Tableau", "R"],
    skillComponentColor: "#fcbc1d"
  }
];
