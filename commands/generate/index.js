const { getArgs } = require('../../utils/args');
const template = require('./template');

const args = getArgs();

const generateMap = {
  template: template,
  t: template
};

module.exports = function generate() {
  const type = args._[1];

  if (!type) {
    console.error('Error: A generation type must be supplied.');
    process.exit(1);
  }

  if (!generateMap[type]) {
    console.error('Error: Invalid generation type supplied.');
    process.exit(1);
  }

  const fn = generateMap[type];
  return fn();
};
