const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer ('Becca', 77, '123go@gmail.com', 'RPB543');

// creating github object  
test('creates github object', () => {
  expect(engineer.github).toBe('RPB543');
});

// gets github from getGithub()
test('gets engineer github', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    expect(engineer.getRole()).toEqual("Engineer");
});