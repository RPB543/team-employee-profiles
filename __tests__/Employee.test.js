const Employee = require('../lib/Employee.js');
const employee = new Employee('Becca', 77, '123go@gmail.com');


// creates employee object 
test('creates an employee object', () => {
    expect(employee.name).toBe('Becca');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('123go@gmail.com');
});

// gets name from getName()
test('gets name from getName()', () => {
    expect(employee.getName()).toBe('Becca');
});

// gets id from getId() 
test('gets employee ID', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    expect(employee.getEmail()).toBe(employee.email);
});

// gets role from getRole()
test('gets role of employee', () => {
    expect(employee.getRole()).toEqual("Employee");
}); 