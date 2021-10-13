//Require import of Intern class
const Intern = require ("../lib/Intern");

describe ("Intern", () => {
    //Test creation of constructor and parameters as extension of Employee class
    describe("constructor", () =>{
        it("should create an object as an extension of the 'Employee' class and set 3 parameters of 'name', 'id', and 'email' in that order as well as a 'school' parameter", () => {
            const name = "Melissa";
            const id = 4321;
            const email = "uncmelissa@gmail.com";
            const school = "UNC Chapel Hill"
            const testIntern = new Intern (name, id, email, school);
            expect(testIntern.name).toBe(name);
            expect(testIntern.id).toBe(id);
            expect(testIntern.email).toBe(email);
            expect(testIntern.school).toBe(school);
        });
    });
    //Test getSchool() method
    describe("getSchool()", () => {
        it("should return the value of what was stored in the 'officeNumber' parameter", () => {
            const school = "UNC Chapel Hill"
            const testIntern = new Intern ("Melissa", 4321, "uncmelissa@gmail.com", school)
            expect(testIntern.getSchool()).toBe(school)
        });
    });
    //Test getRole() method
    describe("getRole()", () => {
        it("should return the value 'Intern' which was returned from the function", () => {
            const role = "Intern"
            const testIntern = new Intern ("Melissa", 4321, "uncmelissa@gmail.com", "UNC Chapel Hill")
            expect(testIntern.getRole()).toBe(role)
        });
    });
});