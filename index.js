const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];
let cards = [];

const getTeamInfo = () => {
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
    .then((data) => {
      const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      team.push(newManager);
      if (data.continue === "Add an Engineer.") {
        getEngineerInfo();
      } else if (data.continue === "Add an Intern.") {
        getInternInfo();
      } else {
        console.log(
          "Congratulations! Your team has been created. Find the 'index.html' file in the 'dist' directory."
        );
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
          pageHTML = pageHTML.replace("{{team}}", managerHTML);
          fs.writeFileSync("./dist/index.html", pageHTML);
        }
      }
    });
};

const getEngineerInfo = () => {
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
    .then((data) => {
      let newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub
      );
      team.push(newEngineer);
      if (data.continue === "Add an Engineer.") {
        getEngineerInfo();
      } else if (data.continue === "Add an Intern.") {
        getInternInfo();
      } else {
        console.log(
          "Congratulations! Your team has been created. Find the 'index.html' file in the 'dist' directory."
        );
        let pageHTML = fs.readFileSync("./src/page.html", "utf-8");
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
            cards.push(managerHTML);
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
            cards.push(engineerHTML);
          } else if (team[i].getRole() === "Intern") {
            var internHTML = fs.readFileSync("./src/intern.html", "utf-8");
            internHTML = internHTML.replace("{{name}}", team[i].name);
            internHTML = internHTML.replace("{{id}}", team[i].id);
            internHTML = internHTML.replace("{{link email}}", team[i].email);
            internHTML = internHTML.replace("{{email}}", team[i].email);
            internHTML = internHTML.replace("{{school}}", team[i].school);
            cards.push(internHTML);
          }
        }
        pageHTML = pageHTML.replace("{{team}}", cards);
        fs.writeFileSync("./dist/index.html", pageHTML);
      }
    });
};

const getInternInfo = () => {
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
    .then((data) => {
      let newIntern = new Intern(data.name, data.id, data.email, data.school);
      team.push(newIntern);
      if (data.continue === "Add an Engineer.") {
        getEngineerInfo();
      } else if (data.continue === "Add an Intern.") {
        getInternInfo();
      } else {
        console.log(
          "Congratulations! Your team has been created. Find the 'index.html' file in the 'dist' directory."
        );
        let pageHTML = fs.readFileSync("./src/page.html", "utf-8");
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
            pageHTML += managerHTML;
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
            pageHTML += engineerHTML;
          } else if (team[i].getRole() === "Intern") {
            var internHTML = fs.readFileSync("./src/intern.html", "utf-8");
            internHTML = internHTML.replace("{{name}}", team[i].name);
            internHTML = internHTML.replace("{{id}}", team[i].id);
            internHTML = internHTML.replace("{{link email}}", team[i].email);
            internHTML = internHTML.replace("{{email}}", team[i].email);
            internHTML = internHTML.replace("{{school}}", team[i].school);
            pageHTML += internHTML;
          }
        }
        pageHTML = pageHTML.replace("{{team}}", cards);
        fs.writeFileSync("./dist/index.html", pageHTML);
      }
    });
};

const init = () => {
  getTeamInfo();
};

//Initialize app
init();
