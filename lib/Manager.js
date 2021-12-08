const Employee = require('./Employee');

// Manager constructor extends employee constructor 
class Manager extends Employee  {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 

        this.officeNumber = officeNumber; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to manager
    getRole () {
        return "Manager";
    }
}
module.exports = Manager; 