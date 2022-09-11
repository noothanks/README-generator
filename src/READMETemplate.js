
module.exports = projectData => {
    return `
    # ${projectData.title} ![license](${projectData.license})
    
    ${projectData.description}   
    
    ## Table Of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#tests)
    * [Questions](#Questions)
    
    ## Installation
    
    Install project with __
    
    ${projectData.installation}
        
    ## Usage
    
    ${projectData.usage}
    
    ## License
    
    ${projectData.license}
    
    ## Contributing
    
    ${projectData.contributing}
    
    ## Tests

    ${projectData.tests}

    ## Questions

    ${projectData.questions}
    `
}
