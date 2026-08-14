const fs = require('fs');
const path = require('path');

function deleteJsxFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      deleteJsxFiles(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      fs.unlinkSync(fullPath);
      console.log(`Deleted: ${fullPath}`);
    }
  }
}

const targetDir = path.join(__dirname, 'src');
console.log('Scanning for .jsx files to delete...');
deleteJsxFiles(targetDir);
console.log('Cleanup complete! All .jsx files have been removed.');
