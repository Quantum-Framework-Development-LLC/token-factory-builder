const inquirer = require('inquirer');
const github = require('./github');
const testing = require('./testing');
const network = require('./network');
const deployment = require('./deployment');
const interactive = require('./interactive');
const documentation = require('./documentation');
const community = require('./community');
const features = require('./features');
const token = require('./token');
const security = require('./security');
const governance = require('./governance');
const privacy = require('./privacy');
const accessibility = require('./accessibility');
const interoperability = require('./interoperability');
const education = require('./education');
const monitoring = require('./monitoring');
const legal = require('./legal');
const decentralization = require('./decentralization');
const outreach = require('./outreach');
const review = require('./review');

console.log("Welcome to the Token Factory Builder! This tool will assist you in creating a project for deploying synthetic token smart contracts, customized to your specifications. Let's get started by breaking down your project requirements into smaller parts.");

async function main() {
  await github();
  await testing();
  await network();
  await deployment();
  await interactive();
  await documentation();
  await community();
  await features();
  await token();
  await security();
  await governance();
  await privacy();
  await accessibility();
  await interoperability();
  await education();
  await monitoring();
  await legal();
  await decentralization();
  await outreach();
  await review();
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
