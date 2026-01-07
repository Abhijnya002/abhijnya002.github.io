import { skillsData } from "../data/portfolioData";

// Helper function to convert level to proficiency
const levelToProficiency = (level) => {
  if (level >= 80) return "proficient";
  if (level >= 60) return "intermediate";
  return "beginner";
};

// Helper function to get skill logo name (simple mapping)
// Uses available icons from icons.js, falls back to similar icons
const getSkillLogo = (skillName) => {
  const logoMap = {
    // Languages
    "Python": "python",
    "SQL": "sql",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "Java": "java",
    "C++": "cpp",
    "HTML/CSS": "html", // Use HTML icon for HTML/CSS combo
    "HTML": "html",
    "CSS": "css",
    "PHP": "php",
    "Data Structures": "dsa",
    "Algorithms": "cpp",
    
    // Frameworks
    "React.js": "react",
    "React": "react",
    "Node.js": "nodejs",
    "Express.js": "express",
    "Express": "express",
    "Flask": "flask",
    "Angular": "angular",
    "Django": "django",
    "Bootstrap": "css",
    "TensorFlow": "tensorflow",
    "CNN": "tensorflow",
    "Agile": "agile",
    
    // Databases
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "DynamoDB": "dynamodb",
    
    // Developer Tools
    "Git": "git",
    "GitHub": "github",
    "VS Code": "vscode",
    "Docker": "docker",
    "AWS": "aws",
    "Kubernetes": "kubernetes",
    "Jenkins": "jenkins",
    "Linux": "linux",
    "Unix": "linux",
    "Jira": "jira",
    "Excel": "ms_office",
    
    // Data Visualization
    "Power BI": "powerbi",
    "Grafana": "grafana",
    "Tableau": "tableau",
    "R": "r",
  };
  return logoMap[skillName] || "javascript"; // Default to javascript if not found
};

// Transform skillsData object into array format expected by SkillSection
export const fetchSkills = async () => {
      const categoryMap = {
        languages: {
          title: "Languages",
          description: "Programming languages I work with"
        },
        databases: {
          title: "Databases",
          description: "Database technologies I use"
        },
        developerTools: {
          title: "Developer Tools",
          description: "Tools and technologies in my toolkit"
        },
        frameworks: {
          title: "Frameworks",
          description: "Frameworks and libraries I use for development"
        },
        dataVisualization: {
          title: "Data Visualization",
          description: "Data visualization tools I work with"
        }
      };

  return Object.keys(skillsData).map((key) => {
    const category = categoryMap[key] || { title: key, description: "" };
    return {
      title: category.title,
      description: category.description,
      skills: skillsData[key].map((skill) => ({
        name: skill.name,
        proficiency: levelToProficiency(skill.level),
        logo: getSkillLogo(skill.name),
        level: skill.level // Keep level for reference
      }))
    };
  });
};
