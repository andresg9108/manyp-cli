#!/usr/bin/env node

try{
	var oManypCli = require('../lib/index.js');

	const aArgs = process.argv.splice(process.execArgv.length + 2);
	const sCommand = aArgs[0];

	switch (sCommand) {
		case 'start':
			oManypCli.start();
			break;
		case 'install':
			oManypCli.install();
			break;
		case 'html':
			oManypCli.html();
			break;
		case 'help':
			oManypCli.help();
			break;
		default:
			throw(`The instruction "${sCommand}" is not recognized. Run "manyp-cli help" to get help.`);
			break;
	}
}catch(e){
	console.log(` Error:\n ${e}`);
}
