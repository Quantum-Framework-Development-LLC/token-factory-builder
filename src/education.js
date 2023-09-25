const inquirer = require('inquirer');

module.exports = async function() {
  const education = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'educationPortal',
      message: 'For user onboarding and education, will you create an education portal for users?',
    },
    {
      type: 'input',
      name: 'educationContent',
      message: 'Outline the content and resources you plan to include.',
      when: (answers) => answers.educationPortal,
    },
  ]);

  return education;
};
