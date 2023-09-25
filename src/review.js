const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'input',
      name: 'projectScope',
      message: 'Please summarize your project\'s scope.',
    },
    {
      type: 'input',
      name: 'keyFeatures',
      message: 'What are the key features of your project?',
    },
    {
      type: 'input',
      name: 'concerns',
      message: 'Do you have any concerns or clarifications needed?',
    },
  ];

  const answers = await inquirer.prompt(questions);

  console.log('\nReview of your project plan:');
  console.log(`Project Scope: ${answers.projectScope}`);
  console.log(`Key Features: ${answers.keyFeatures}`);
  console.log(`Concerns or Clarifications: ${answers.concerns}`);
};
