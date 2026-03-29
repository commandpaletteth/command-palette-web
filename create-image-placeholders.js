const fs = require('fs');
const https = require('https');
const path = require('path');

// สร้างโฟลเดอร์สำหรับเก็บรูป (ถ้ายังไม่มี)
const targetDir = path.join(__dirname, 'public', 'images', 'works');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// รายชื่อไฟล์รูปจำลองที่ต้องการสร้าง
const images = ['project-1.jpg', 'project-2.jpg', 'project-3.jpg'];

console.log('Downloading placeholder images...');

images.forEach(img => {
    const filePath = path.join(targetDir, img);
    const file = fs.createWriteStream(filePath);
    // ดึงรูป Placeholder ขนาด 800x600 มาเซฟลงเครื่อง
    https.get('https://placehold.co/800x600/png', function(response) {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`✅ Created: /public/images/works/${img}`);
        });
    }).on('error', (err) => {
        fs.unlink(filePath);
        console.error(`❌ Error downloading ${img}:`, err.message);
    });
});