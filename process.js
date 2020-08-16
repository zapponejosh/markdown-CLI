// const template = require("./MDTemplate")


const listParse = (string) => {
    let array = []
    string.split(/\s*,\s*/).forEach(function(item) {
        if (!item) {
            return;
        } else {
            array.push(item);
        }
    });
    return array;
}

const processInput = (userInput) => {
    return new Promise((resolve, reject) => {
        if (userInput) {
            
            let stackList = listParse(userInput.stack)
            let images = listParse(userInput.screenshots)
            let contributors = listParse(userInput.contributors)
            const answers = 
            {
                title: userInput.project_title,
                description: userInput.description,
                tech: stackList,
                images: images,
                url: userInput.deployment_url,
                install: userInput.installation,
                usage: userInput.usage,
                testing: userInput.testing,
                contributors: contributors,
                email: userInput.email,
                licenseType: userInput.license,
                year: userInput.current_year,
                fullname: userInput.fullname,
                githubUser: userInput.github_username,
                filename: userInput.filename
            }
            resolve(answers)
        } else {
            reject("error")
        }
    })
}

// let testInput = {
//     fullname: 'dfndbf',
//     current_year: 'bdf',
//     project_title: 'ghmg b',
//     description: 'gb',
//     stack: 'bvd, node, bootstrap, express',
//     deployment_url: 'dbf',
//     screenshots: '',
//     installation: '',
//     usage: '',
//     license: 'MIT',
//     contributors: '',
//     testing: '',
//     github_username: '',
//     email: '',
//     filename: 'README.md'
//   }

// processInput(testInput)

module.exports = processInput;