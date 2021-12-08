const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML');

// link team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create empty array to hold team 
const teamArr = []

inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter the employee name!';
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the employee ID.',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a response!';
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return 'Please enter an email!';
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeInput => {
            const { name, id, email, officeNumber, role, github, school, confirmAddEmployee } = employeeInput;
            
            if (role === "Manager") {
            const manager = new Manager(name, id, email, officeNumber);
            }
            else if (role === "Engineer") {
            let employee = new Engineer (name, id, email, github);
            }
            else if (role === "Intern") {
                employee= new Intern (name, id, email, school);
            }

            teamArr.push(manager);
            teamArr.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArr); 
            } else {
                return teamArr;
            }
        })

// function to generate HTML using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 