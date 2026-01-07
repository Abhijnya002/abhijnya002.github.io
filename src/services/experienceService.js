import { experienceData } from "../data/portfolioData";

// Helper function to get company logo URL based on company name
const getCompanyLogo = (companyName) => {
  if (!companyName) {
    return `${process.env.PUBLIC_URL}/images/logos/default-company.png`;
  }
  
  const logoMap = {
    "Syracuse University": "syracuse-university",
    "Mercedes Benz Research and Development": "mercedes-benz",
    "Mercedes-Benz Research and Development": "mercedes-benz",
    "Mercedes-Benz Research & Development": "mercedes-benz",
    "Mercedes-Benz Research & Development India": "mercedes-benz",
    "Samsung R&D Institute India": "samsung",
    "Samsung R and D Institute India": "samsung",
    "Samsung": "samsung",
    "Amazon Web Services": "aws",
    "AWS": "aws"
  };
  
  // Normalize company name: lowercase and handle variations
  const normalizedCompany = companyName.toLowerCase().replace(/r&d/gi, "r and d").replace(/r & d/gi, "r and d");
  
  // Check for exact matches first (more specific)
  for (const [key, logo] of Object.entries(logoMap)) {
    const normalizedKey = key.toLowerCase().replace(/r&d/gi, "r and d").replace(/r & d/gi, "r and d");
    if (normalizedCompany.includes(normalizedKey) || normalizedKey.includes(normalizedCompany)) {
      return `${process.env.PUBLIC_URL}/images/logos/${logo}.png`;
    }
  }
  
  // Check for "Samsung" specifically as a fallback
  if (normalizedCompany.includes("samsung")) {
    return `${process.env.PUBLIC_URL}/images/logos/samsung.png`;
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
    let imageUrl;
    if (imagePath) {
      // Properly encode the image path - encode spaces and special characters
      const pathParts = imagePath.split("/");
      const fileName = pathParts[pathParts.length - 1];
      const directory = pathParts.slice(0, -1).join("/");
      
      // Encode filename (handles spaces, &, etc.)
      const encodedFileName = encodeURIComponent(fileName + ".webp");
      
      // Reconstruct path with encoded filename
      if (directory) {
        imageUrl = `${process.env.PUBLIC_URL}/images/${directory}/${encodedFileName}`;
      } else {
        imageUrl = `${process.env.PUBLIC_URL}/images/${encodedFileName}`;
      }
    } else {
      imageUrl = `${process.env.PUBLIC_URL}/images/default-experience.webp`;
    }
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
