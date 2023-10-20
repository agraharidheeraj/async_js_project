const readAndConvertToUppercase = require('./readAndConvertToUppercase.js');
const convertToLowerCaseAndSplit = require('./convertToLowerCaseAndSplit.js');
const sortAndWriteToFile = require('./ReadAndsortAndWriteToFile.js');
const deleteFilesInList = require('./deleteAllNewFiles.js');

const lipsumFile = './problem2/lipsum.txt';
const fileNamesFile = './problem2/filenames.txt';

async function main() {
  await readAndConvertToUppercase(lipsumFile, fileNamesFile);
  await convertToLowerCaseAndSplit(fileNamesFile);
  await sortAndWriteToFile(fileNamesFile);
  await deleteFilesInList(fileNamesFile);
}

main();
