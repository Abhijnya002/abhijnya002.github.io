import { honorsExperienceData } from "../data/portfolioData";

// Helper function to transform honors experience images
const transformHonorsExperienceImages = (experience) => {
  // Create honorsExperienceImages array from honorsExperienceImagePath if needed
  let honorsExperienceImages = experience.honorsExperienceImages;
  if (!honorsExperienceImages || !Array.isArray(honorsExperienceImages)) {
    const imagePath = experience.honorsExperienceImagePath || "";
    const imageUrl = imagePath 
      ? `${process.env.PUBLIC_URL}/images/${imagePath}.webp`
      : `${process.env.PUBLIC_URL}/images/default-experience.webp`;
    honorsExperienceImages = [imageUrl];
  }
  
  // Create honorsExperienceURLs object from honorsExperienceGitHubLink and honorsExperienceDemoLink if they exist
  const honorsExperienceURLs = {};
  if (experience.honorsExperienceGitHubLink && experience.honorsExperienceGitHubLink.trim() !== "") {
    honorsExperienceURLs.github = experience.honorsExperienceGitHubLink;
  }
  if (experience.honorsExperienceDemoLink && experience.honorsExperienceDemoLink.trim() !== "") {
    honorsExperienceURLs.demo = experience.honorsExperienceDemoLink;
  }
  
  // Transform honorsExperienceDescription to honorsExperienceParagraphs array if needed
  let honorsExperienceParagraphs = experience.honorsExperienceParagraphs;
  if (!honorsExperienceParagraphs && experience.honorsExperienceDescription) {
    honorsExperienceParagraphs = [experience.honorsExperienceDescription];
  }
  
  return {
    ...experience,
    honorsExperienceImages,
    honorsExperienceURLs,
    honorsExperienceParagraphs: honorsExperienceParagraphs || [],
    honorsExperienceSubTitle: experience.honorsExperienceSubTitle || experience.honorsExperienceCompany || "",
    honorsExperienceTimeline: experience.honorsExperienceTimeline || experience.honorsExperiencePeriod || "",
    honorsExperienceTagline: experience.honorsExperienceTagline || experience.honorsExperienceDescription || ""
  };
};

// Fetch all Honors Experiences
export const fetchHonorsExperiences = async () => {
  return honorsExperienceData.map(transformHonorsExperienceImages);
};

// Fetch a specific Honors Experience by honorsExperienceLink
export const fetchHonorsExperienceByLink = async (honorsExperienceLink) => {
  const experience = honorsExperienceData.find(e => e.honorsExperienceLink === honorsExperienceLink);
  if (!experience) {
    throw new Error("Honors Experience not found");
  }
  return transformHonorsExperienceImages(experience);
};
