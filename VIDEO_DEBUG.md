# Video Background Debugging

## If video is not showing:

1. **Check Browser Console** (F12):
   - Look for any errors related to video loading
   - Check if the video file path is correct

2. **Verify File Location**:
   - File should be at: `/public/home-bg-video.mp4`
   - Check file permissions

3. **Hard Refresh**:
   - Windows/Linux: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
   - This clears browser cache

4. **Check Video Format**:
   - Video must be MP4 (H.264 codec)
   - The file you have is valid MP4 ✓

5. **Browser Autoplay Policy**:
   - Video must be muted to autoplay (already set ✓)
   - Some browsers block autoplay - try refreshing

6. **Clear Build Cache**:
   - Stop the dev server
   - Delete `node_modules/.cache` folder
   - Restart: `npm start`
