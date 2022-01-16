require('shelljs/global');
var oFs = require('fs');

var start = () => {
	console.log('\nStart\n');
	exec('npm start');
}

var launch = () => {
	console.log('\nLaunch\n');
	exec('npm run launch');
}

var install = () => {
	console.log('\nInstalling manyp-ag.\n');
	exec('install-here manyp-ag');
	console.log('\nInstalling dependencies.\n');
	exec('npm i');
}

var html = () => {
	let sPath = `${process.env.APPDATA}`;
	sPath = `${sPath}/npm/node_modules/processpy/process.py`;
	exec(`python ${sPath} -html`);
}

var version = () => {
	let sPath = `${process.env.APPDATA}`;
	sPath = `${sPath}/npm/node_modules/manyp-cli/package.json`;
	let oData = JSON.parse(oFs.readFileSync(sPath, 'UTF-8'));
	console.log(`${oData.version} (${oData.name}@${oData.version})`);
}

var help = () => {
	let sPath = `${process.env.APPDATA}`;
	sPath = `${sPath}/npm/node_modules/manyp-cli/HELP.txt`;
	let sFile = oFs.readFileSync(sPath, 'UTF-8');
	console.log(sFile);
}

exports.start = start;
exports.launch = launch;
exports.install = install;
exports.html = html;
exports.version = version;
exports.help = help;