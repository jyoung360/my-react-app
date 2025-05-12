const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');
const outputFile = path.join(__dirname, 'src/data/imageList.json');

// Read all files in the images directory
fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Error reading images directory:', err);
        return;
    }

    // Filter for image files (e.g., .jpg, .png, .webp)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

    // Generate the list of image paths
    const imagePaths = imageFiles.map(file => `/images/${file}`);

    // Write the list to a JSON file
    fs.writeFile(outputFile, JSON.stringify(imagePaths, null, 2), err => {
        if (err) {
            console.error('Error writing image list file:', err);
        } else {
            console.log('Image list generated successfully:', outputFile);
        }
    });
});