const inquirer = require('inquirer');
const axios = require('axios');

module.exports = async function() {
  const questions = [
    {
      type: 'confirm',
      name: 'newRepo',
      message: 'Would you like to create a new GitHub repository for your project?',
    },
    {
      type: 'input',
      name: 'repoName',
      message: 'Provide the desired repository name.',
      when: (answers) => answers.newRepo,
    },
    {
      type: 'input',
      name: 'repoURL',
      message: 'Please provide the existing repository URL.',
      when: (answers) => !answers.newRepo,
    },
  ];

  const answers = await inquirer.prompt(questions);

  if (answers.newRepo) {
    try {
      const response = await axios.post(
        'https://api.github.com/user/repos',
        {
          name: answers.repoName,
        },
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      );

      console.log(`Successfully created new repository at ${response.data.html_url}`);
    } catch (error) {
      console.error('Failed to create new repository', error);
    }
  } else {
    console.log(`Using existing repository at ${answers.repoURL}`);
  }
};
