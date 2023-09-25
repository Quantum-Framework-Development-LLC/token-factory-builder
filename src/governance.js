const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'governance',
      message: 'Regarding governance and sustainability, do you intend to implement governance mechanisms within your project?',
    },
    {
      type: 'input',
      name: 'governanceModel',
      message: 'Describe the governance model and how decisions will be made.',
      when: (answers) => answers.governance,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
