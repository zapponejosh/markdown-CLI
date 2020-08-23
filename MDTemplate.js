const fs = require("fs");


const replaceDefault = (data, year, fullname) => {
    let withInfo = data.replace("<year>", year);
    withInfo = withInfo.replace("<fullname>", fullname)
    return withInfo;
}

const getLicense = (license, year, fullname) => {
    return new Promise((resolve, reject) => {
        switch (license) {
            case 'MIT':
                fs.readFile('licenses/MIT.txt', 'utf8', (err, data) => {
                    if (err) reject(err);
                    // console.log(data);
                    let licenseText = replaceDefault(data, year, fullname)
                    resolve(licenseText)
                  });
                break;
            case 'ICS':
                fs.readFile('licenses/ICS.txt', 'utf8', (err, data) => {
                    if (err) reject(err);
                    let licenseText = replaceDefault(data, year, fullname)
                    resolve(licenseText)
                    });
                break;
            case 'Mozilla Public License 2.0':
                fs.readFile('licenses/MPL.txt', 'utf8', (err, data) => {
                    if (err) reject(err);
                    resolve(data)
                    });
                break;
            case 'Unilicense':
                fs.readFile('licenses/UNI.txt', 'utf8', (err, data) => {
                    if (err) reject(err);
                    resolve(data)
                    });
                break;

            default:
                reject("Error: Could not find license " + license)
                break;
        }
    })
}

// getLicense('MT')

function templatetize (answers) {

  return new Promise(async (resovle, reject) =>  {
    let imageList = ''
    answers.images.forEach(item => {
        imageList += `![screenshot](${item})\n`
    })


    const makeList = (array) => {
        let formattedList = ''
        array.forEach(item => {
            formattedList += `* ${item}\n`
        })
        return formattedList;
    }

    // make md list from arrays
    let techList = makeList(answers.tech);
    let contributorList = makeList(answers.contributors)
    
 
    // get license text and input year and name
    let licenseText = await getLicense(answers.licenseType, answers.year, answers.fullname)

    //Optional answers
    // deployed
    if (answers.url === "Not deployed") {
        isDeployed = ''
    } else {
        isDeployed = `## Deployment
        **[Find this project deployed here](${answers.url})**
        `
    }

    // contributors
    if (answers.contributors == 'none') {
        hasContributors = '## Contact'
    } else {
        hasContributors = `## Contributors and Contact
        ${contributorList}
        `
    }

    //testing
    if (answers.testing == 'none') {
        hasTesting = ''
    } else {
        hasTesting = `## Testing
        \`\`\`${answers.testing}\`\`\`
        `
    }

  

    
   
    let result = `# ${answers.title}
### Table of contents
* [Tech stack](#tech-stack)
* [Preview](#preview)
* [Deployment](#deployment)
* [Installation and Usage](#installation-and-usage)
* [Testing](#testing)
* [Contributors and Contact](#contributors-and-contact)
* [License](#license)
${answers.description}
## Tech Stack
${techList}
## Preview
${imageList}
${isDeployed}
## Installation and Usage
\`\`\`${answers.install}\`\`\`
\`\`\`${answers.usage}\`\`\`
${hasTesting}
${hasContributors}
**Email questions: [${answers.email}](mailto:${answers.email})**
### License
${licenseText}
`;
    
    if (!result || undefined) {
      reject("Something went wrong");
    } else {
        resovle(result);
    }
  });
};


module.exports = templatetize;