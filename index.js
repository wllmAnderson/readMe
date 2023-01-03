// Package
const inqirer  = require('inquirer');
inqirer
// array of questions
// const questions = []
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
      type: 'input',
      message: 'list subjects for table of contents',
      name: 'Table of Contents',
    },
    {
      type: 'input',
      message: 'How is the project installed?',
      name: 'Instalation',      
    },  
    {  
      type: 'input'  ,
      message: 'How is the project used?',  
      name: 'Usage',  
    }, 
    {  
      type: 'input',
      message: 'What license is used?',  
      name: 'License',    
    },  
    {
      type: 'input',  
      message: 'Who contributed on the project?',  
      name: 'Contribution',
    },   
      {
        type: 'input',
        message: 'What test were run before completion?',
        name: 'Test',
      },
      {
        type: 'input',
        message: 'Any questions?',
        name: 'Questions',
      },
  ])

  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
  /* Create file
  const fs = require('fs');
  fs.writeFile('readme.txt', process.argv[2], (err) =>
   err ? console.error(err) : console.log('Success!')
 );
 */

  

  
