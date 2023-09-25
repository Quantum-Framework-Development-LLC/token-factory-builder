const inquirer = require('inquirer');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'communityEngagement',
      message: 'Do you plan to encourage collaboration and contributions from the open-source community?',
    },
    {
      type: 'input',
      name: 'collaborationGuidelines',
      message: 'Describe the collaboration guidelines and contribution areas you plan to establish.',
      when: (answers) => answers.communityEngagement,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
};
