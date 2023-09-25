const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'legalConsultation',
      message: 'For addressing legal and ethical considerations, will you consult legal experts for compliance?',
    },
    {
      type: 'input',
      name: 'legalFocus',
      message: 'Describe the areas of legal compliance you\'ll focus on.',
      when: (answers) => answers.legalConsultation,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
