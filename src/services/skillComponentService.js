import { skillComponentsData } from "../data/portfolioData";

// Transform skillComponentsData to match expected SkillGraph format
// SkillGraph expects: { skillTitle, skillDescription, Labels: [], Scores: [] }
export const fetchSkillsComponents = async () => {
  // Transform the data to match the expected format
  return skillComponentsData.map((component) => {
    // Convert skillComponentSkills array into Labels and Scores
    // For now, assign default scores (4.0-5.0 range) based on position
    const skills = component.skillComponentSkills || [];
    const baseScore = 4.5; // Base score
    const scoreVariation = 0.3; // Small variation
    
    const Labels = skills;
    const Scores = skills.map((_, index) => {
      // Add small variation based on index to make it more interesting
      const variation = (index % 3) * 0.1 - 0.1; // -0.1, 0, 0.1
      return (baseScore + variation).toFixed(1);
    });

    return {
      id: component._id,
      skillTitle: component.skillComponentName,
      skillDescription: `Expertise in ${component.skillComponentName.toLowerCase()}`,
      Labels: Labels,
      Scores: Scores,
      color: component.skillComponentColor
    };
  });
};
