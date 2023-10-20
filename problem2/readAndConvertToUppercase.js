const fs = require('fs').promises;

const readAndConvertToUppercase = async (lipsumFile, fileNamesFile) => {
  try {
    const data = await fs.readFile(lipsumFile, 'utf-8');
    const uppercaseData = data.toUpperCase();
    await fs.writeFile('uppercase.txt', uppercaseData, 'utf-8');
    await fs.writeFile(fileNamesFile, 'uppercase.txt\n', 'utf-8');
  } catch (err) {
    console.error('Error:', err);
  }
};

module.exports = readAndConvertToUppercase;
