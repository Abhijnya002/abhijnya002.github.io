# Abhijnya K.G Portfolio - Frontend Only

A beautiful portfolio website built with React, using Kartavya's template structure with your personal content. This is a **frontend-only** version - no backend required!

## ✨ Features

- 🎨 Beautiful animations and transitions (Framer Motion)
- 📱 Fully responsive design
- 🚀 Fast static site - no backend needed
- 💫 Parallax effects and smooth scrolling
- 🎯 All your portfolio sections included
- ⚡ Optimized performance

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── HomePage/       # Landing page with hero section
│   ├── AboutPage/      # About section
│   ├── SkillPage/      # Skills showcase
│   ├── ProjectPage/    # Projects gallery
│   ├── ExperiencePage/ # Work experience & honors
│   ├── ContactPage/    # Contact form
│   └── SpecialComponents/ # NavBar, Footer, Links, etc.
├── data/
│   └── portfolioData.js  # All your portfolio data (static)
├── services/           # Service functions (now return static data)
├── styles/            # CSS files
└── assets/            # Images, fonts, resume
```

## 📝 Edit Your Content

All your portfolio data is in **`src/data/portfolioData.js`**. Edit this file to update:

- **Projects** - `projectsData` array
- **Experience** - `experienceData` array  
- **Honors/Awards** - `honorsExperienceData` array
- **Skills** - `skillsData` object
- **Skill Components** - `skillComponentsData` array

## 🎨 Customization

### Add Your Images

Place these in `/public/`:
- `Abhijnya.webp` - Main profile photo
- `Abhijnya-Profile-Photo.webp` - About page photo
- `home-bg.webp` - Background image

### Update Social Links

Edit `src/components/SpecialComponents/Footer.js` and `Links.js`:
- GitHub: Already set to your profile
- LinkedIn: Update the URL
- Email: Update the email address

### Add Your Resume

1. Place your resume PDF in `/src/assets/`
2. Update imports in:
   - `src/components/AboutPage/AboutPage.js`
   - `src/components/SpecialComponents/NavBar.js`

### Update About Page Stats

Edit `src/components/AboutPage/AboutPage.js` - update the `aboutData` array with your stats.

## 📦 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repo to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Technologies Used

- React 18
- Framer Motion (animations)
- React Spring
- React Type Animation
- CSS3
- Font Awesome Icons

## 📚 Sections Included

✅ **Home Page** - Hero section with profile and AI companion input  
✅ **About** - Your bio, stats, and resume download  
✅ **Skills** - Interactive skills showcase  
✅ **Projects** - Projects gallery with modals  
✅ **Experience** - Work experience timeline  
✅ **Honors** - Awards and achievements  
✅ **Contact** - Contact form (EmailJS)  

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Update content in `portfolioData.js`
3. ⏳ Add your images
4. ⏳ Add your resume
5. ⏳ Update social links
6. ⏳ Customize colors/styling (optional)
7. ⏳ Test locally
8. ⏳ Deploy!

## 📄 License

This portfolio is based on Kartavya's template structure. All animations, transitions, and design elements are preserved.

---

**Need help?** Check the code comments or refer to the original template structure.
