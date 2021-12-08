const Employee = require('./Employee');

// created constructor for Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call parent constructor
        super(name, id, email)
        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

    // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;