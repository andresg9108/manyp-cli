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
	console.log(` HELP

 Run "manyp-cli [command]".

 Command list: 

 - start => It makes our project aware of the changes to automatically execute the corresponding commands. In the development phase the project must always be attentive to changes and to exit you just have to use Ctrl + C.
 - install => Loads the "manyp" files and directories over the current directory.
 - help => This help message.`);
}

exports.start = start;
exports.install = install;
exports.help = help;