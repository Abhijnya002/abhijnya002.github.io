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
    "React": "react",
    "Node.js": "nodejs",
    "Express": "express",
    "AWS": "linux", // Use linux icon as AWS runs on Linux
    "PostgreSQL": "sql", // Use SQL icon for PostgreSQL
    "Power BI": "powerbi",
    "Grafana": "tableau", // Use tableau as similar visualization tool
    "Git": "linux", // Use linux icon for git
    "Docker": "linux", // Use linux icon for docker
    "Data Analysis": "python", // Use python for data analysis
    "Machine Learning": "tensorflow", // Use tensorflow for ML
    "Cloud Computing": "linux", // Use linux for cloud
    "Agile": "javascript", // Default fallback
    "CI/CD": "javascript" // Default fallback
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
