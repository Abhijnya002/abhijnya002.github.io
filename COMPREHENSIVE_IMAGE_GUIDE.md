# Comprehensive Image Placement Guide

## Image Format
- **Preferred Format**: WebP (best performance)
- **Alternative Formats**: PNG, JPG (also supported)
- **Recommended Size**: 1200x800px or similar aspect ratio for projects
- **Recommended Size**: 800x600px or similar for achievements

---

## 📁 Project Images

All project images should be placed in: **`public/images/projectTable/`**

### Image Naming Convention
Use the exact project title from `portfolioData.js` with `.webp` extension (or `.png`/`.jpg`)

### Projects List:

1. **IoT Environmental Monitoring System**
   - File Name: `IoT Environmental Monitoring System.webp`
   - Location: `public/images/projectTable/IoT Environmental Monitoring System.webp`

2. **Threat Intelligence Dashboard**
   - File Name: `Threat Intelligence Dashboard.webp`
   - Location: `public/images/projectTable/Threat Intelligence Dashboard.webp`

3. **AI-Powered Data Extraction & Structuring**
   - File Name: `AI-Powered Data Extraction & Structuring.webp`
   - Location: `public/images/projectTable/AI-Powered Data Extraction & Structuring.webp`

4. **Medical Text Named Entity Recognition**
   - File Name: `Medical Text NER.webp`
   - Location: `public/images/projectTable/Medical Text NER.webp`
   - Note: Use the Healthcare NER Dashboard image you provided

5. **AI-Powered Web Cloner**
   - File Name: `AI-Powered Web Cloner.webp`
   - Location: `public/images/projectTable/AI-Powered Web Cloner.webp`

6. **College Event Management System**
   - File Name: `College Event Management System.webp`
   - Location: `public/images/projectTable/College Event Management System.webp`

7. **Handwritten Math Solver**
   - File Name: `Handwritten Math Solver.webp`
   - Location: `public/images/projectTable/Handwritten Math Solver.webp`

---

## 🏆 Achievement/Award Images

All achievement images should be placed in: **`public/images/honorsExperienceTable/`**

### Image Naming Convention
Use the exact title from `portfolioData.js` with `.webp` extension (or `.png`/`.jpg`)

### Achievements List:

1. **BRONZE STAR Award**
   - File Name: `BRONZE STAR Award.webp`
   - Location: `public/images/honorsExperienceTable/BRONZE STAR Award.webp`

2. **AWS re:Invent All Builders Welcome Grant**
   - File Name: `AWS Grant.webp`
   - Location: `public/images/honorsExperienceTable/AWS Grant.webp`

---

## 🎓 Education Logo

### BMS College of Engineering Logo
- File Name: `bms-college.png`
- Location: `public/images/logos/bms-college.png`
- Format: PNG (as provided)
- Note: This logo will automatically display in the Education section

---

## 📝 Quick Reference

### Directory Structure:
```
public/
  images/
    projectTable/
      IoT Environmental Monitoring System.webp
      Threat Intelligence Dashboard.webp
      AI-Powered Data Extraction & Structuring.webp
      Medical Text NER.webp
      AI-Powered Web Cloner.webp
      College Event Management System.webp
      Handwritten Math Solver.webp
    honorsExperienceTable/
      BRONZE STAR Award.webp
      AWS Grant.webp
    logos/
      bms-college.png
      syracuse-university.png
      mercedes-benz.png
```

---

## ✅ After Adding Images

1. **Test Locally**: Run `npm start` to verify images display correctly
2. **Commit Changes**: 
   ```bash
   git add public/images/
   git commit -m "Add project and achievement images"
   git push origin main
   ```
3. **Deploy**: Run `npm run deploy` to update GitHub Pages

---

## 💡 Tips

- Use descriptive, high-quality images that represent your projects well
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep file sizes reasonable (under 500KB per image when possible)
- Ensure images are clear and professional
- For projects, screenshots or mockups work best
- For achievements, use official logos or award certificates

---

## 🔍 Verification

After adding images, check:
- [ ] All project images display in the Projects section
- [ ] All achievement images display in the Honors section
- [ ] BMS logo displays in the Education section
- [ ] Images load quickly and look good on mobile devices


