const Employee = require ("../lib/Employee")

describe ("Employee", () => {
    describe("constructor", () =>{
        it("should create an object and set 3 parameters of 'name', 'id', and 'email' in that order", () => {
            const name = "Rachel";
            const id = 1234;
            const email = "cianfich@gmail.com";
            const testEmployee = new Employee (name, id, email);
            expect(testEmployee.name).toBe("Rachel");
            expect(testEmployee.id).toBe(1234);
            expect(testEmployee.email).toBe("cianfich@gmail.com");
        });
    });
    describe("getName()", () => {
        it("should return the value of what was stored in the 'name' parameter", () => {
            const name = "Rachel"
            const id = 1234;
            const email = "cianfich@gmail.com";
            const testEmployee = new Employee (name, id, email)
            expect(testEmployee.getName()).toBe(name)
        });
    });
    describe("getID()", () => {
        it("should return the value of what was stored in the 'id' parameter", () => {
            const id = 1234
            const email = "cianfich@gmail.com"
            const testEmployee = new Employee ("Rachel", id, email)
            expect(testEmployee.getID()).toBe(id)
        });
    });
    describe("getEmail()", () => {
        it("should return the value of what was stored in the 'email' parameter", () => {
            const email = "cianfich@gmail.com"
            const testEmployee = new Employee ("Rachel", 1234, email)
            expect(testEmployee.getEmail()).toBe(email)
        });
    });
    describe("getRole()", () => {
        it("should return the value 'Employee' which was returned from the function", () => {
            const role = "Employee"
            const testEmployee = new Employee ("Rachel", 1234, "cianfich@gmail.com")
            expect(testEmployee.getRole()).toBe(role)
        });
    });


});