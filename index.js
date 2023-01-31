
//good
// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
  .prompt([{
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
    type: 'input',
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
// TODO: Create a function to write README file
.then(answers => {
    fs.writeFile("readme.md", JSON.stringify(answers),function (err){
          console.log(err)
  })})

// TODO: Create a function to initialize app
class person {
    constructor(title, description, tableofcontents, Instalation, Usage) {
        this.title = title;
        this.description = description;
        this.tableofcontents = tableofcontents;
        this.Instalation = Instalation;
        this.Usage = Usage;
        this.license = license;
        this.contribution = contribution;
        this.test = test;
        this.questions = questions;
        this.introduction = () => {
            console.log(
                `title: ${this.title}
         description: ${this.description}
         tableofcontents: ${this.tableofcontents}
         Instalation: ${this.Instalation}
         Usage ${this.Usage}
         
         
         `);

        };
    }
};
    
//
/*constructor
    (title, description, tableofcontents, Instalation, Usage) 
        this.title = title;
        this.description = description;
        this.tableofcontents = tableofcontents;
        this.Instalation = Instalation;
        this.Usage = Usage;
        this.license = license;
        this.contribution = contribution;
        this.test = test;
        this.questions = questions;
        this.introduction = () => {
            console.log(
                `title: ${this.title}
         description: ${this.description}
         tableofcontents: ${this.tableofcontents}
         Instalation: ${this.Instalation}
         Usage ${this.Usage}`);
        };
        //this.init = function () {
            //'something';
        //};

        //this.init();
    
;

// Function call to initialize app
    //console.log(constructor); */
