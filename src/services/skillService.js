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
    "Python": "python",
    "SQL": "sql",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "Java": "java",
    "C++": "cpp",
    "HTML/CSS": "css", // CSS icon for HTML/CSS
    "HTML": "css",
    "CSS": "css",
    "React.js": "react",
    "React": "react",
    "Node.js": "nodejs",
    "Express.js": "express",
    "Express": "express",
    "Flask": "flask",
    "Angular": "angular",
    "Django": "python", // Use python icon for Django
    "Bootstrap": "css", // Use CSS icon for Bootstrap
    "TensorFlow": "tensorflow",
    "CNN": "tensorflow", // Use tensorflow for CNN
    "PostgreSQL": "sql", // PostgreSQL uses SQL icon
    "MySQL": "sql",
    "MongoDB": "mongodb",
    "DynamoDB": "mongodb", // DynamoDB uses MongoDB icon
    "Power BI": "powerbi",
    "Grafana": "tableau", // Grafana uses Tableau icon (similar visualization tool)
    "Tableau": "tableau",
    "R": "python", // Use python icon for R
    "Git": "github", // Use GitHub icon for Git
    "GitHub": "github", // Use GitHub icon
    "VS Code": "javascript", // VS Code uses JavaScript icon
    "Docker": "linux", // Docker uses Linux icon
    "AWS": "linux", // AWS uses Linux icon
    "Kubernetes": "linux", // Kubernetes uses Linux icon
    "Jenkins": "javascript", // Jenkins uses JavaScript icon
    "Linux": "linux",
    "Unix": "linux",
    "Jira": "javascript", // Jira uses JavaScript icon
    "Excel": "ms_office",
    "PHP": "javascript", // PHP uses JavaScript icon
    "Data Structures": "dsa", // Data Structures uses DSA icon
    "Algorithms": "cpp", // Algorithms uses C++ icon (algorithmic thinking)
    "Agile": "javascript", // Agile uses JavaScript icon
    "CAD": "javascript"
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
