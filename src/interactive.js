const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'interactiveScript',
      message: 'Do you want to build a text-based interactive script for users?',
    },
    {
      type: 'input',
      name: 'customizationOptions',
      message: 'Specify the customization options you want to include (e.g., token parameters, pricing sources, deployment choices).',
      when: (answers) => answers.interactiveScript,
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};
