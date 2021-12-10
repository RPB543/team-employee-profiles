const Intern = require('../lib/Intern.js');
const intern = new Intern('Becca', 77, '123go@gmail.com', 'Columbia');

test('creates school object', () => {
    expect(intern.school).toBe('Columbia');
});
  
test('gets intern school with getSchool()', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of intern from getRole()', () => {
    expect(intern.getRole()).toEqual("Intern");
}); 