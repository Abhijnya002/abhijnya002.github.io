// Static portfolio data - extracted from https://abhijnya002.github.io/

export const projectsData = [
  {
    _id: "1",
    projectTitle: "IoT Environmental Monitoring System",
    projectLink: "iot-environmental-monitoring",
    projectDescription: "Developed an IoT-based environmental monitoring system that simulates real-time temperature, humidity, and CO2 sensors using MQTT protocol and ThingSpeak for cloud-based data storage and visualization",
    projectTech: ["Python", "MQTT", "ThingSpeak", "IoT", "Cloud Computing"],
    projectHighlights: [
      "Virtual sensors for temperature, humidity, and CO2 levels",
      "MQTT protocol for efficient data transmission",
      "ThingSpeak cloud platform for data storage and visualization",
      "Real-time sensor data retrieval and historical data analysis"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/IOT-project",
    projectDemoLink: "",
    projectImagePath: "projectTable/IoT Environmental Monitoring System",
    projectYear: "2025",
    projectPeriod: "Feb 2025 - Apr 2025",
    featured: true
  },
  {
    _id: "2",
    projectTitle: "Threat Intelligence Dashboard",
    projectLink: "cti-dashboard",
    projectDescription: "Built an interactive Cyber Threat Intelligence (CTI) dashboard using React.js and the AlienVault OTX API. This comprehensive security dashboard provides real-time threat intelligence visualization with multi-filtering capabilities, dynamic charts (Pie, Bar, Line), and a dark/light mode toggle. The dashboard enables security teams to analyze cyber threats effectively, track threat indicators, and improve situational awareness. Features include CSV export functionality, REST API integration, and custom CSS animations for enhanced user experience.",
    projectTech: ["React.js", "Cyber-Security", "AlienVault OTX API", "CSS Animations"],
    projectHighlights: [
      "Built with React.js (Vite) & Recharts with REST API integration",
      "Integrated dynamic visualizations (Pie, Bar, Line charts)",
      "Enhanced security team workflows and cyber situational awareness"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/CTI-Dashboard",
    projectDemoLink: "https://abhijnya002.github.io/CTI-Dashboard/",
    projectImagePath: "projectTable/Threat Intelligence Dashboard",
    projectYear: "2025",
    projectPeriod: "Apr 2025 - May 2025",
    featured: true
  },
  {
    _id: "3",
    projectTitle: "AI-Powered Data Extraction & Structuring",
    projectLink: "ai-powered-data-extracter",
    projectDescription: "Built a full-stack LLM-powered tool that transforms unstructured DOCX transcripts into structured Excel reports containing tasks, budgets, and responsibilities. The system automatically extracts task-like sentences, budget mentions, drawing references, and responsible leads from unstructured documents using advanced natural language processing. It generates clean summaries and concise task titles using LLMs (Flan-T5, DistilBART-CNN, TinyGPT-2), and exports professionally styled Excel reports with categories, budgets, comments, and drawing references. The application features graceful degradation with regex fallbacks for resource-constrained environments and is optimized for zero-GPU deployment on Vercel.",
    projectTech: ["Python", "Flask", "Pandas", "OpenPyXL", "Regex", "LLM", "React", "Tailwind CSS", "TypeScript"],
    projectHighlights: [
      "Used Flan-T5 and DistilBART-CNN to extract structured tasks, summaries, and stakeholder info from renovation transcripts",
      "Integrated frontend (React + Tailwind) with Flask API and zero-GPU LLM inference for cost-effective deployment",
      "Exported professional Excel reports with styling, categorization, and NLP-driven content using OpenPyXL",
      "Implemented graceful degradation using regex and zero-shot fallback when LLMs are unavailable"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/AI-powered-data-extracter",
    projectDemoLink: "https://ai-powered-data-extracter.vercel.app/",
    projectImagePath: "projectTable/AI-Powered Data Extraction & Structuring",
    projectYear: "2025",
    projectPeriod: "Jan 2025 - Apr 2025",
    featured: true
  },
  {
    _id: "4",
    projectTitle: "Medical Text Named Entity Recognition",
    projectLink: "medical-ner",
    projectDescription: "Fine-tuned BioBERT model for disease and chemical entity extraction, outperforming rule-based and BiLSTM-CRF models with 85.14% F1. Productionized via Flask API and React dashboard with live predictions and metrics.",
    projectTech: ["React", "Flask", "Python", "PyTorch", "Transformers", "BioBERT", "spaCy", "seqeval", "Recharts"],
    projectHighlights: [
      "Achieved 85.14% overall F1-score, with 89.75% F1 on chemical entities and 79.74% on diseases",
      "Outperformed traditional rule-based and BiLSTM-CRF baselines using fine-tuned BioBERT model",
      "Built complete ML pipeline from data preprocessing to transformer fine-tuning and evaluation",
      "Productionized via Flask REST API for real-time predictions with React dashboard integration",
      "Delivered polished full-stack ML application with live entity detection and interactive visualizations"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/Named-Entity-Recognition-for-Medical-Text",
    projectDemoLink: "https://medical-ner-dashboard.vercel.app/",
    projectImagePath: "projectTable/Medical Text NER",
    projectYear: "2025",
    projectPeriod: "2025",
    featured: true
  },
  {
    _id: "5",
    projectTitle: "AI-Powered Web Cloner",
    projectLink: "ai-powered-web-cloner",
    projectDescription: "A full-stack AI-driven website cloning tool that scrapes and regenerates HTML/CSS design using Large Language Models for rapid prototyping and UI mimicry. Built with Next.js 15, TypeScript, Tailwind CSS, FastAPI, Python, Playwright, BeautifulSoup, and Hugging Face's Zephyr-7B model, this application enables developers to clone public websites by scraping HTML/CSS structure and generating regenerated code via AI. The tool features an animated, responsive UI with light/dark mode toggle, live HTML rendering in iframe, comprehensive error handling, loader animations, and persistent user preferences for seamless development workflow.",
    projectTech: ["Next.js 15", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Playwright", "BeautifulSoup", "Zephyr-7B", "Hugging Face API"],
    projectHighlights: [
      "Clones public websites by scraping HTML/CSS via Playwright and generating regenerated code via Hugging Face's Zephyr-7B model",
      "Built animated, responsive UI with light/dark mode toggle and live HTML rendering in iframe",
      "Implemented error handling, loader animations, and persistent preferences for seamless UX",
      "Integrated FastAPI backend for scraping and HTML generation endpoints"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/Web-cloner",
    projectDemoLink: "",
    projectImagePath: "projectTable/AI-Powered Web Cloner",
    projectYear: "2025",
    projectPeriod: "Jan 2025 - Apr 2025",
    featured: true
  },
  {
    _id: "6",
    projectTitle: "College Event Management System",
    projectLink: "college-event-management",
    projectDescription: "A comprehensive full-stack web application providing secure login functionality for core members to manage and update event details. Built with HTML/CSS, Bootstrap, React.js, Node.js, and MongoDB, this system streamlines college event organization by enabling users to register for events, explore club activities, and manage event information. The application incorporates accounting functions for financial tracking and reporting, ensures secure data transfer with backend validation and error handling, and provides an intuitive interface for event coordinators to efficiently manage college activities and engagements.",
    projectTech: ["HTML/CSS", "Bootstrap", "React.JS", "Node.JS", "MongoDB"],
    projectHighlights: [
      "Incorporated accounting functions for financial tracking and reporting",
      "Enabled users to register for events and explore club activities",
      "Ensured secure data transfer with backend validation and error handling"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/College-Event-Mangement-System-",
    projectDemoLink: "",
    projectImagePath: "projectTable/College Event Management System",
    projectYear: "2021",
    projectPeriod: "Sep 2020 - Jan 2021",
    featured: false
  },
  {
    _id: "7",
    projectTitle: "Handwritten Math Solver",
    projectLink: "handwritten-math-solver",
    projectDescription: "An advanced machine learning project that achieves 97-99% accuracy in recognizing handwritten alphabets and numbers using deep learning techniques. Built with Python, Keras, CNN (Convolutional Neural Networks), TensorFlow, and PyTorch, this system processes handwritten mathematical equations and characters. The project demonstrates expertise in computer vision, neural network optimization, and model training for diverse handwriting styles. A Flask-based web interface allows users to upload images for prediction, making the system accessible and user-friendly for solving handwritten mathematical problems.",
    projectTech: ["Python", "Keras", "CNN", "Tensorflow", "PyTorch", "Machine Learning", "Flask"],
    projectHighlights: [
      "Optimized model for diverse handwriting styles",
      "Built Flask-based web interface for image upload and prediction"
    ],
    projectGitHubLink: "https://github.com/Abhijnya002/Handwritten-Maths-solver",
    projectDemoLink: "",
    projectImagePath: "projectTable/Handwritten Math Solver",
    projectYear: "2021",
    projectPeriod: "Aug 2021 - Sep 2021",
    featured: false
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
  // Add your involvements/extracurriculars here if any
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
    { name: "SQL", level: 95 }, // Professional use: PostgreSQL pipelines, data quality 99.9%
    { name: "JavaScript", level: 90 }, // React.js projects, dashboards
    { name: "Java", level: 85 }, // Listed in skills, good foundation
    { name: "C++", level: 80 }, // Listed in skills
    { name: "HTML/CSS", level: 90 }, // Frontend development experience
    { name: "PHP", level: 75 }, // Listed but less emphasis
    { name: "Groovy", level: 70 }, // Listed but less emphasis
    { name: "Data Structures", level: 95 }, // Strong CS background (3.9/4 GPA)
    { name: "Algorithms", level: 95 } // Strong CS background (3.9/4 GPA)
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
    { name: "Angular", level: 75 }, // Listed but less emphasis
    { name: "CAD", level: 70 } // Listed but less emphasis
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
    skillComponentSkills: ["C++", "Java", "Python", "SQL", "HTML/CSS", "JavaScript", "PHP", "Groovy", "Data Structures", "Algorithms"],
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
    skillComponentSkills: ["React.js", "Node.js", "Angular", "Django", "Express.js", "Bootstrap", "Flask", "TensorFlow", "CNN", "Agile", "CAD"],
    skillComponentColor: "#edeeef"
  },
  {
    _id: "5",
    skillComponentName: "Data Visualization",
    skillComponentSkills: ["Power BI", "Grafana", "Tableau", "R"],
    skillComponentColor: "#fcbc1d"
  }
];
