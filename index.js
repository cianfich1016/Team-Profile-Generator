const inquirer = require('inquirer');
const fs = require('fs');

let team = [];

const getTeamInfo = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Building your team takes only a few seconds! First, what is the team manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is his/her employee ID number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is his/her email address?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is his/her office number?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is his/her office number?",
      },
      {
        type: 'list',
        name: 'continue1',
        message: "What would you like to do next?",
        choices: ["Add an Engineer.", "Add an Intern.", "Finish building my team."]
      },
    ])
    .then((data) => {
        team.push(data);
        if (data.continue1 === "Add an Engineer."){
            getEngineerInfo();
        } else if (data.continue1 === "Add an Intern."){
            getInternInfo();
        } else {
            console.log ("Congratulations! Your team has been created.");
        };
    });
}

const getEngineerInfo = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is his/her employee ID number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is his/her email address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is his/her GitHub username?",
      },
      {
        type: 'list',
        name: 'continue2',
        message: "What would you like to do next?",
        choices: ["Add an Engineer.", "Add an Intern.", "Finish building my team."]
      },
    ])
    .then((data) => {
        team.push(data);
        if (data.continue1 === "Add an Engineer."){
            getEngineerInfo();
        } else if (data.continue1 === "Add an Intern."){
            getInternInfo();
        } else {
            console.log ("Congratulations! Your team has been created.");
        };
    });
}

const getInternInfo = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is his/her employee ID number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is his/her email address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What school is he/she attending?",
      },
      {
        type: 'list',
        name: 'continue3',
        message: "What would you like to do next?",
        choices: ["Add an Engineer.", "Add an Intern.", "Finish building my team."]
      },
    ])
    .then((data) => {
        team.push(data);
        if (data.continue1 === "Add an Engineer."){
            getEngineerInfo();
        } else if (data.continue1 === "Add an Intern."){
            getInternInfo();
        } else {
            console.log ("Congratulations! Your team has been created.");
        };
    });
}
const init = () => {
    getTeamInfo();      
};

//Initialize app
init();
