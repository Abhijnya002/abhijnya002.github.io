# Video Background for Home Page

## File Location:
Place your video file in the **`/public/`** folder (same level as `index.html`)

## Required Filename:
**`home-bg-video.mp4`**

## Full Path:
```
/public/home-bg-video.mp4
```

## Video Specifications (Recommended):
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9 (or match your screen)
- **File Size**: Keep it optimized (under 10-20MB if possible for faster loading)
- **Duration**: Can be any length (will loop automatically)

## Features:
- ✅ Auto-plays when page loads
- ✅ Loops continuously
- ✅ Muted by default (required for autoplay)
- ✅ Scales and blurs on scroll (same effect as image background)
- ✅ Falls back to image background if video doesn't load

## Steps:
1. Save your video as `home-bg-video.mp4`
2. Place it in the `/public/` folder
3. The video will automatically be used as the background!

## If you want to use a different filename:
Update line ~133 in `src/components/HomePage/HomePage.js`:
- Change: `home-bg-video.mp4`
- To: `your-video-name.mp4`

## Video Optimization Tips:
- Use compression tools (like HandBrake) to reduce file size
- Consider using WebM format for better compression (would need code update)
- Test on different devices to ensure smooth playback

