//Import Employee class
const Employee = require("./Employee")

//Intern class with parameters via constructor and parent class Employee and methods.
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;