// const answers = {
//   title: "Testing",
//   description: "tesitng",
//   tech: ["node", "iterm", "npm"],
//   images: ["img/test.png", "img/test2.png"],
//   url: ".com",
//   install: "npm init",
//   usage: "npm run",
//   testing: "",
//   contributors: ["josh", "josh", "josh again"],
//   email: "zonsf@g.com",
//   licenseType: "MIT",
//   year: "2020",
//   fullname: "Joshua Zappone",
//   githubUser: "zapponejosh",
//   filename: "Testing.md",
// };

const templatetize = (answers) => {
  return new Promise((resovle, reject) => {
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
${answers.tech}


## Preview

![screenshot](${answers.images})

## Deployment
**[Find this project deployed here](${answers.url})**

## Installation and Usage

\`\`\`${answers.install}\`\`\`

\`\`\`${answers.usage}\`\`\`

## Testing

\`\`\`${answers.testing}\`\`\`

## Contributors and Contact

${answers.contributors}
**Email questions: [${answers.email}](mailto:${answers.email})**

### License

${answers.licenseType}

`;
    // console.log(result)
    resovle(result);
    if (!result) {
      reject();
    }
  });
};

// console.log(templatetize(answers));

module.exports = templatetize;
