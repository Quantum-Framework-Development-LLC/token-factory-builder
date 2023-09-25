const inquirer = require('inquirer');

module.exports = async function() {
  const testing = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'testingFramework',
      message: 'Do you want to integrate a testing framework?',
    },
    {
      type: 'input',
      name: 'testingFrameworkName',
      message: 'Specify the testing framework (e.g., Truffle, Hardhat).',
      when: (answers) => answers.testingFramework,
    },
    {
      type: 'confirm',
      name: 'unitTests',
      message: 'Do you want to include unit tests, integration tests, and end-to-end tests?',
      when: (answers) => answers.testingFramework,
    },
  ]);

  if (testing.testingFramework) {
    console.log(`Great! You've chosen to integrate the ${testing.testingFrameworkName} testing framework into your project.`);
    if (testing.unitTests) {
      console.log('You will also include unit tests, integration tests, and end-to-end tests.');
    } else {
      console.log('You have chosen not to include unit tests, integration tests, and end-to-end tests.');
    }
  } else {
    console.log('You have chosen not to integrate a testing framework into your project.');
  }
};
