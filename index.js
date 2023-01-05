
/*const inquirer  = require('inquirer');

const fs = require('fs');
const { argv } = require('process');



//const http = require('http');

//const readMe = answer

inquirer.prompt([   
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
    ]).then(function(answer){console.log(answer);
    });

    //fs.WriteStream(answer);
    //console.log(process.argv);

    //console.log(answer);



    /*fs.writeFile('message.txt', console.log(answer), function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
      });
    //console.log(readMe);



    /*
    fs.writeFile("readme2.md"),function (err){
        console.log(err)}
    
    function readMe() = fs.writeFile('readMe.txt', process.argv[2], (err) =>
    err ? console.error(err) : console.log('Success!')
  );
  */

    /*.then(fs.appendFile('readme.txt', process.argv[2], (err) =>
    err ? console.error(err) : console.log('Success!'))) ;
    */
    //inquirer.then( => {



    //


    inquirer = require('inquirer');
var fs = require('fs');


var question = answer();


inquirer.prompt(question).then(answers => {
    fs.writeFile("readme.md", JSON.stringify(answers),function (err){
        console.log(err)
    })})



function answer() {
    return [{
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
]}



