const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

const generateHTML = ({ Title, Description, TableofContents, Installation, Usage, License, Contribution, Test, Questions }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-dark">
    <div class="container">
      <h1 class="display-4 text-light"># ${Title}</h1>
      <p class="lead text-light">## Description <br>
       ${Description}.</p>
      <ul class="list-group">
        <li class="list-group-item"> ##Table of Contents <br>
        ${TableofContents}</li>
        <li class="list-group-item"> ## Installation <br>
        ${Installation}</li>
        <li class="list-group-item"> ## Usage <br>
         ${Usage}</li>
        <li class="list-group-item"> ## License <br>
         ${License}</li>
        <li class="list-group-item"> ## Contribution <br>
         ${Contribution}</li>
        <li class="list-group-item"> ## Test <br>
         ${Test}</li>
        <li class="list-group-item"> ## Questions <br>
         ${Questions}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
    type: 'input',
    message: 'What is the title',
    name: 'Title',
},
{
    type: 'input',
    message: 'What is your description',
    name: 'Description',
},
{
    type: 'checkbox',
    message: 'list subjects for table of contents',
    name: 'TableofContents',
    choices: ['Installation', 'Usage', 'license', 'Contribution', 'Test', 'Question']  
},
{
    type: 'input',
    message: 'How is the project installed?',
    name: 'Installation',
},
{
    type: 'input',
    message: 'How is the project used?',
    name: 'Usage',
},
{
    type: 'checkbox', 
    name: 'License',
    choices: ["MIT", "GPLv3", "GPL"],
    message: 'Pick your License.'
},
{
    type: 'input',
    message: 'Who contributed on the project?',
    name: 'Contribution',
},
{
    type: 'confirm',
    message: 'Was a test run before submiting',
    name: 'Test',
},
{
    type: 'confirm',
    message: 'Any questions?',
    name: 'Questions',
},
])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

