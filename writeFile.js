const fs = require("fs");

const writeToFile = (mdText, filename) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, mdText, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve("Success!");
    });
  });
};

module.exports = writeToFile;
