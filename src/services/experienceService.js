import { experienceData } from "../data/portfolioData";

// Helper function to get company logo URL based on company name
const getCompanyLogo = (companyName) => {
  const logoMap = {
    "Syracuse University": "syracuse-university",
    "Mercedes Benz Research and Development": "mercedes-benz",
    "Mercedes-Benz Research and Development": "mercedes-benz",
    "Amazon Web Services": "aws",
    "AWS": "aws"
  };
  
  // Find matching company name (case-insensitive, partial match)
  const normalizedCompany = companyName.toLowerCase();
  for (const [key, logo] of Object.entries(logoMap)) {
    if (normalizedCompany.includes(key.toLowerCase())) {
      return `${process.env.PUBLIC_URL}/images/logos/${logo}.png`;
    }
  }
  
  // Default logo if no match
  return `${process.env.PUBLIC_URL}/images/logos/default-company.png`;
};

// Helper function to convert experienceImagePath to experienceImages array
const transformExperienceImages = (experience) => {
  // Create experienceImages array from experienceImagePath if needed
  let experienceImages = experience.experienceImages;
  if (!experienceImages || !Array.isArray(experienceImages)) {
    const imagePath = experience.experienceImagePath || "";
    const imageUrl = imagePath 
      ? `${process.env.PUBLIC_URL}/images/${imagePath}.webp`
      : `${process.env.PUBLIC_URL}/images/default-experience.webp`;
    experienceImages = [imageUrl];
  }
  
  // Create experienceURLs object from experienceGitHubLink and experienceDemoLink if they exist
  const experienceURLs = {};
  if (experience.experienceGitHubLink && experience.experienceGitHubLink.trim() !== "") {
    experienceURLs.github = experience.experienceGitHubLink;
  }
  if (experience.experienceDemoLink && experience.experienceDemoLink.trim() !== "") {
    experienceURLs.demo = experience.experienceDemoLink;
  }
  
  // Transform experienceHighlights to experienceParagraphs if needed
  let experienceParagraphs = experience.experienceParagraphs;
  if (!experienceParagraphs && experience.experienceHighlights && Array.isArray(experience.experienceHighlights)) {
    experienceParagraphs = experience.experienceHighlights;
  }
  
  return {
    ...experience,
    experienceImages,
    experienceURLs,
    experienceParagraphs: experienceParagraphs || [],
    companyLogo: experience.companyLogo || getCompanyLogo(experience.experienceCompany || ""),
    experienceSubTitle: experience.experienceSubTitle || experience.experienceCompany || "",
    experienceTimeline: experience.experienceTimeline || experience.experiencePeriod || "",
    experienceTagline: experience.experienceTagline || experience.experienceDescription || ""
  };
};

// Fetch all experiences
export const fetchExperiences = async () => {
  return experienceData.map(transformExperienceImages);
};

// Fetch a specific experience by experienceLink
export const fetchExperienceByLink = async (experienceLink) => {
  const experience = experienceData.find(e => e.experienceLink === experienceLink);
  if (!experience) {
    throw new Error("Experience not found");
  }
  return transformExperienceImages(experience);
};
