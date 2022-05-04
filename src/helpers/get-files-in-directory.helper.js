const fs = require("fs");

class FileData {
  constructor(nameReduced, fileName) {
    this.nameReduced = nameReduced;
    this.fileName = fileName;
  }

  getFilesName = (path) => {
    let fileDataList = [];
    fs.readdirSync(path).forEach(function (fileName) {
      const nameReduced = fileName.split(".")[0];
      fileDataList.push(new FileData(nameReduced, fileName));
    });
    return fileDataList;
  };
}

module.exports = FileData 
