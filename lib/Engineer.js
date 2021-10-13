//Import Employee class
const Employee = require("./Employee")

//Engineer class with parameters via constructor and parent class Employee and methods.
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;