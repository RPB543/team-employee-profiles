const Employee = require('./Employee');

// // created constructor for Employee
class Engineer extends Employee {
    constructor (github) {
        this.github = github; 
    }
}

module.exports = Engineer;