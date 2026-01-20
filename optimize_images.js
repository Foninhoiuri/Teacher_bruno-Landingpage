import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const FILES = [
    { name: 'Hero_image.webp', width: 800, quality: 75 },
    { name: 'AboutMe.webp', width: 800, quality: 75 },
    { name: 'logo.webp', width: null, quality: 85 }
];

async function optimize() {
    for (const file of FILES) {
        const inputPath = path.join(PUBLIC_DIR, file.name);
        const tempPath = path.join(PUBLIC_DIR, 'temp_' + file.name);

        if (!fs.existsSync(inputPath)) {
            console.error(`File not found: ${inputPath}`);
            continue;
        }

        try {
            console.log(`Optimizing ${file.name}...`);
            let pipeline = sharp(inputPath);

            if (file.width) {
                pipeline = pipeline.resize(file.width);
            }

            await pipeline
                .webp({ quality: file.quality })
                .toFile(tempPath);

            // Replace original
            try {
                fs.unlinkSync(inputPath);
                fs.renameSync(tempPath, inputPath);
                console.log(`✓ Optimized ${file.name}`);
            } catch (err) {
                console.error(`Error replacing ${file.name} (locked?):`, err);
            }

        } catch (error) {
            console.error(`Error optimizing ${file.name}:`, error);
        }
    }
}

optimize();
