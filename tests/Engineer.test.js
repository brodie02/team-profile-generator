const Engineer = require('../lib/engineer')

const engineer = new Engineer('John', 1, 'john@gmail.com', 'john01')

describe('Engineer Class', () => {
    it('Can set GitHub username via constructor', () => {
        expect(engineer.github).toEqual('john01')
    });

    it('Can get GitHub username via getGithub()', () => {
        expect(engineer.getGithub()).toEqual('john01')
    });

    it('getRole() should return "Engineer"', () => {
        expect(engineer.getRole()).toEqual('Engineer')
    });
});