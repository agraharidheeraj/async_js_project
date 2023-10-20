const fs = require('fs').promises;

const convertToLowerCaseAndSplit = async (fileNamesFile) => {
  try {
    const uppercaseData = await fs.readFile('uppercase.txt', 'utf-8');
    const lowercaseData = uppercaseData.toLowerCase();
    const sentences = lowercaseData.split('.');

    for (let i = 0; i < sentences.length; i++) {
      const filename = `sentence${i}.txt`;
      await fs.writeFile(filename, sentences[i], 'utf-8');
      await fs.appendFile(fileNamesFile, filename + '\n', 'utf-8');
    }
  } catch (err) {
    console.error('Error:', err);
  }
};

module.exports = convertToLowerCaseAndSplit;
