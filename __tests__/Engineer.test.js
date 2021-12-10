const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer ('Becca', 77, '123go@gmail.com', 'RPB543');

test('creates github object', () => {
    expect(engineer.github).toBe('RPB543');
});

test('gets engineer github from getGithub()', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee from getRole()', () => {
    expect(engineer.getRole()).toEqual("Engineer");
});