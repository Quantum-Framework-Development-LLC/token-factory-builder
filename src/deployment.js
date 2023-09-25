const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'deploymentScripts',
      message: 'Do you need deployment scripts for deploying smart contracts?',
    },
    {
      type: 'input',
      name: 'blockchainNetwork',
      message: 'Provide the blockchain network for which you want to create deployment scripts (e.g., Ethereum, testnet).',
      when: (answers) => answers.deploymentScripts,
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};
