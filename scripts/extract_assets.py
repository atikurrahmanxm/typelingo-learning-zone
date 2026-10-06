import subprocess
import imageio_ffmpeg
from PIL import Image
import os

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
os.makedirs('public/audio', exist_ok=True)
os.makedirs('public/images', exist_ok=True)

# 1. Extract chime from video around 00:02.1 to 00:03.2
subprocess.run([
    ffmpeg, '-ss', '00:00:02.1', '-i', 'WhatsApp Video 2026-10-06 at 10.04.28 PM.mp4',
    '-t', '1.1', '-c:a', 'libmp3lame', '-b:a', '128k', 'public/audio/success_chime.mp3', '-y'
])

# 2. Extract celebration fanfare from 00:16.8 to 00:18.8
subprocess.run([
    ffmpeg, '-ss', '00:00:16.8', '-i', 'WhatsApp Video 2026-10-06 at 10.04.28 PM.mp4',
    '-t', '2.0', '-c:a', 'libmp3lame', '-b:a', '128k', 'public/audio/celebration.mp3', '-y'
])

# 3. Crop cover from frame_18.png
if os.path.exists('scratch/frames/frame_18.png'):
    im = Image.open('scratch/frames/frame_18.png')
    w, h = im.size
    # In frame 18, the HELLO card image is located in the left modal card:
    # coordinates approximately: x: 0.18*w to 0.47*w, y: 0.20*h to 0.32*h
    left = int(w * 0.175)
    top = int(h * 0.195)
    right = int(w * 0.475)
    bottom = int(h * 0.315)
    cropped = im.crop((left, top, right, bottom))
    cropped.save('public/images/restart-english-cover.png')
    print("Extracted cover image!")

print("Audio and images extracted successfully!")
