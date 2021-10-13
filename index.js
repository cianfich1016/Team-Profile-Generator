//Import all package and class needed
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Declare two empty arrays that will be added to during the adding of employees
let team = [];
let cards = [];

//Start with getting only manager info
const getTeamInfo = () => {
  //Add questions to determine information about manager
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message:
          "Building your team takes only a few seconds! First, what is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is his/her employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is his/her email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is his/her office number?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is his/her office number?",
      },
      {
        type: "list",
        name: "continue",
        message: "What would you like to do next?",
        choices: [
          "Add an Engineer.",
          "Add an Intern.",
          "Finish building my team.",
        ],
      },
    ])
    //Create new manager object
    .then((data) => {
      const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      //Add new manager object created to the team array
      team.push(newManager);
      //Depending on what the user choices either continue on to get specific information for the employee or exit and print to html.
      if (data.continue === "Add an Engineer.") {
        getEngineerInfo();
      } else if (data.continue === "Add an Intern.") {
        getInternInfo();
      } else {
        console.log(
          "Congratulations! Your team has been created. Find the 'index.html' file in the 'dist' directory."
        );
        //Read main html page and loop through team array to replace template with information givin in inquirer prompt
        let pageHTML = fs.readFileSync("./src/page.html", "utf-8");
        for (var i = 0; i < team.length; i++) {
          let managerHTML = fs.readFileSync("./src/manager.html", "utf-8");
          managerHTML = managerHTML.replace("{{name}}", team[i].name);
          managerHTML = managerHTML.replace("{{id}}", team[i].id);
          managerHTML = managerHTML.replace("{{link email}}", team[i].email);
          managerHTML = managerHTML.replace("{{email}}", team[i].email);
          managerHTML = managerHTML.replace(
            "{{officeNumber}}",
            team[i].officeNumber
          );
          //Replace entire card of manager info with team template on main page html and write to file.
          pageHTML = pageHTML.replace("{{team}}", managerHTML);
          fs.writeFileSync("./dist/index.html", pageHTML);
        }
      }
    });
};
//Get info for Engineer employee
const getEngineerInfo = () => {
  //Questions asking for input to store to variables
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is his/her employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is his/her email address?",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is his/her GitHub username?",
      },
      {
        type: "list",
        name: "continue",
        message: "What would you like to do next?",
        choices: [
          "Add an Engineer.",
          "Add an Intern.",
          "Finish building my team.",
        ],
      },
    ])
    //Create new Engineer object
    .then((data) => {
      let newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub
      );
      //Push to team array
      team.push(newEngineer);
      //Ask what user would like to do next
      if (data.continue === "Add an Engineer.") {
        getEngineerInfo();
      } else if (data.continue === "Add an Intern.") {
        getInternInfo();
      } else {
        console.log(
          "Congratulations! Your team has been created. Find the 'index.html' file in the 'dist' directory."
        );
        //Read main file to append to main page.
        let pageHTML = fs.readFileSync("./src/page.html", "utf-8");
        //Loop through all objects in team array and if role is Manager then replace templates with certain variables
        for (var i = 0; i < team.length; i++) {
          if (team[i].getRole() === "Manager") {
            var managerHTML = fs.readFileSync("./src/manager.html", "utf-8");
            managerHTML = managerHTML.replace("{{name}}", team[i].name);
            managerHTML = managerHTML.replace("{{id}}", team[i].id);
            managerHTML = managerHTML.replace("{{link email}}", team[i].email);
            managerHTML = managerHTML.replace("{{email}}", team[i].email);
            managerHTML = managerHTML.replace(
              "{{officeNumber}}",
              team[i].officeNumber
            );
            //Push this specific card to a full array of cards that will eventually print.
            cards.push(managerHTML);
            //If role is Engineer then replace templates in engineer.html.
          } else if (team[i].getRole() === "Engineer") {
            var engineerHTML = fs.readFileSync("./src/engineer.html", "utf-8");
            engineerHTML = engineerHTML.replace("{{name}}", team[i].name);
            engineerHTML = engineerHTML.replace("{{id}}", team[i].id);
            engineerHTML = engineerHTML.replace(
              "{{link email}}",
              team[i].email
            );
            engineerHTML = engineerHTML.replace("{{email}}", team[i].email);
            engineerHTML = engineerHTML.replace(
              "{{gitHub link}}",
              team[i].gitHub
            );
            engineerHTML = engineerHTML.replace("{{gitHub}}", team[i].gitHub);
            //Push that html to cards array.
            cards.push(engineerHTML);
          } else if (team[i].getRole() === "Intern") {
            var internHTML = fs.readFileSync("./src/intern.html", "utf-8");
            internHTML = internHTML.replace("{{name}}", team[i].name);
            internHTML = internHTML.replace("{{id}}", team[i].id);
            internHTML = internHTML.replace("{{link email}}", team[i].email);
            internHTML = internHTML.replace("{{email}}", team[i].email);
            internHTML = internHTML.replace("{{school}}", team[i].school);
            //Push internhtml to cards array
            cards.push(internHTML);
          }
        }
        //Outside of for loop once all has been written to cards array, replace the team template with the data from cards array to equal pageHTML and write that.
        pageHTML = pageHTML.replace("{{team}}", cards.join(''));
        fs.writeFileSync("./dist/index.html", pageHTML);
      }
    });
};
//Get info for Intern employee
const getInternInfo = () => {
  //Questions asking for input to store to variables
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is his/her employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is his/her email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school is he/she attending?",
      },
      {
        type: "list",
        name: "continue",
        message: "What would you like to do next?",
        choices: [
          "Add an Engineer.",
          "Add an Intern.",
          "Finish building my team.",
        ],
      },
    ])
    //Create new Intern object
    .then((data) => {
      let newIntern = new Intern(data.name, data.id, data.email, data.school);
      //Push to team array
      team.push(newIntern);
      //Ask what user would like to do next
      if (data.continue === "Add an Engineer.") {
        getEngineerInfo();
      } else if (data.continue === "Add an Intern.") {
        getInternInfo();
      } else {
        console.log(
          "Congratulations! Your team has been created. Find the 'index.html' file in the 'dist' directory."
        );
        //Read main file to append to main page.
        let pageHTML = fs.readFileSync("./src/page.html", "utf-8");
        for (var i = 0; i < team.length; i++) {
          //Loop through all objects in team array and if role is Manager then replace templates with certain variables created from input
          if (team[i].getRole() === "Manager") {
            var managerHTML = fs.readFileSync("./src/manager.html", "utf-8");
            managerHTML = managerHTML.replace("{{name}}", team[i].name);
            managerHTML = managerHTML.replace("{{id}}", team[i].id);
            managerHTML = managerHTML.replace("{{link email}}", team[i].email);
            managerHTML = managerHTML.replace("{{email}}", team[i].email);
            managerHTML = managerHTML.replace(
              "{{officeNumber}}",
              team[i].officeNumber
            );
            //Push managerHTML to cards array
            cards.push(managerHTML);
          } else if (team[i].getRole() === "Engineer") {
            //Loop through all objects in team array and if role is Engineer then replace templates with certain variables created from input
            var engineerHTML = fs.readFileSync("./src/engineer.html", "utf-8");
            engineerHTML = engineerHTML.replace("{{name}}", team[i].name);
            engineerHTML = engineerHTML.replace("{{id}}", team[i].id);
            engineerHTML = engineerHTML.replace(
              "{{link email}}",
              team[i].email
            );
            engineerHTML = engineerHTML.replace("{{email}}", team[i].email);
            engineerHTML = engineerHTML.replace(
              "{{gitHub link}}",
              team[i].gitHub
            );
            engineerHTML = engineerHTML.replace("{{gitHub}}", team[i].gitHub);
            //Push engineerHTML to cards array
            cards.push(engineerHTML);
            //Loop through all objects in team array and if role is Engineer then replace templates with certain variables created from input
          } else if (team[i].getRole() === "Intern") {
            var internHTML = fs.readFileSync("./src/intern.html", "utf-8");
            internHTML = internHTML.replace("{{name}}", team[i].name);
            internHTML = internHTML.replace("{{id}}", team[i].id);
            internHTML = internHTML.replace("{{link email}}", team[i].email);
            internHTML = internHTML.replace("{{email}}", team[i].email);
            internHTML = internHTML.replace("{{school}}", team[i].school);
            //Push internHTML to cards array
            cards.push(internHTML);
          }
        }
        //Outside of for loop once all has been written to cards array, replace the team template with the data from cards array to equal pageHTML and write that.
        pageHTML = pageHTML.replace("{{team}}", cards.join(''));
        fs.writeFileSync("./dist/index.html", pageHTML);
      }
    });
};
//Declaring start of application function
const init = () => {
  getTeamInfo();
};

//Initialize application
init();
