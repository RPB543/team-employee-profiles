const Employee = require('../lib/Employee.js');
const employee = new Employee('Becca', 77, '123go@gmail.com');


test('creates an employee object', () => {
    expect(employee.name).toBe('Becca');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('123go@gmail.com');
});

test('gets name from getName()', () => {
    expect(employee.getName()).toBe('Becca');
});

test('gets employee ID from getID()', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email from getEmail()', () => {
    expect(employee.getEmail()).toBe(employee.email);
});

test('gets role of employee from getRole()', () => {
    expect(employee.getRole()).toEqual("Employee");
}); 