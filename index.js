// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
    },
    {
        type: "input",
        message: "Please provide a short description of your project",
        name: "Description",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message: "What are the steps to install the application?",
        name: "Installation",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message: "How to use the application?",
        name: "Usage",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "list",
        message: "What is the license for your project?",
        name: "License",
        choices: ["N/A", "The MIT License", "The GNU GPL v2 License", "Apache License", "GNU GPL v3 License"],
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message:"Who contributed to your project?",
        name: "Contributors",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message: "How do you test the application?",
        name: "Tests",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
        validate: (value) => { if (value) { return true } else { return "Input not detected" } }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Your README file has been generated!")
    );
  }
  
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions)
      .then(function (data) {
        writeToFile("./output/README.md", generator(data));
      })
  }

// Function call to initialize app
init();
