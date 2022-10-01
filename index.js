const inquirer = require("inquirer");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const fs = require("fs");
const generateTemplate = require("./src/generate-template");

const createTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployees",
        message: "what type of employee would you like to add?:",
        choices: ["Manager", "Engineer", "Intern", "Finish building team"],
      },
    ])
    .then(function (userInput) {
      switch (userInput.addEmployees) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          generateWebpage();
      }
    });
};

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter manager name:",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter manager ID: ",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number:",
      },
    ])
    .then((answers) => {
      const Manager = new manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      employeeArray.push(Manager);
      createTeam();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter engineers name",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter employee ID:",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter engineer's email address:",
      },
      {
        type: "input",
        name: "githubUser",
        message: "Enter engineer's github username:",
      },
    ])
    .then((answers) => {
      const Engineer = new engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      employeeArray.push(Engineer);
      createTeam();
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter interns name",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter employee ID:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email address:",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school:",
      },
    ])
    .then((answers) => {
      const Intern = new intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      employeeArray.push(Intern);
      createTeam();
    });
};

const employeeArray = [];

function generateWebpage() {
  generateCards = generateTemplate(employeeArray);
  fs.writeFile("./dist/index.html", generateCards, (err) => {
    if (err) throw new Error(err);
    console.log("HTML file created successfully!");
  });
}

createTeam();
