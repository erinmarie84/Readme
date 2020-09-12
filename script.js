const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([{

    name: `title`,
    type: `input`,
    message: `What is the title of your application?`,
},
{
    name: `userName`, 
    type: `input`,
    message: `What is your GitHub user name, exactly as it appears`,
},
{
    name: `email`,
    type: `input`,
    message: `Please provide your email address`,
},
{
    name: `repositoryLink`,
    type: `input`,
    message: `Provide a link to your repository`,
},
{
    name: `description`,
    type: `input`,
    message: `Provide a short description of what your application can do.`
},
{
    name: `tech`,
    type: `input`,
    message: `What programming language/languages or operating systems are needed to run your application?`
},
{
    name: `install`,
    type: `input`,
    message: `What dependences are required to run your application?`
}
{
    name: `output`,
    type: `input`,
    message: `Give an example of the expected output of your application`
,}
{
    name:`contribute`,
    type: `input`,
    message: `Specify if you are open to outside contributors, if you are tell them how they can contact you and what your guidelines are`
},
{
   name: `tests`,
   type: `input`,
   message: `Something about tests...........`
},
{
    name: `license`,
    type: `list`,
    message: `Please choose a license from the following`,
    choices: [`MIT`, `Apache`, `GNU GPLv3`]
}

])

.then((answer) => {
    console.log(answer)
    console.log(answer.title)
}) 