require('shelljs/global');
var oFs = require('fs');

var start = () => {
	console.log('\nStart\n');
	exec('npm start');
}

var install = () => {
	console.log('\nInstalling manyp-ag.\n');
	exec('install-here manyp-ag');
	console.log('\nInstalling dependencies.\n');
	exec('npm i');
}

var html = () => {
	let sProcesspyPath = (typeof process.env.npm_config_prefix !== 'undefined') ? process.env.npm_config_prefix : process.env.dp0;
	sProcesspyPath = `${sProcesspyPath}/node_modules/processpy/`;
	exec(`python ${sProcesspyPath}process.py -html`);
}

var version = () => {
	let sPath = `${process.env.APPDATA}/npm`;
	sPath = `${sPath}/node_modules/manyp-cli/package.json`;
	let oData = JSON.parse(oFs.readFileSync(sPath, 'UTF-8'));
	console.log(`${oData.version} (${oData.name}@${oData.version})`);
}

var help = () => {
	let sPath = `${process.env.APPDATA}/npm`;
	sPath = `${sPath}/node_modules/manyp-cli/HELP.txt`;
	let sFile = oFs.readFileSync(sPath, 'UTF-8');
	console.log(sFile);
}

exports.start = start;
exports.install = install;
exports.html = html;
exports.version = version;
exports.help = help;