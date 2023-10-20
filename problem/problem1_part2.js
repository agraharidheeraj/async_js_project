const fs = require('fs');
const path = require('path');

const directoryPath = '../async_js_exercises/data';
const fileNames = ['file1.json', 'file2.json', 'file3.json'];

// Function to create a file
function createFileUsingCallbackAndPromise(directory, fileName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(directory, fileName);
    const createRandomFile = JSON.stringify({
      createRandomFile: Math.random(),
    });

    fs.writeFile(filePath, createRandomFile, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`${fileName} is created successfully`);
      }
    });
  });
}

// Function to delete a file
function deleteFileUsingCallbackAndPromise(directory, fileName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(directory, fileName);

    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`${fileName} is deleted successfully`);
      }
    });
  });
}

// Usage of both functions
function createAndDeleteFiles() {
  let currentIndex = 0;

  function createNextFile() {
    if (currentIndex < fileNames.length) {
      createFileUsingCallbackAndPromise(directoryPath, fileNames[currentIndex])
        .then((resolve) => {
          console.log(resolve);
          currentIndex++;
          createNextFile();
        })
        .catch((err) => {
          console.error(`Error creating ${fileNames[currentIndex]}:`, err);
        });
    } else {
      deleteNextFile();
    }
  }
  function deleteNextFile() {
    if (currentIndex > 0) {
      currentIndex--;
      deleteFileUsingCallbackAndPromise(directoryPath, fileNames[currentIndex])
        .then((resolve) => {
          console.log(resolve);
          deleteNextFile();
        })
        .catch((err) => {
          console.error(`Error deleting ${fileNames[currentIndex]}:`, err);
        });
    }
  }

  createNextFile();
}

createAndDeleteFiles();
