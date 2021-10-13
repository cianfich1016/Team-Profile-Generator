//Require import of Engineer class
const Engineer = require ("../lib/Engineer");

//Test Engineer class
describe ("Engineer", () => {
    //Test creation of constructor and parameters as extension of Employee class
    describe("constructor", () =>{
        it("should create an object as an extension of the 'Employee' class and set 3 parameters of 'name', 'id', and 'email' in that order as well as an GitHub username parameter", () => {
            const name = "Sam";
            const id = 5555;
            const email = "sammy@gmail.com";
            const gitHub = "test1016";
            const testEngineer = new Engineer (name, id, email, gitHub);
            expect(testEngineer.name).toBe(name);
            expect(testEngineer.id).toBe(id);
            expect(testEngineer.email).toBe(email);
            expect(testEngineer.gitHub).toBe(gitHub);
        });
    });
    //Test getGitHub() method
    describe("getGitHub()", () => {
        it("should return the value of what was stored in the 'gitHub' parameter", () => {
            const gitHub = "test1016"
            const testEngineer = new Engineer ("Sam", 5555, "sammy@gmail.com", gitHub)
            expect(testEngineer.getGitHub()).toBe(gitHub)
        });
    });
    //Test geRole() method
    describe("getRole()", () => {
        it("should return the value 'Engineer' which was returned from the function", () => {
            const role = "Engineer"
            const testEngineer = new Engineer ("Sam", 5555, "sammy@gmail.com", "test1016")
            expect(testEngineer.getRole()).toBe(role)
        });
    });
});