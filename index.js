const fs = require('fs');
const inquirer = require('./inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide a description of how to use your application.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license you are using for your project.',
            choices: ['MIT', 'ISC']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide instructions on how other developers can contribute'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please include testing instructions for your project'
        }
    ])
}