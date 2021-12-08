const Manager = require('../lib/Manager.js');
const manager = new Manager('Becca', 77, '123go@gmail.com', '456');

test('creates office number object', () => {
    expect(manager.officeNumber).toBe('456');
  });
  
  test('gets manager number with getOfficeNumber()', () => {
      expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
  });

test('gets role of manager from getRole()', () => {
    expect(manager.getRole()).toEqual("Manager");
}); 