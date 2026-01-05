import { involvementData } from "../data/portfolioData";

// Helper function to transform involvement images
const transformInvolvementImages = (involvement) => {
  // If involvementImages already exists, return as is
  if (involvement.involvementImages && Array.isArray(involvement.involvementImages)) {
    return involvement;
  }
  
  // Otherwise, create involvementImages array from involvementImagePath
  const imagePath = involvement.involvementImagePath || "";
  const imageUrl = imagePath 
    ? `${process.env.PUBLIC_URL}/images/${imagePath}.webp`
    : `${process.env.PUBLIC_URL}/images/default-experience.webp`;
  
  return {
    ...involvement,
    involvementImages: [imageUrl]
  };
};

// Fetch all involvements
export const fetchInvolvements = async () => {
  return involvementData.map(transformInvolvementImages);
};

// Fetch a specific involvement by involvementLink
export const fetchInvolvementByLink = async (involvementLink) => {
  const involvement = involvementData.find(i => i.involvementLink === involvementLink);
  if (!involvement) {
    throw new Error("Involvement not found");
  }
  return transformInvolvementImages(involvement);
};
