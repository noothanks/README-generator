const inquirer = require('inquirer');
const generatePage = require('./src/READMETemplate');
const writeFile = require('./utils/generateREADME');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain the installation process for your application',
            validate: insallationInput => {
                if(insallationInput) {
                    return true;
                } else {
                    console.log('Please enter a description to explain where your project is launched and/or how to install it');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your project/tool.',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please explain the usage your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name:'license',
            message: 'Select a license type below.',
            choices: ['CC0', 'BSD', 'MIT', 'Apache', 'ISC', 'AGPL'],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide a description on how to contribute to this project.',
            validate: contributingInput => {
                if(contributingInput) {
                    return true;
                } else {
                    console.log('You need to add a description for contributing to your project');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'tests',
            message: 'Explain how you test your project or any validation.',
            validate: testsInput => {
                if(testsInput) {
                    return true;
                } else {
                    console.log('Enter a description for your tests.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'questions',
            message: 'Describe how a user can ask questions.',
            validate: questionsInput => {
                if(questionsInput) {
                    return true;
                } else{ 
                    console.log('Please enter a question');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'username',
            message: 'Enter your GitHub username',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username')
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        }
    ])
}

promptUser()
    .then(projectData => {
        return generatePage(projectData);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err)
    })