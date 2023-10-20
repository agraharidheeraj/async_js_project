const fs = require('fs');
const path = require('path');

const directoryPath = '../async_js_exercises/data';
const fileNames = ['file1.json', 'file2.json', 'file3.json'];

// Function to create a file
function createFileUsingCallback(directory, fileName, callback) {
  const filePath = path.join(directory, fileName);
  const createRandomFile = JSON.stringify({ createRandomFile: Math.random() });

  fs.writeFile(filePath, createRandomFile, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `${fileName} is created successfully`);
    }
  });
}

// Function to delete a file
function deleteFileUsingCallback(directory, fileName, callback) {
  const filePath = path.join(directory, fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `${fileName} is deleted successfully`);
    }
  });
}

// Usage of the both functions
function createAndDeleteFiles() {
  let currentIndex = 0;

  function createNextFile() {
    if (currentIndex < fileNames.length) {
      createFileUsingCallback(
        directoryPath,
        fileNames[currentIndex],
        (err, result) => {
          if (err) {
            console.error(`Error creating ${fileNames[currentIndex]}:`, err);
          } else {
            console.log(result);
            currentIndex++;
            createNextFile();
          }
        },
      );
    } else {
      deleteNextFile();
    }
  }

  function deleteNextFile() {
    if (currentIndex > 0) {
      currentIndex--;
      deleteFileUsingCallback(
        directoryPath,
        fileNames[currentIndex],
        (err, result) => {
          if (err) {
            console.error(`Error deleting ${fileNames[currentIndex]}:`, err);
          } else {
            console.log(result);
            deleteNextFile();
          }
        },
      );
    }
  }

  createNextFile();
}

createAndDeleteFiles();
