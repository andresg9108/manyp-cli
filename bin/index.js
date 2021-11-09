#!/usr/bin/env node

const oManypCli = require('../lib/index.js');

const aArgs = process.argv.splice(process.execArgv.length + 2);

oManypCli.say(JSON.stringify(aArgs));
