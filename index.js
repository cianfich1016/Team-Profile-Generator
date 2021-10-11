const inquirer = require('inquirer');
const fs = require('fs');

const getTeamInfo = () => {
    return inquirer.prompt([
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
    ]);
}

const init = () => {
    getTeamInfo();      
};

//Initialize app
init();