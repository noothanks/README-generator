// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  return `![License Badge](https://img/shields.io/badge/License-${license}-informational)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return '- [License](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){ 
    return '';
  }

  return `## License
  
  This project is licensed under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  -[Credits](#credits)
  ${renderLicenseLink(answers.license)}

  ## Installation

  ## Usage

  ##Credits

  ${renderLicenseSection(answers.license)}
`;
}

module.exports = generateMarkdown;
