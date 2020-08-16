const figlet = require('figlet');
const colors = require('colors');
const fs = require('fs');
const { getAnswers } = require('./generate');
const processInput = require('./process')
const templatetize = require('./MDTemplate')
const writeToFile = require('./writeFile')

// is there an existing readme file?
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


async function init() {
    await createTitle('README Generator!');
    let doesExist = await getFileInfo();
    console.log("\n\n\nLet's begin!\n\n\n");
    let userInput = await getAnswers(doesExist);
    let result = await processInput(userInput);
    let finalText = await templatetize(result)
    await writeToFile(finalText, result.filename).then(response => {
        console.log(response)
        if (response === 'Success!') {
            console.log(result.filename + " was created. You're all set!")
        }
    })

}

init()

