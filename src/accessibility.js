const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'accessibilityCompliance',
      message: 'Regarding accessibility and inclusivity, will you ensure accessibility standards compliance?',
    },
    {
      type: 'input',
      name: 'accessibilityMeasures',
      message: 'Describe the accessibility measures you will put in place.',
      when: (answers) => answers.accessibilityCompliance,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
