const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'securityMeasures',
      message: 'Are you planning to implement security measures within your project?',
    },
    {
      type: 'input',
      name: 'securityStrategies',
      message: 'Describe the security measures or strategies you intend to employ.',
      when: (answers) => answers.securityMeasures,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
