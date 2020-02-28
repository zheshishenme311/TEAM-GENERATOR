const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const teamArr = [];

function init(){
    inquirer.prompt([{
        message:"Please enter manager name",
        name: 'name',
    },
    {
        message:"Please enter office number",
        name: 'officeNumber',
    },
    {
        message:"Please enter manager's email",
        name: 'email',
    },
    {
        message:"Please enter id number",
        name: 'id',
    },
]).then(data=>{
    let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    teamArr.push(manager)
    teamPrompt()
})
}       


function teamPrompt(){
        inquirer.prompt({
        message: "What would you like to do now?",
        type: "list",
        choices: ['Add Engineer', 'Add Intern', 'Done with team building'],
        name: 'choice'
    }).then(answer=>{
        switch(answer.choice){
            case 'Add Engineer':
                makeEngineer()
                break;
            case 'Add Intern':
                makeIntern()
                break;
            case 'Done with team building':
                generateTeam()
                break;
        }
    })
    }

    function makeEngineer(){
        inquirer.prompt([{
            message:"Please enter engineer name",
            name: 'name',
        },
        {
            message:"Please enter github username",
            name: 'github',
        },
        {
            message:"Please enter engineer's email",
            name: 'email',
        },
        {
            message:"Please enter id number",
            name: 'id',
        },
    ]).then(data=>{
        let engineer = new Engineer(data.name, data.id, data.email, data.github)
        teamArr.push(engineer)
        teamPrompt()
    })
}


function makeIntern(){
    inquirer.prompt([{
        message:"Please enter intern name",
        name: 'name',
    },
    {
        message:"Please enter school name",
        name: 'school',
    },
    {
        message:"Please enter intern's email",
        name: 'email',
    },
    {
        message:"Please enter id number",
        name: 'id',
    },
]).then(data=>{
    let intern = new Intern(data.name, data.id, data.email, data.school)
    teamArr.push(intern)
    teamPrompt()
})
}

function generateTeam(){
    fs.writeFile('team.html', makeHtml(), err=>{
        if(err)throw err;
        console.log('success!')
    } )
}
function makeHtml(){

let team = '';
teamArr.map(item=>{
    team += item.getHtml()
})
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css"></link>
<title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <h2>My Team</h2>
    </div>
    <div class="container">
        <div class="row">
            ${team}
        </div>
    </div>
</body>
</html>
`
    return html
}
init()