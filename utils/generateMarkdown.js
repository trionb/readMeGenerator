function generateMarkdown(data, profileAvatar, userEmail) {
  return `
# ${data.projectName}
### [${data.projectName}](${data.about})
    ## about: 
    ----------------
    ## Table Of Contents:
    * How To Install
    * Usage
    * Technology Used/Badge
    * Contributors
    * Tests
    * GitHub
    ----------------
    ## How To Install: 
   ### ${data.install}
    ## Usage:
   ### ${data.usage}
    ## Bagde: 
   ### ![img](https://img.shields.io/badge/${data.badge}-readme-red)
    ## License:  
   ### ${data.license}
    ## Tests:
   ### ${data.test}
    ## Contributors:
   ### ${data.contributing}
    ## <img src = "${profileAvatar}" alt = "profile pic" width = "100"/>
   ### ${data.email}
`;
}

module.exports = generateMarkdown;
