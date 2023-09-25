const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'decentralization',
      message: 'Regarding decentralization and DAO integration, are you considering transitioning to a DAO model?',
    },
    {
      type: 'input',
      name: 'decentralizationPlan',
      message: 'Outline the steps and timeline for achieving greater decentralization.',
      when: (answers) => answers.decentralization,
    }
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
