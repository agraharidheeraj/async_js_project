const fs = require('fs').promises;

const deleteFilesInList = async (fileNamesFile) => {
  try {
    const filenamesData = await fs.readFile(fileNamesFile, 'utf-8');
    const filenames = filenamesData.split('\n').filter(Boolean);

    const deletePromises = filenames.map((filename) =>
      fs.unlink(filename.trim()),
    );

    await Promise.all(deletePromises);
    console.log('All files deleted successfully');
  } catch (err) {
    console.error('Error:', err);
  }
};

module.exports = deleteFilesInList;
