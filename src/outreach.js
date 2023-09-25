const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'globalOutreach',
      message: 'To engage with a global audience, do you plan to organize blockchain events or expand outreach efforts?',
    },
    {
      type: 'input',
      name: 'outreachStrategies',
      message: 'Describe your outreach strategies and regions of focus.',
      when: (answers) => answers.globalOutreach,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
