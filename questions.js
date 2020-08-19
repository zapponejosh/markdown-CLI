const licenses = ["MIT", "ICS", "Mozilla Public License 2.0", "Unilicense"];

const questions = [
  // fullname
  {
    type: "input",
    name: "fullname",
    message: "Enter fullname",
  },
  //year
  {
    type: "input",
    name: "current_year",
    message: "Enter the current year.",
    default: "2020",
  },
  // title
  {
    type: "input",
    name: "project_title",
    message: "Enter the project title.",
  },
  // description
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  // tech used
  {
    type: "input",
    name: "stack",
    message: "What tech stack did you use? (spearated by a comma)",
    default: "Rock, Paper, Scissors",
  },
  // deployment URL
  {
    type: "input",
    name: "deployment_url",
    message: "Optional: Enter a deployment URL if applicable.",
    default: "Not deployed",
  },
  // application preview (screenshots)
  {
    type: "input",
    name: "screenshots",
    message:
      "Enter in the file paths for your screenshots (separated by a comma)",
  },
  // installation
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
    default: "npm install",
  },
  // usage
  {
    type: "input",
    name: "usage",
    message: "Usage instructions:",
    default: "npm start",
  },
  // license
  {
    type: "list",
    loop: false,
    name: "license",
    message:
      "Which license would you like this code to be under? (MIT recommended)",
    choices: licenses,
    default: "MIT",
  },
  // constributing
  {
    type: "input",
    name: "contributors",
    message: "Optional: Enter any contributors (separated by a comma)",
    default: "none",
  },
  // tests
  {
    type: "input",
    name: "testing",
    message: "Optional: Enter any testing instructions.",
    default: "none",
  },
  // questions
  {
    type: "input",
    name: "github_username",
    message: "Enter your Github username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter an email address for questions",
  },
];

module.exports = { questions };
