const fs = require('fs');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');
const { execFile } = require('child_process');

const VIDEO_DIR = path.join(__dirname, 'src/assets/videos');
const SIZE_LIMIT_MB = 20;

if (!fs.existsSync(VIDEO_DIR)) {
    console.error(`Directory not found: ${VIDEO_DIR}`);
    process.exit(1);
}

console.log(`Scanning ${VIDEO_DIR} for videos larger than ${SIZE_LIMIT_MB} MB...`);

fs.readdir(VIDEO_DIR, (err, files) => {
    if (err) {
        console.error('Error reading video directory:', err);
        return;
    }

    let processing = 0;

    files.forEach(file => {
        if (file.endsWith('.mp4')) {
            const filePath = path.join(VIDEO_DIR, file);
            const stats = fs.statSync(filePath);
            const fileSizeMB = stats.size / (1024 * 1024);

            if (fileSizeMB > SIZE_LIMIT_MB) {
                console.log(`Found large video: ${file} (${fileSizeMB.toFixed(2)} MB)`);
                processing++;
                compressVideo(filePath, () => {
                    processing--;
                    if (processing === 0) {
                        console.log('All compressions finished.');
                    }
                });
            }
        }
    });

    if (processing === 0) {
        console.log('No videos found exceeding the limit.');
    }
});

function compressVideo(inputPath, callback) {
    const tempPath = inputPath.replace('.mp4', '_temp.mp4');

    console.log(`Starting compression for ${path.basename(inputPath)}...`);

    // CRF 28 provides significant compression with acceptable quality loss for web
    // Scaling to 720p (checking height) might also be good if they are 1080p, but CRF is safer generic step.
    const args = [
        '-y',
        '-i', inputPath,
        '-vcodec', 'libx264',
        '-crf', '28',
        '-preset', 'fast',
        '-acodec', 'aac',
        '-b:a', '128k',
        tempPath
    ];

    execFile(ffmpegPath, args, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error compressing ${path.basename(inputPath)}:`, error);
            if (callback) callback();
            return;
        }

        try {
            const newStats = fs.statSync(tempPath);
            const newSizeMB = newStats.size / (1024 * 1024);
            console.log(`Finished ${path.basename(inputPath)} -> ${newSizeMB.toFixed(2)} MB`);

            // Replace original
            fs.unlinkSync(inputPath);
            fs.renameSync(tempPath, inputPath);
            console.log(`Updated ${path.basename(inputPath)}`);
        } catch (e) {
            console.error(`Error replacing file: ${e.message}`);
        }

        if (callback) callback();
    });
}
