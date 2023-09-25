const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'newRepo',
      message: 'Would you like to create a new GitHub repository for your project?',
    },
    {
      type: 'input',
      name: 'repoName',
      message: 'Provide the desired repository name.',
      when: (answers) => answers.newRepo,
    },
    {
      type: 'input',
      name: 'repoURL',
      message: 'Please provide the existing repository URL.',
      when: (answers) => !answers.newRepo,
    },
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
    },
    {
      type: 'confirm',
      name: 'networkScripts',
      message: 'Do you want to create network management scripts?',
    },
    {
      type: 'input',
      name: 'blockchainNetworks',
      message: 'Specify the blockchain networks you plan to manage (e.g., Ethereum, Binance Smart Chain).',
      when: (answers) => answers.networkScripts,
    },
    // ... continue with the rest of the questions
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
