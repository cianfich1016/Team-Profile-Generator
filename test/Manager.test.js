const Manager = require ("../lib/Manager");

describe ("Manager", () => {
    describe("constructor", () =>{
        it("should create an object as an extension of the 'Employee' class and set 3 parameters of 'name', 'id', and 'email' in that order as well as an officeNumber parameter", () => {
            const name = "Jim";
            const id = 5678;
            const email = "jimtest@gmail.com";
            const officeNumber = 121;
            const testManager = new Manager (name, id, email, officeNumber);
            expect(testManager.name).toBe(name);
            expect(testManager.id).toBe(id);
            expect(testManager.email).toBe(email);
            expect(testManager.officeNumber).toBe(officeNumber);
        });
    });

    describe("getOfficeNumber()", () => {
        it("should return the value of what was stored in the 'officeNumber' parameter", () => {
            const officeNumber = 121
            const testManager = new Manager ("Jim", 5678, "jimtest@gmail.com", officeNumber)
            expect(testManager.getOfficeNumber()).toBe(officeNumber)
        });
    });
    describe("getRole()", () => {
        it("should return the value 'Manager' which was returned from the function", () => {
            const role = "Manager"
            const testManager = new Manager ("Jim", 5678, "jimtest@gmail.com", 121)
            expect(testManager.getRole()).toBe(role)
        });
    });
});