const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'documentation',
      message: 'Do you want to generate comprehensive documentation for your project?',
    },
    {
      type: 'input',
      name: 'documentationSections',
      message: 'Outline the sections you plan to include in the documentation (e.g., setup guide, usage examples, developer resources).',
      when: (answers) => answers.documentation,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
