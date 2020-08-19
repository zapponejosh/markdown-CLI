const inq = require("inquirer");
const fs = require("fs");
const { questions } = require("./questions");


let fileToWrite = "README.md";



const promptOverwrite = () => {
  return new Promise((resolve, reject) => {
    inq
    .prompt([
      {
        type: "confirm",
        name: "overwriteExisting",
        message: "A README.md already exists. Would you like to overwrite it?",
        default: false,
      },
    ])
    .then(function (response) {
      if (response.overwriteExisting) {
        console.log("It will be overwritten!");
        resolve(fileToWrite)
      } else {
        // use alternate filename
        inq
          .prompt([
            {
              type: "input",
              name: "newFilename",
              message: "Enter an alternate filename...",
              default: "README2.md"
            },
          ])
          .then(function (response) {
            //if user doesnt specifcy md file type
            if (response.newFilename.slice(-3) !== ".md") {
              fileToWrite = response.newFilename + ".md";
            } else {
              fileToWrite = response.newFilename;
            }

            fileToWrite = fileToWrite.trim(" ").replace(" ", "-")
            resolve(fileToWrite)
              // console.log(fileToWrite)
          })
          .catch((error) => {
            if (error.isTtyError) {
              reject("Prompt couldn't be rendered in the current environment");
            } else {
              reject(error);
            }
          });
      }
    });
  })
  
};




function getAnswers(doesExist) {
  return new Promise((resolve, reject) => {
    inq
      .prompt(questions)
      .then(async (answers) => {
        console.log(answers);

        if (doesExist) {
          fileToWrite = await promptOverwrite();
        }
        answers.filename = fileToWrite
        resolve(answers)
      })
      .catch((error) => {
        if (error.isTtyError) {
          reject("Prompt couldn't be rendered in the current environment");
        } else {
          reject(error);
        }
      });
  });
};

module.exports = { getAnswers };
