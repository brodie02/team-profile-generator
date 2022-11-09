const Employee = require("../lib/employee");

const employee = new Employee('John', 1, 'john@gmail.com')

describe('Employee Class', () => {
    it('Can set name via constructor arguments', () => {
        expect(employee.name).toEqual('John')
    });

    it('Can set id via constructor arguments', () => {
        expect(employee.id).toEqual('John')
    });

    it('Can set email via constructor arguments', () => {
        expect(employee.email).toEqual('john@gmail.com')
    });

    it('Can get name via getName()', () => {
        expect(employee.getName()).toEqual('John')
    });

    it('Can get name via getId()', () => {
        expect(employee.getId()).toEqual(1)
    });

    it('Can get name via getEmail()', () => {
        expect(employee.getName()).toEqual('john@gmail.com')
    });

    it('getRole() should return "Employee"', () => {
        expect(employee.getRole()).toEqual('Employee')
    });
});

