//Require import of Employee class
const Employee = require ("../lib/Employee")

//Test Employee class
describe ("Employee", () => {
    //Test creation of constructor and parameters
    describe("constructor", () =>{
        it("should create an object and set 3 parameters of 'name', 'id', and 'email' in that order", () => {
            const name = "Rachel";
            const id = 1234;
            const email = "cianfich@gmail.com";
            const testEmployee = new Employee (name, id, email);
            expect(testEmployee.name).toBe(name);
            expect(testEmployee.id).toBe(id);
            expect(testEmployee.email).toBe(email);
        });
    });
    //Test getName() method
    describe("getName()", () => {
        it("should return the value of what was stored in the 'name' parameter", () => {
            const name = "Rachel"
            const id = 1234;
            const email = "cianfich@gmail.com";
            const testEmployee = new Employee (name, id, email)
            expect(testEmployee.getName()).toBe(name)
        });
    });
    //Test getID() method
    describe("getID()", () => {
        it("should return the value of what was stored in the 'id' parameter", () => {
            const id = 1234
            const email = "cianfich@gmail.com"
            const testEmployee = new Employee ("Rachel", id, email)
            expect(testEmployee.getID()).toBe(id)
        });
    });
    //Test getEmail() method
    describe("getEmail()", () => {
        it("should return the value of what was stored in the 'email' parameter", () => {
            const email = "cianfich@gmail.com"
            const testEmployee = new Employee ("Rachel", 1234, email)
            expect(testEmployee.getEmail()).toBe(email)
        });
    });
    //Test getRole() method
    describe("getRole()", () => {
        it("should return the value 'Employee' which was returned from the function", () => {
            const role = "Employee"
            const testEmployee = new Employee ("Rachel", 1234, "cianfich@gmail.com")
            expect(testEmployee.getRole()).toBe(role)
        });
    });


});