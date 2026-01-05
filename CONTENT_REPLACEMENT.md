# Content Replacement Guide

This document tracks what has been replaced and what still needs to be done.

## ✅ Completed Replacements

### Frontend Components
1. **HomePage.js** - Name, keywords, profile image reference
2. **AboutPage.js** - Name, bio, description, role
3. **App.js** - AI Companion title
4. **Footer.js** - Name, tagline, social links (GitHub updated)
5. **All components** - "Kartavya" → "Abhijnya" using batch replacement
6. **public/index.html** - Meta tags, title

### Backend Routes
1. **dataRoutes.js** - GitHub username updated

## 📝 Still Need Manual Updates

### Images & Assets
- Replace profile photos in `/public/`:
  - `Kartavya.webp` → `Abhijnya.webp`
  - `Kartavya-Profile-Photo.webp` → `Abhijnya-Profile-Photo.webp`
  - `home-bg.webp` - Update with your background image

### Resume Files
- Replace resume files in `/src/assets/`:
  - Current: `Singh_Kartavya_Resume2026.pdf`
  - Should be: Your resume PDF

### MongoDB Database
You'll need to populate the MongoDB database with your data. The backend expects collections:
- `projectTable` - Your projects
- `experienceTable` - Your work experience
- `involvementTable` - Your involvements/extracurriculars
- `honorsExperienceTable` - Your honors/awards
- `skillTable` - Your skills
- `skillComponentTable` - Skill components
- `yearInReviewTable` - Year in review posts (optional)
- `feedTable` - Feed posts (optional)

### Social Links
Update in `Footer.js` and `Links.js`:
- LinkedIn URL (currently "#")
- Instagram URL (currently "#") 
- Discord URL (currently "#")
- Email address (currently "your.email@example.com")
- Calendly URL (if you have one)

### About Page Stats
Update the stats in `AboutPage.js`:
```javascript
const aboutData = [
  {
    icon: "bx bxs-hourglass about-icon",
    title: "Coding Hours",
    subtitle: "1300+ Hours", // Update with your stats
  },
  {
    icon: "bx bx-trophy about-icon",
    title: "Completed",
    subtitle: "42+ Projects", // Update with your project count
  },
  {
    icon: "bx bx-support about-icon",
    title: "LeetCode", // Or change to something relevant
    subtitle: "246+ Solutions", // Update or change metric
  },
];
```

### AdminTab.js
- Update OTP service name from "Kartavya's OTP Service" to "Abhijnya's OTP Service"
- Update greeting message

## 🔧 Backend Setup

1. Create `.env` file in `/backend/`:
```env
PORT=5000
MONGO_URI="your_mongodb_connection_string"
OPENAI_API_KEY="your_openai_api_key" (optional, for AI Companion)
GITHUB_TOKEN="your_github_pat" (optional)
```

2. Populate MongoDB with your data structure matching Kartavya's schema

## 🎨 Next Steps

1. Add your profile images to `/public/`
2. Add your resume PDF to `/src/assets/`
3. Update all social media links
4. Set up MongoDB and populate with your data
5. Test the application locally
6. Update any remaining hardcoded content

