#!/usr/bin/env node

const { program } = require('commander');

const { printPPInfos } = require('..');

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false);

program
  .arguments('<pid>')
  .description('Print some infos about process and its parent', {
    pid: 'The process ID to check',
  })
  .action((pid, options) => {
    printPPInfos(pid, options);
  });

program.parse(process.argv);
