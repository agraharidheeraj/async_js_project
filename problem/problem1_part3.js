const fs = require('fs').promises;
const path = require('path');

const directoryPath = '../async_js_exercises/data';
const fileNames = ['file1.json', 'file2.json', 'file3.json'];

async function createAndDeleteFilesUsingAsync() {
  try {
    for (const fileName of fileNames) {
      const filePath = path.join(directoryPath, fileName);
      const createRandomFile = JSON.stringify({
        createRandomFile: Math.random(),
      });

      // Create a file
      await fs.writeFile(filePath, createRandomFile);
      console.log(`${fileName} is created successfully`);

      // Delete the file
      await fs.unlink(filePath);
      console.log(`${fileName} is deleted successfully`);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

createAndDeleteFilesUsingAsync();
