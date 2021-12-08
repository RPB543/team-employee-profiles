const Employee = require('../lib/Employee.js');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Becca', 21, '123go@gmail.com');

    expect(employee.name).toBe('Becca');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('123go@gmail.com');
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Becca', 21, '123go@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('123go@gmail.com');

    expect(employee.getEmail()).toBe(employee.email);
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Becca');

    expect(employee.getRole()).toEqual("Employee");
}); 