# Background Image Setup Instructions

## Data-Related Background Image

The AboutPage (home section) now uses a data-related background image.

### To add your background image:

1. **Find or create a data-related image** (examples:
   - Data visualization dashboards
   - Analytics graphs/charts
   - Data networks/connections
   - Database schemas
   - Code/data visualizations
   - Abstract data patterns

2. **Save the image as:** `data-bg.webp`
   - Location: `/public/data-bg.webp`
   - Format: WebP (recommended) or JPG/PNG
   - Recommended size: 1920x1080 or larger

3. **Alternative formats:**
   - If you use JPG: Change `data-bg.webp` to `data-bg.jpg` in `src/styles/AboutPage.css`
   - If you use PNG: Change `data-bg.webp` to `data-bg.png` in `src/styles/AboutPage.css`

### Current Background Settings:
- Dark overlay gradient for text readability
- Fixed attachment (parallax effect)
- Center positioned
- Cover sizing (fills entire viewport)

The background is applied to the AboutPage section which is now your homepage (id="home").
