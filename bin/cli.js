#!/usr/bin/env node

const { getArgs } = require('../utils/args');
const generate = require('../commands/generate/index');

const args = getArgs();

const commandMap = {
  generate: generate,
  g: generate,
};

(() => {
  const command = args._[0];

  if (!command) {
    console.error('Error: A command must be supplied.');
    process.exit(1);
  }

  if (!commandMap[command]) {
    console.error('Error: Invalid command supplied.');
    process.exit(1);
  }

  const fn = commandMap[command];
  return fn();
})();
