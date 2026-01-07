import { projectsData } from "../data/portfolioData";

// Helper function to convert projectImagePath to projectImages array and projectGitHubLink/projectDemoLink to projectURLs
const transformProjectImages = (project) => {
  // Create projectImages array from projectImagePath if needed
  let projectImages = project.projectImages;
  if (!projectImages || !Array.isArray(projectImages)) {
    const imagePath = project.projectImagePath || "";
    let imageUrl;
    if (imagePath) {
      // Properly encode the image path - encode spaces and special characters
      // Split path and encode only the filename part, keep directory structure
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
      imageUrl = `${process.env.PUBLIC_URL}/images/default-project.webp`;
    }
    projectImages = [imageUrl];
  }
  
  // Create projectURLs object from projectGitHubLink and projectDemoLink
  const projectURLs = {};
  if (project.projectGitHubLink && project.projectGitHubLink.trim() !== "") {
    projectURLs.github = project.projectGitHubLink;
  }
  if (project.projectDemoLink && project.projectDemoLink.trim() !== "") {
    projectURLs.demo = project.projectDemoLink;
  }
  
  // Map projectDescription to projectTagline if projectTagline is not set
  const projectTagline = project.projectTagline && project.projectTagline !== "NA" 
    ? project.projectTagline 
    : (project.projectDescription || "NA");
  
  return {
    ...project,
    projectImages,
    projectURLs,
    projectTagline, // Add projectTagline for display
    likesCount: project.likesCount || 0 // Add default likesCount if missing
  };
};

// Helper function to parse date for sorting
const parseProjectDate = (project) => {
  // Try to parse projectPeriod (e.g., "Jan 2025 - Apr 2025" or "Apr 2025 - May 2025")
  if (project.projectPeriod) {
    const parts = project.projectPeriod.split(" - ");
    if (parts.length > 0) {
      const dateStr = parts[parts.length - 1].trim(); // Take the end date
      // Check if it's just a year (e.g., "2025")
      const yearOnlyMatch = dateStr.match(/^(\d{4})$/);
      if (yearOnlyMatch) {
        const year = parseInt(yearOnlyMatch[1]);
        if (!isNaN(year)) {
          return new Date(year, 11); // December of that year
        }
      }
      // Try to parse month and year (e.g., "Apr 2025")
      const dateMatch = dateStr.match(/([A-Za-z]+)\s+(\d{4})/);
      if (dateMatch) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames.indexOf(dateMatch[1]);
        const year = parseInt(dateMatch[2]);
        if (month !== -1) {
          return new Date(year, month);
        }
      }
    }
  }
  // Fallback to projectYear
  if (project.projectYear) {
    const year = parseInt(project.projectYear);
    if (!isNaN(year)) {
      return new Date(year, 11); // December of that year
    }
  }
  // Default to very old date if no date found
  return new Date(2000, 0);
};

// Fetch all projects, sorted by date (latest first)
export const fetchProjects = async () => {
  const transformed = projectsData.map(transformProjectImages);
  // Sort by date in descending order (latest first)
  return transformed.sort((a, b) => {
    const dateA = parseProjectDate(a);
    const dateB = parseProjectDate(b);
    return dateB - dateA; // Descending order
  });
};

// Fetch a specific project by projectLink
export const fetchProjectByLink = async (projectLink) => {
  const project = projectsData.find(p => p.projectLink === projectLink);
  if (!project) {
    throw new Error("Project not found");
  }
  return transformProjectImages(project);
};
