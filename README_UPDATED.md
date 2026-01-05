# Abhijnya K.G Portfolio - Setup Complete! 🎉

I've successfully copied Kartavya's portfolio structure and replaced all personal information with yours. The codebase is now ready for you to populate with your content!

## ✅ What's Been Done

1. **Complete Codebase Copied** - All of Kartavya's MERN stack portfolio code
2. **All Personal Information Replaced**:
   - Name: "Kartavya Singh" → "Abhijnya Konanduru Gurumurthy" / "Abhijnya K.G"
   - GitHub: "Kartavya904" → "Abhijnya002"
   - All AI Companion references updated
   - Meta tags and HTML title updated
   - Footer and navigation updated

3. **Content Updates**:
   - HomePage keywords updated to your tagline
   - About page bio replaced with your description
   - Social links updated (GitHub done, others need your URLs)

## 📁 Project Structure

```
Porfolio_Latest/
├── frontend (src/)          # React frontend
│   ├── components/          # All React components
│   ├── styles/             # CSS files
│   ├── services/           # API services
│   └── assets/             # Images, fonts, resume
├── backend/                # Node.js/Fastify backend
│   ├── controllers/        # API controllers
│   ├── routes/            # API routes
│   └── config/            # MongoDB & OpenAI config
└── public/                # Static assets
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

### 2. Set Up Environment Variables

Create `.env` in `/backend/`:
```env
PORT=5000
MONGO_URI="your_mongodb_connection_string"
OPENAI_API_KEY="your_openai_key"  # Optional, for AI Companion
GITHUB_TOKEN="your_github_token"  # Optional
```

### 3. Add Your Images

Place these files in `/public/`:
- `Abhijnya.webp` - Main profile photo (replaces Kartavya.webp)
- `Abhijnya-Profile-Photo.webp` - About page photo
- `home-bg.webp` - Background image (or use existing)

### 4. Add Your Resume

Place your resume PDF in `/src/assets/` and update the import in:
- `src/components/AboutPage/AboutPage.js`
- `src/components/SpecialComponents/NavBar.js`

### 5. Update Social Links

Edit these files to add your actual URLs:
- `src/components/SpecialComponents/Footer.js`
- `src/components/SpecialComponents/Links.js`

Update:
- LinkedIn URL
- Email address
- Other social media links

### 6. Populate MongoDB Database

This portfolio uses MongoDB to store all content. You'll need to create collections and add your data:

**Collections needed:**
- `projectTable` - Your projects
- `experienceTable` - Work experience  
- `involvementTable` - Involvements/extracurriculars
- `honorsExperienceTable` - Honors/awards
- `skillTable` - Skills
- `skillComponentTable` - Skill components

See `CONTENT_REPLACEMENT.md` for details on the data structure.

### 7. Run the Application

```bash
# Terminal 1 - Backend (MUST start first)
cd backend
npm start

# Terminal 2 - Frontend
cd ..  # (back to root)
npm start
```

Visit `http://localhost:3000`

## 📝 Important Files to Customize

1. **About Page Stats** - `src/components/AboutPage/AboutPage.js`
   - Update coding hours, project count, etc.

2. **NavBar Brand** - `src/components/SpecialComponents/NavBar.js`
   - Already updated to "Abhijnya K.G"

3. **HomePage Keywords** - `src/components/HomePage/HomePage.js`
   - Already updated with your tagline

## 🎨 Features Included

✅ Landing page with parallax background  
✅ About section with spotlight effect  
✅ Skills page with interactive graphs  
✅ Projects showcase with modals  
✅ Experience timeline  
✅ Contact page  
✅ AI Companion chatbot (requires OpenAI API)  
✅ Responsive design  
✅ Smooth animations (Framer Motion)  
✅ All transitions preserved from original  

## 📚 Reference

- Original Repository: https://github.com/Kartavya904/Kartavya-Portfolio-MERN
- Your Portfolio Reference: https://github.com/Abhijnya002/abhijnya002.github.io

## 🔧 Next Steps

1. ✅ Code structure copied
2. ✅ Personal info replaced  
3. ⏳ Add your images
4. ⏳ Set up MongoDB and populate data
5. ⏳ Update social links
6. ⏳ Add your resume
7. ⏳ Test locally
8. ⏳ Deploy!

See `CONTENT_REPLACEMENT.md` for detailed checklist of remaining items.

---

**Note:** The portfolio data (projects, experience, skills) is stored in MongoDB, not in code files. You'll need to either:
- Set up MongoDB and add your data manually, OR
- Use the admin panel (when running) to add data through the UI

The structure is ready - just add your content! 🚀

