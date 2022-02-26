const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a description of the project:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What should be included for Installation on the readme?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the Usage for this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What license should be listed for this project?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who else is a contributor on this project?',
        name: 'contributing',
    },
    

    
  ])
  .then((response) => {

    const { title, description, installation, usage, license, contributing, tests, gitHub, email} = response;
    let readmeData = 
    `
    Title: ${title} 
    Description: ${description} 

    Table of Contents: 
    Installation 
    Usage 
    License 
    Contributing 
    Tests 
    Questions 

    Installation: ${installation} 
    Usage: ${usage} 
    License: ${license} 
    Contributing: ${contributing} 
    Tests: ${tests} 

    If you have any further questions, please contact me at ${gitHub} or ${email}! 
    `;

    fs.writeFile("readme.md", readmeData, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("READMe written successfully");
        }
      });
});