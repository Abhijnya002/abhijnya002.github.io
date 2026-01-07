// Static portfolio data - extracted from https://abhijnya002.github.io/

export const projectsData = [
  {
    _id: "1",
    projectTitle: "Healthcare Named Entity Recognition System",
    projectLink: "healthcare-ner",
    projectDescription: "Developed an end-to-end Named Entity Recognition system using BioBERT to extract disease and chemical entities from biomedical text, outperforming rule-based and BiLSTM-CRF baselines. Built a complete ML pipeline including preprocessing, baseline modeling, transformer fine-tuning, and precision/recall/F1 evaluation. Productionized the model using a Flask REST API and integrated a React dashboard featuring live predictions, confusion matrices, and interactive visual analytics.",
    projectTech: ["Python", "PyTorch", "BioBERT", "Flask", "React", "Transformers", "spaCy", "Recharts"],
    projectHighlights: [
      "AI-powered biomedical NER system using BioBERT to extract disease and chemical entities",
      "Outperformed rule-based and BiLSTM-CRF baselines with complete ML pipeline",
      "Productionized using Flask REST API with React dashboard for real-time analytics",
      "Interactive visualizations including confusion matrices and live predictions"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/Named-Entity-Recognition-for-Medical-Text",
    projectDemoLink: "https://medical-ner-dashboard.vercel.app/",
    projectImagePath: "projectTable/Healthcare Named Entity Recognition System",
    projectYear: "2025",
    projectPeriod: "Oct 2025 – Nov 2025",
    featured: true
  },
  {
    _id: "2",
    projectTitle: "IoT Attack Detection & Visualization System",
    projectLink: "iot-attack-detection",
    projectDescription: "Built an intrusion detection system for IoT networks using the CICIDS2017 dataset, evaluating multiple ML models including Random Forest, SVM, CNN, LSTM, and Autoencoders. Identified Random Forest as the most effective model for tabular IoT data and applied SHAP explainability to highlight attack-driving features. Developed an interactive dashboard to visualize model performance, confusion matrices, and feature importance, supporting deployment and security analysis decisions.",
    projectTech: ["Python", "Machine Learning", "Random Forest", "SHAP", "CICIDS2017", "Data Visualization"],
    projectHighlights: [
      "Machine learning–based IoT intrusion detection system with explainable AI",
      "Evaluated multiple ML models (Random Forest, SVM, CNN, LSTM, Autoencoders)",
      "Applied SHAP explainability to highlight attack-driving features",
      "Interactive dashboard for model performance and feature importance visualization"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/IOT-attack-detection-and-visualization-system",
    projectDemoLink: "",
    projectImagePath: "projectTable/IoT Attack Detection & Visualization System",
    projectYear: "2025",
    projectPeriod: "Feb 2025 – Apr 2025",
    featured: true
  },
  {
    _id: "3",
    projectTitle: "AI-Powered Website Cloner",
    projectLink: "ai-powered-web-cloner",
    projectDescription: "Developed a website cloning tool that scrapes HTML/CSS context from public websites and regenerates layouts using LLMs. Implemented browser-based scraping with Playwright to handle JavaScript-heavy pages and orchestrated backend processing using FastAPI. Built a responsive Next.js interface with live iframe previews, raw HTML inspection, dark/light mode, and smooth loading animations for an intuitive user experience.",
    projectTech: ["Next.js", "TypeScript", "FastAPI", "Python", "Playwright", "LLM", "Tailwind CSS"],
    projectHighlights: [
      "Full-stack AI tool that clones public websites by scraping and regenerating layouts using LLMs",
      "Browser-based scraping with Playwright for JavaScript-heavy pages",
      "Responsive Next.js interface with live iframe previews and dark/light mode",
      "Smooth loading animations and intuitive user experience"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/Web-cloner",
    projectDemoLink: "",
    projectImagePath: "projectTable/AI-Powered Website Cloner",
    projectYear: "2025",
    projectPeriod: "Aug 2025 – Sep 2025",
    featured: true
  },
  {
    _id: "4",
    projectTitle: "AI-Powered Data Extraction & Structuring",
    projectLink: "ai-powered-data-extraction",
    projectDescription: "Built an LLM-powered pipeline to transform unstructured renovation meeting transcripts into structured, actionable Scope of Work data. Used Flan-T5 and DistilBART-CNN to extract tasks, generate concise titles and summaries, categorize work items, and map informal budget mentions into standardized formats. Enabled scalable export to formatted Excel reports using OpenPyXL, reducing manual review time and improving documentation accuracy.",
    projectTech: ["Python", "Flask", "LLM", "Flan-T5", "DistilBART-CNN", "React", "Tailwind CSS", "OpenPyXL"],
    projectHighlights: [
      "AI system that converts unstructured renovation transcripts into structured Excel-based Scope of Work reports",
      "Used Flan-T5 and DistilBART-CNN for task extraction and summarization",
      "Scalable export to formatted Excel reports using OpenPyXL",
      "Reduced manual review time and improved documentation accuracy"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/AI-powered-data-extracter",
    projectDemoLink: "https://ai-powered-data-extracter.vercel.app/",
    projectImagePath: "projectTable/AI-Powered Data Extraction & Structuring",
    projectYear: "2025",
    projectPeriod: "Feb 2025 – Apr 2025",
    featured: true
  },
  {
    _id: "5",
    projectTitle: "Threat Intelligence Dashboard",
    projectLink: "threat-intelligence-dashboard",
    projectDescription: "Developed a threat intelligence dashboard using the AlienVault OTX API to visualize and analyze real-time cyber threat indicators. Implemented advanced filtering, dynamic charts, dark/light mode, and CSV export to streamline threat analysis workflows. Built with React (Vite), Recharts, and custom CSS animations to deliver a responsive and visually engaging interface for security teams.",
    projectTech: ["React.js", "Vite", "Recharts", "AlienVault OTX API", "CSS Animations"],
    projectHighlights: [
      "Interactive cyber threat intelligence dashboard powered by AlienVault OTX with real-time visual analytics",
      "Advanced filtering, dynamic charts, and dark/light mode toggle",
      "CSV export functionality for threat analysis workflows",
      "Responsive and visually engaging interface for security teams"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/CTI-Dashboard",
    projectDemoLink: "https://abhijnya002.github.io/CTI-Dashboard/",
    projectImagePath: "projectTable/Threat Intelligence Dashboard",
    projectYear: "2025",
    projectPeriod: "Apr 2025 – May 2025",
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
    { name: "Data Structures", level: 95 }, // Strong CS background (3.9/4 GPA) - Split
    { name: "Algorithms", level: 95 } // Strong CS background (3.9/4 GPA) - Split
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
    skillComponentSkills: ["C++", "Java", "Python", "SQL", "HTML/CSS", "JavaScript", "PHP", "Data Structures", "Algorithms"],
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
