const Intern = require('../lib/Intern.js');
const intern = new Intern('Becca', 77, '123go@gmail.com', 'Columbia');

// creating school object  
test('creates school object', () => {
    expect(intern.school).toBe('Columbia');
  });
  
  // gets school from getSchool()
  test('gets intern school with getSchool()', () => {
      expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
  });


// gets role from getRole()
test('gets role of intern', () => {
    expect(intern.getRole()).toEqual("Intern");
}); 