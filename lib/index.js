require('shelljs/global');
var oFs = require('fs');

var start = () => {
	console.log('\nStart\n');
	exec('npm start');
}

var server = () => {
	console.log('\nServer\n');
	exec('npm run server');
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

var update = () => {
	console.log('\nUpdate manyp-ag.\n');
	exec('install-here manyp-ag');
	console.log('\nUpdate dependencies.\n');
	exec('npm update');
}

var html = () => {
	let sPath = getPath();
	sPath = `${sPath}/processpy/process.py`;
	exec(`python ${sPath} -html`);
}

var version = () => {
	let sPath = getPath();
	sPath = `${sPath}/manyp-cli/package.json`;
	let oData = JSON.parse(oFs.readFileSync(sPath, 'UTF-8'));
	console.log(`${oData.version} (${oData.name}@${oData.version})`);
}

var help = () => {
	let sPath = getPath();
	sPath = `${sPath}/manyp-cli/HELP.txt`;
	let sFile = oFs.readFileSync(sPath, 'UTF-8');
	console.log(sFile);
}

var getPath = () => {
	let sPath = '';

	sPath = `${process.env.APPDATA}/npm/node_modules`;
	if(oFs.existsSync(sPath)){ return sPath; }

	sPath = `/usr/local/lib/node`;
	if(oFs.existsSync(sPath)){ return sPath; }

	sPath = `/usr/local/lib/node_modules`;
	return sPath;
}

exports.start = start;
exports.server = server;
exports.launch = launch;
exports.install = install;
exports.update = update;
exports.html = html;
exports.version = version;
exports.help = help;