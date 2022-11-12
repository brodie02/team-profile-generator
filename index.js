const inquirer = require('inquirer')
const fs = require('fs')
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

inquirer.prompt([
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'office',
    },
    {
        type: 'loop',
        name: "employees",
        message: "Add another employee?",
        questions: [
            {
                type: 'list',
                message: 'What type of employee are you adding?',
                name: 'type',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: 'What is the employees name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the employees ID number?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the employees email address?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the employees github username?',
                name: 'github',
                when: (employee) => employee.type === 'Engineer'
            },
            {
                type: 'input',
                message: 'What is the name of the employees school?',
                name: 'school',
                when: (employee) => employee.type === 'Intern'
            },
        ]
    } 
])