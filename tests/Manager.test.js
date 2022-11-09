const Manager = require('../lib/manager')

const manager = new Manager('John', 1, 'john@gmail.com', 123)

describe('Manager Class', () => {
    it('Can set office number via constructor', () => {
        expect(manager.office).toEqual(123)
    });

    it('Can get office number via getOffice()', () => {
        expect(manager.getOffice()).toEqual(123)
    });

    it('getRole() should return "Manager"', () => {
        expect(manager.getRole()).toEqual('Manager')
    });
});