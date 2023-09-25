const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'additionalFeatures',
      message: 'Are you considering additional features beyond the basic requirements?',
    },
    {
      type: 'input',
      name: 'advancedFeatures',
      message: 'List the advanced features you want to implement (e.g., security measures, web interface, governance mechanisms).',
      when: (answers) => answers.additionalFeatures,
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
};
