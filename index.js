const inquirer = require("inquirer");
const api = require("./utils/api")
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown")
var fs = require("fs");


const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "projectName",
    message: "What is your Project name?"
  },
  {
    type: "input",
    name: "about",
    message: "What is your Project about?"
  },
  {
    type: "input",
    name: "install",
    message: "What command should be usd to install dependencies?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL",
      "none"
    ]
  },
  {
    type: "input",
    name: "language",
    message: "What language(s)did you use?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the user's email?"
  }
];
function init() {
  inquirer.prompt(questions)
    .then(function (answers) {
      //console.log(answers)
        axios
        .get(`https://api.github.com/users/${answers.username}`)
          .then(function (answers) {
            const profileAvatar = answers.avatar_url
            const userEmail = answers.email
            let readMeGen = generateMarkdown(answers, profileAvatar, userEmail)
            //console.log(readMeGen)

            fs.appendFile("README2.md", readMeGen, function (err) {
              if (err) {
                throw err;
              }
              console.log("success!")
            })


          })

      });
    }
init();


