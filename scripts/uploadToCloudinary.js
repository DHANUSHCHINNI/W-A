// scripts/uploadToCloudinary.js
const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config({ path: '.env.local' }); // Load env vars

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
    { file: 'gsahw.png', public_id: 'gsahw' },
    { file: 'IAFP.jpg', public_id: 'iafp' },
    { file: 'IAWMH.jpg', public_id: 'iawmh' },
    { file: 'NADTA.webp', public_id: 'nadta' },
    { file: 'stamma.svg', public_id: 'stamma' },
    { file: 'CMTAI.jpg', public_id: 'cmtai' },
    { file: 'BADth.jpg', public_id: 'badth' },
    { file: 'BAATN.jpg', public_id: 'baatn' },
    { file: 'ourstory2.jpeg', public_id: 'ourstory2' },
    { file: 'ourstory3.jpeg', public_id: 'ourstory3' },
    { file: 'OurStoryfin1.JPG', public_id: 'ourstoryfin1' },
    { file: 'OurStoryfin2.JPG', public_id: 'ourstoryfin2' },
    { file: 'PB1.jpg', public_id: 'pb1' },
    { file: 'PB2.jpg', public_id: 'pb2' },
    { file: 'PB4.jpg', public_id: 'pb4' },
    { file: 'PB6.jpg', public_id: 'pb6' },
    { file: 'TMC1.jpg', public_id: 'tmc1' },
    { file: 'TMC2.jpg', public_id: 'tmc2' },
    { file: 'TMC4.jpg', public_id: 'tmc4' },
    { file: 'TMC5.jpg', public_id: 'tmc5' },
    { file: 'KritijaHeadshot.jpg', public_id: 'kritijaHeadshot' },
    { file: 'AHHeadshot.JPG', public_id: 'AHHeadshot' },
    { file: 'CorporateHub1.jpg', public_id: 'corporatehub1' },
    { file: 'CorporateHub2.jpg', public_id: 'corporatehub2' },
    { file: 'CorporateHub3.JPG', public_id: 'corporatehub3' },
    { file: 'CorporateHub7.jpg', public_id: 'corporatehub7' },
    { file: 'R&DHub1.jpg', public_id: 'RnDHub1' },
    { file: 'TrainingHub1.jpg', public_id: 'traininghub1' },
    { file: 'TrainingHub2.jpg', public_id: 'traininghub2' },
    { file: 'TrainingHub3.jpg', public_id: 'traininghub3' },
    { file: 'TrainingHub4.JPG', public_id: 'traininghub4' },
    { file: 'TrainingHub5.JPG', public_id: 'traininghub5' },
];

(async () => {
    for (const img of images) {
        const localImagePath = path.join(__dirname, '../src/app/assets/', img.file);
        try {
            const result = await cloudinary.uploader.upload(localImagePath, { public_id: img.public_id });
            console.log(`${img.file} uploaded: ${result.secure_url}`);
        } catch (error) {
            console.error(`${img.file} upload error:`, error.message || error);
        }
    }
})(); 