# Portfolio Setup Guide

## ✅ What's Been Completed

1. **Complete React Project Structure** - Set up with TypeScript
2. **All Components Created:**
   - LandingPage (with AI companion interface)
   - Navbar (responsive with scroll detection)
   - About section
   - Experience section
   - Education section
   - Projects section
   - Skills section
   - Contact section
   - LinksMenu (social links)
   - ScrollToTop button

3. **Styling** - CSS matches reference site (kartavya-singh.com):
   - Montserrat font (weights 400, 500, 700)
   - Color scheme: #212529 (background), #edeeef (text), #fcbc1d (accent)
   - Responsive breakpoints matching reference
   - Animations and transitions

4. **Your Content** - All sections populated with your portfolio data:
   - Personal information
   - Experience (Research Assistant, Data Analysis Engineer, Student Trainee)
   - Education (M.S. in Computer Science - Syracuse University)
   - Projects (IoT, CTI Dashboard, Web Cloner, Event Management, Math Solver)
   - Skills (languages, frameworks, tools, concepts)

## 📝 Next Steps

### 1. Add Your Profile Image
- Place your profile image in `/public/profile.jpg`
- Or update the path in `src/components/LandingPage.tsx` (line 14)

### 2. Update Contact Information
Edit `src/data/portfolio.ts`:
- Add your email address
- Add your LinkedIn URL (if you have one)

### 3. Customize Landing Page Background
- Update the background image URL in `src/components/LandingPage.css` (line 15)
- Or use a local image from `/public/` folder

### 4. Test the Site
```bash
npm start
```
- Test all navigation links
- Check responsive behavior on mobile
- Verify all animations and transitions
- Test scroll behavior

### 5. Fine-Tune (if needed)
Compare with the reference site (kartavya-singh.com) and adjust:
- Spacing and margins
- Animation timings
- Font sizes
- Section layouts

### 6. Deploy
```bash
npm run build
```
Then deploy the `build` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎨 Design Notes

- Colors match reference exactly: #fcbc1d (gold), #212529 (dark bg), #edeeef (text)
- Fonts: Montserrat from Google Fonts
- Layout: Matches reference site structure
- Animations: Smooth scroll, hover effects, transitions
- Responsive: Mobile-first approach with breakpoints at 576px, 768px, 992px

## 📁 File Structure

```
src/
├── components/
│   ├── About.tsx & .css
│   ├── Contact.tsx & .css
│   ├── Education.tsx & .css
│   ├── Experience.tsx & .css
│   ├── LandingPage.tsx & .css
│   ├── LinksMenu.tsx & .css
│   ├── Navbar.tsx & .css
│   ├── Projects.tsx & .css
│   ├── ScrollToTop.tsx & .css
│   └── Skills.tsx & .css
├── data/
│   └── portfolio.ts (Your content data)
├── App.tsx
├── App.css (Global styles)
└── index.tsx
```

## 🔧 Customization

All your content is in `src/data/portfolio.ts`. Edit this file to update:
- Personal information
- Experience entries
- Education details
- Projects
- Skills
- Social links

