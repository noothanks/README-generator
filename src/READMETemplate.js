const getLicenseDes = licenseVal => {
    var license = licenseVal;

    if(license[0] === 'MIT' || license === 'Apache' || license === 'BSD') {
        return `${license}: Open-source and free to use with creator attribution.`
    }
    if (license[0] === 'CC0') {
        return `${license}: Public domain.`
    }
    if (license[0] === 'ISC') {
        return `${license}: Simplified MIT license. Open source. Default for npm packages.`
    }
    if (license[0] === 'AGPL') {
        return `${license}: Open-source. Allows for all changes in code to be made public.`
    }
}

const getLicenseBadge = licenseVal => {
    var license = licenseVal

    if(license[0] === 'MIT') {
        return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    if (license[0] === 'Apache') {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
    if (license[0] === 'BSD') {
        return `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
    }
    if (license[0] === 'CC0') {
        return `![License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
    }
    if (license[0] === 'ISC') {
        return `![License](https://img.shields.io/badge/License-ISC-blue.svg)`
    }
    if (license[0] === 'AGPL') {
        return `![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`
    }
}

module.exports = projectData => {
    return `
# ${projectData.title} ${getLicenseBadge(projectData.license)}
    
${projectData.description}   
    
## Table Of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#tests)
* [Questions](#Questions)
    
## Installation Instructions
    
${projectData.installation}
        
## Usage
    
${projectData.usage}
    
## License
    
${getLicenseDes(projectData.license)} ${getLicenseBadge(projectData.license)}
    
## Contributing
    
${projectData.contributing}
    
## Tests

${projectData.tests}

## Questions

${projectData.questions}
- GitHub: [@${projectData.username}](https://www.github.com/${projectData.username})
- Email: ${projectData.email}
    `
}
