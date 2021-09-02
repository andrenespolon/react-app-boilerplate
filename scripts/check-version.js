const fs = require('fs');

const GREEN_FG = '\x1b[32m';
const RED_FG = '\x1b[31m';
const YELLOW_FG = '\x1b[33m';
const BRIGHT = '\x1b[1m';
const RESET = '\x1b[0m';

const currentNodeVersion = process.versions.node;
const currentNodeVersionArray = currentNodeVersion.split('.');

const expectedNodeVersion = fs.readFileSync('.nvmrc').toString().trim();
const expectedNodeVersionArray = expectedNodeVersion.split('.');

// check main version only
if (Number(currentNodeVersionArray[0]) < Number(expectedNodeVersionArray[0])) {
	return _error();
} else {
	_success();
}

function _error() {
	console.log(`${BRIGHT}${RED_FG}Incorrect node version installed!${RESET}\n`);
	console.log(
		`Current node version.......${RED_FG}${currentNodeVersion}${RESET}`
	);
	console.log(
		`Expected node version......${GREEN_FG}${expectedNodeVersion}${RESET}`
	);
	console.log();
	console.log(
		`${YELLOW_FG}One solution to manage multiple versions of node is nvm.${RESET}`
	);
	process.exit(1);
}

function _success() {
	console.log(`${GREEN_FG}Node version checked!${RESET}\n`);
}
