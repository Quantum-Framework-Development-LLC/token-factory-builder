const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'dataProtection',
      message: 'For user privacy and data protection, will you implement data protection measures?',
    },
    {
      type: 'input',
      name: 'dataProtectionMeasures',
      message: 'Explain the data protection measures you plan to adopt.',
      when: (answers) => answers.dataProtection,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
