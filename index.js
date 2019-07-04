var loadingDots

var dots = {}

module.exports.startLoadingDots = function startLoadingDots(name) {
	if (name == null) throw new Error('Please provide a name to the loadingDots')
	process.stdout.write('\nStarting ' + name)	
	dots[name] = setInterval(() => {
		process.stdout.write('.')	
	}, 100);	
}

module.exports.stopLoadingDots = function stopLoadingDots(name) {
	process.stdout.write(' Finied ' + name)
	clearInterval(dots[name]);
}

