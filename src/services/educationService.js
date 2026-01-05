import { educationData } from "../data/portfolioData";

// Helper function to get institution logo URL based on institution name
const getInstitutionLogo = (institutionName) => {
  const logoMap = {
    "Syracuse University": "syracuse-university",
    "BMS College of Engineering": "bms-college",
  };
  
  // Find matching institution name (case-insensitive, partial match)
  const normalizedInstitution = institutionName.toLowerCase();
  for (const [key, logo] of Object.entries(logoMap)) {
    if (normalizedInstitution.includes(key.toLowerCase())) {
      return `${process.env.PUBLIC_URL}/images/logos/${logo}.png`;
    }
  }
  
  // Default logo if no match
  return `${process.env.PUBLIC_URL}/images/logos/default-company.png`;
};

// Transform education data
const transformEducation = (education) => {
  return {
    ...education,
    institutionLogo: education.institutionLogo || getInstitutionLogo(education.institution || ""),
  };
};

// Fetch all education entries
export const fetchEducation = async () => {
  return educationData.map(transformEducation);
};

// Fetch a specific education entry by _id
export const fetchEducationById = async (id) => {
  const education = educationData.find(e => e._id === id);
  if (!education) {
    throw new Error("Education entry not found");
  }
  return transformEducation(education);
};

