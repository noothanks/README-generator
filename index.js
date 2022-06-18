const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide a description of how to use your application.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license you are using for your project.',
        choices: ['MIT', 'APACHE2', 'GPL', 'BSD3', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide instructions on how other developers can contribute.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain the testing instructions for your project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide a link to your GitHub profile.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email address.'
    }
];
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        const content = generateMarkdown(answers);

        fs.writeFile('./dist/README.md', content, error => {
            if (error) {
                console.log(error);
            }
        });
    })
    .catch(error => {
        console.log(error);
    })
}

init();