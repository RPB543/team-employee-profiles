const Employee = require('../lib/Employee.js');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Becca', 21, '123go@gmail.com');

    expect(employee.name).toBe('Becca');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('123go@gmail.com');
});