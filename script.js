const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
{
    name: `title`,
    type: `input`,
    message: `What is the title of your application?`
},
{
    name: `userName`, 
    type: `input`,
    message: `What is your GitHub user name, exactly as it appears`
},
{
    name: `email`,
    type: `input`,
    message: `Please provide your email address`
},
{
    name: `repoName`,
    type: `input`,
    message: `What is your repository name, exactly as it appears`
},
{
    name: `appLink`,
    type: `input`,
    message: `Please add your live application link, exactly as it appears`
},
{
    name: `description`,
    type: `input`,
    message: `Provide a short description of what your application can do.`
},
{
    name: `screenshot`,
    type: `input`,
    message: `Add the relative path for a screenshot (.png)`
},
{
    name: `tech`,
    type: `input`,
    message: `What programming language/languages or operating systems are needed to run your application?`
},
{
    name:`npm`,
    type: `input`,
    message: `Which npm package was utilized`
},
{
    name: `install`,
    type: `input`,
    message: `What dependences are required to run your application?`
},
{
    name: `output`,
    type: `input`,
    message: `Give an example of the expected output of your application`
},
{
    name: `problem`,
    type: `input`,
    message: `What problem does your application solve`
},
{
    name: `license`,
    type: `list`,
    message: `Please choose a license from the following`,
    choices: [`MIT`, `Apache`, `GNU GPLv3`]
}
]

function promptInquirer (inquiry){
    inquirer.prompt(inquiry).then((answers) => {
        console.log(answers)
        console.log(answers.title)

        let format = 
    
`
# ${answers.title}

![image relative path](${answers.screenshot})

${answers.description}

## Table of Contents 

- [Technologies](#tech)
- [Instalation](#install)
- [Usage](#output)
- [Contribute](#contribute)
- [Questions](#email)
- [License](#license)

### Technologies

 The technologies utilized in this application are as follows: ${answers.npm}, and ${answers.tech}.

### Instalation

 To run this application successfully follow these steps:
  1. Install [${answers.repoName}](${answers.appLink}) to your local drive via terminal/GitBash. This will install the package.json file which contains a list of all the dependencies for this application. 

  2. Verify that node is installed on your computer by typing 'node' in your terminal/GitBash. If it returns
    >Welcome to Node.js V12.14.1 (or higher)
    >
    >Type '.help' for more information.

    Node.js is installed on your computer.
  3. Type 'npm install' in your terminal to install the dependencies. 

### Usage

 The purpose of this program is to solve ${answers.problem}. The following is the expected output of the application: ${answers.output}

### Contribute
 
 Contrubutions are to this application are welcome to imporve it's functionality. If you would like to contribute to this application please contact me at the email address listed in the questions section.

### Questions

 Any questions and/or comments are welcome. Please contact me at ${answers.email} or visit my [Github Profile](https://github.com/${answers.userName})

 ### License

 Licensed under the ${answers.license} license. ![link](https://img.shields.io/github/license/${answers.userName}/${answers.repoName}?color=mediumgreen&style=plastic)
`

        writeToFile(format)
}
)}

promptInquirer(questions);

function writeToFile (data) {
    fs.writeFile('README.md', data, function(err) {
        if (err) throw err;
        console.log('file made')
    })
}

