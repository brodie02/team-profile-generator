const Intern = require('../lib/intern')

const intern = new Intern('Flinders')

describe('Intern Class', () => {
    it('Can set school via constructor', () => {
        expect(intern.school).toEqual('Flinders')
    });

    it('Can get school via getSchool()', () => {
        expect(intern.getSchool()).toEqual('Flinders')
    });

    it('getRole() should return "Intern"', () => {
        expect(intern.getRole()).toEqual('Intern')
    });
});