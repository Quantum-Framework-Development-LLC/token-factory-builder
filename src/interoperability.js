const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'interoperability',
      message: 'For interoperability and cross-chain compatibility, do you plan to make your project interoperable with other blockchain networks?',
    },
    {
      type: 'input',
      name: 'interoperabilityMechanisms',
      message: 'Specify the interoperability mechanisms or networks you intend to integrate with.',
      when: (answers) => answers.interoperability,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
