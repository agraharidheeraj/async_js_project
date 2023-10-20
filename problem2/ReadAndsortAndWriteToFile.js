const fs = require('fs').promises;

const sortAndWriteToFile = async (fileNamesFile) => {
  try {
    const filenamesData = await fs.readFile(fileNamesFile, 'utf-8');
    const filenames = filenamesData.split('\n').filter(Boolean);

    let sortedContent = '';

    for (const filename of filenames) {
      const content = await fs.readFile(filename.trim(), 'utf-8');
      sortedContent += content;
    }

    sortedContent = sortedContent.split('\n').sort().join('\n');
    await fs.writeFile('sorted.txt', sortedContent, 'utf-8');
    await fs.appendFile(fileNamesFile, 'sorted.txt', 'utf-8');
  } catch (err) {
    console.error('Error:', err);
  }
};

module.exports = sortAndWriteToFile;
