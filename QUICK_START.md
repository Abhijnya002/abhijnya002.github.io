# 🚀 Quick Start Guide

## ✅ What's Already Done

1. **Codebase copied** - Complete MERN stack portfolio from Kartavya's repository
2. **All personal info replaced**:
   - Name: "Abhijnya Konanduru Gurumurthy" / "Abhijnya K.G"
   - GitHub: "Abhijnya002"
   - Bio and descriptions updated
   - Social links placeholder updated

3. **49 files updated** - All React components, HTML, and backend routes

## ⚡ Quick Setup (5 Steps)

### Step 1: Install Dependencies
```bash
# Frontend
npm install

# Backend  
cd backend
npm install
cd ..
```

### Step 2: Add Your Images
Place these in `/public/`:
- `Abhijnya.webp` (main profile photo)
- `Abhijnya-Profile-Photo.webp` (about page photo)
- Update `home-bg.webp` if you want custom background

### Step 3: Add Your Resume
- Place your resume PDF in `/src/assets/`
- Update imports in `AboutPage.js` and `NavBar.js` to point to your file

### Step 4: Set Up Backend
Create `/backend/.env`:
```env
PORT=5000
MONGO_URI="your_mongodb_connection_string"
OPENAI_API_KEY="optional_for_ai_companion"
GITHUB_TOKEN="optional"
```

### Step 5: Update Social Links
Edit these files:
- `src/components/SpecialComponents/Footer.js`
- `src/components/SpecialComponents/Links.js`

Update email, LinkedIn, and other social media URLs.

## 📊 MongoDB Data Population

**Important:** This portfolio stores ALL content (projects, experience, skills) in MongoDB, not in code files.

### Option 1: Use Admin Panel (Easier)
1. Start backend: `cd backend && npm start`
2. Start frontend: `npm start`
3. Navigate to your site
4. Click "Admin" button
5. Login and use the admin interface to add:
   - Projects
   - Experience
   - Skills
   - Honors/Involvements

### Option 2: Direct MongoDB Import
You'll need to create documents matching Kartavya's schema. Collections needed:
- `projectTable`
- `experienceTable`  
- `skillTable`
- `skillComponentTable`
- `involvementTable` (optional)
- `honorsExperienceTable` (optional)

## 🎯 Next Steps Checklist

- [ ] Install dependencies (frontend & backend)
- [ ] Add profile images to `/public/`
- [ ] Add resume PDF to `/src/assets/`
- [ ] Create `.env` file in `/backend/`
- [ ] Set up MongoDB database
- [ ] Update social media links
- [ ] Populate MongoDB with your data
- [ ] Update About page stats (coding hours, project count)
- [ ] Test locally
- [ ] Deploy!

## 📁 Important Files Reference

- **HomePage**: `src/components/HomePage/HomePage.js`
- **About Page**: `src/components/AboutPage/AboutPage.js`
- **NavBar**: `src/components/SpecialComponents/NavBar.js`
- **Footer**: `src/components/SpecialComponents/Footer.js`
- **Meta Tags**: `public/index.html`

## 🔍 Verify Installation

```bash
# Test backend
cd backend
npm start
# Should see: "Server is running on port 5000"

# Test frontend (in new terminal)
cd ..
npm start
# Should open http://localhost:3000
```

## 📚 Documentation

- `README_UPDATED.md` - Full setup guide
- `CONTENT_REPLACEMENT.md` - Detailed replacement checklist
- Original repo: https://github.com/Kartavya904/Kartavya-Portfolio-MERN

---

**Note:** All transitions, animations, and styling from the original portfolio are preserved. You just need to add your content! 🎨

