require('shelljs/global');
// const oFs = require('fs');

const start = () => {
	console.log('\nStart\n');
	exec('npm start');
}

const install = () => {
	console.log('\nInstalling manyp-ag.\n');
	exec('install-here manyp-ag');
	console.log('\nInstalling dependencies.\n');
	exec('npm i');
}

const help = () => {
	/*const sFile = oFs.readFileSync('./FILE.txt', 'UTF-8');
	console.log(sFile);*/
	console.log('HELP');
}

exports.start = start;
exports.install = install;
exports.help = help;