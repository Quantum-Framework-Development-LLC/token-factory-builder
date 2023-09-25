const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
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
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};
