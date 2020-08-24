ffmpeg -framerate 1 -r 0.1 -sn -i it\'s\ already\ here%1d.jpg -c:v libx264 -profile:v high -crf 20 -pix_fmt yuv420p output.mp4
