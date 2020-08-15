/* 
PSEUDOCODE:

this is meant to be a global NPM package. The readme will be created in cwd

1. check to see if there is a README.md file in the directory.
2. if not we will create one but if there is the user can either rename existing file or rename the generated file


*/

const figlet = require('figlet');
const colors = require('colors');
const fs = require('fs');
// const { resolve } = require('path');
const { createREADME } = require('./generate');
const { fileToWrite } = require('./generate');
const generate = require('./generate');

function getFileInfo() {
    return new Promise ((resolve, reject) => {
        fs.access('README.md', fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false)
                return;
            } else {
                resolve(true)
            }
            reject(err)
        }) 
    })
}


// CLI title
function createTitle(text) {
    return new Promise((resolve, reject) => {
        figlet.text(text , {
            font: 'alligator',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 120,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                reject(err)
                return;
            }
            console.log(data.rainbow);
            resolve();
        });
    })
}

function generateText(ans) {
    console.log("here")
}

async function init() {
    await createTitle('README Generator!');
    let doesExist = await getFileInfo();
    console.log("\n\n\nLet's begin!\n\n\n")
    await createREADME(doesExist);
    console.log(fileToWrite)

}

init()