// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => { if (value) { return true } else { return 'Input not detected' } }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Your README file has been generated!')
    );
  }
  
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions)
      .then(function (data) {
        writeToFile('./output/README.md', generator(data));
      })
  }

// Function call to initialize app
init();
