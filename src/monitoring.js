const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'monitoring',
      message: 'Regarding monitoring and analytics, do you plan to integrate monitoring tools for your project?',
    },
    {
      type: 'input',
      name: 'monitoringTools',
      message: 'Specify the monitoring tools and metrics you intend to track.',
      when: (answers) => answers.monitoring,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
