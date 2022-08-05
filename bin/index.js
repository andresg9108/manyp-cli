#!/usr/bin/env node
var oApp = {};

oApp.fs = require('fs');
oApp.commander = require('commander');
oApp.useful = require('../lib/useful.js');
oApp.commands = require('../controller/commands.js');

let sPath = oApp.useful.getPath();
sPath = `${sPath}/manyp-cli/package.json`;
oApp.packageJson = JSON.parse(oApp.fs.readFileSync(sPath, 'utf-8'));

try{
	oApp.commander.version(oApp.packageJson.version)
	.description(oApp.packageJson.description);


	oApp.commander
	.action(() => {
		throw(1);
	});

	// Install package manyp in the current folder.
	oApp.commander.command('install')
	.alias('i')
	.description('Install package manyp in the current folder.')
	.action(() => {
		oApp.commands.install();
	});

	// Update all manyp packages in the current folder.
	oApp.commander.command('update')
	.alias('u')
	.description('Update all manyp packages in the current folder.')
	.action(() => {
		oApp.commands.update();
	});

	// Makes our project aware of the changes to automatically execute the corresponding commands.
	oApp.commander.command('start')
	.alias('s')
	.description('Makes our project aware of the changes to automatically execute the corresponding commands.')
	.action(() => {
		oApp.commands.start();
	});

	// Run only the local server.
	oApp.commander.command('server')
	.alias('sv')
	.description('Run only the local server.')
	.action(() => {
		oApp.commands.server();
	});

	// Equivalent to running processpy command #1.
	oApp.commander.command('html')
	.alias('h')
	.description('Equivalent to running processpy command #1.')
	.action(() => {
		oApp.commands.html();
	});

	// Execute the "launch" script of our "package.json".
	oApp.commander.command('launch')
	.alias('l')
	.description('Execute the "launch" script of our "package.json".')
	.action(() => {
		oApp.commands.launch();
	});

	oApp.commander.parse(process.argv);
}catch(e){
	switch(e){
		case 1:
			console.log(` Error: The instruction is not recognized. Run "manyp-cli -h" to get help.`);
        	break;
        default:
        	console.log(` Unexpected error.`)
        	console.log(e)
        	break;
    }
}
