const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

let positions = [];

const startQuiz =  async () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Describe the project.',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'Enter installation instructions.',
      name: 'projectInstallation',
    },
    {
      type: 'input',
      message: 'Enter usage instructions.',
      name: 'usageInstructions',
    },
  {
    type: "input",
    message: "Enter contributing persons.",
    name: "contribPersons",
  },
  {
    type: "input",
    message: "Enter test instructions.",
    name: "testInstructions",
  },
  {
    type: "list",
    message: "Choose a license.",
    name: "licenseType",
    choices: [ "License preferred by the community", "MIT license", "GNU GPLv3"],
  },
  {
    name: "githubUsername",
    type: "input",
    message: "Enter your GitHub username?",
  },
  {
    name: "githubLink",
    type: "input",
    message: "Enter the link to your GitHub.",
  },
  {
    name: "emailAddress",
    type: "input",
    message: "Enter your email address.",
  }  
  ]).then((answers) => {
    fs.writeFile(`README.md`, `# ${answers.projectName}
## ${answers.projectDescription}

## Table of Contents
     
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
      
## Installation
      
${answers.projectInstallation}

## Usage
    
${answers.usageInstructions}
      
## Credits
      
${answers.contribPersons}
      
## License

${answers.licenseType}
      
## Questions

Please reach out to the following links for questions.

My Github Username: ${answers.githubUsername}
      
My Github: ${answers.githubLink}
      
My Email: ${answers.emailAddress}
      
## Tests
      
${answers.testInstructions}`, (err) =>
 err ? console.error(err) : console.log('README saved!'));
 })
}
startQuiz();
/**
EXTRA CREDIT validation to ensure that user input provided is in the proper expected format.
*/