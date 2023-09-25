const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'tokenCustomization',
      message: 'Do you want to provide customization options for token parameters?',
    },
    {
      type: 'input',
      name: 'tokenParameters',
      message: 'Specify the customizable parameters (e.g., Token Name, Token Symbol, Token Decimals).',
      when: (answers) => answers.tokenCustomization,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
