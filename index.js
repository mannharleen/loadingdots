var loadingDots

var dots = {} // {name: [<theInterval>, current-cursor-posX, Y]}
let numDots = 0

module.exports.startLoadingDots = function startLoadingDots(name) {
	if (name == null) {
		throw new Error('Please provide a name to the loadingDots')	
	}
	numDots = numDots + 1	
	process.stdout.cursorTo( 0, numDots - 1);
	if (numDots == 1) {
		// is first promise, so clear screen
		process.stdout.clearScreenDown()
	}
	

	process.stdout.write('Starting ' + name)

	dots[name] = []
	dots[name][2] = numDots - 1
	dots[name][1] = 'Starting '.length + name.length
	dots[name][0] = setInterval(() => {		
		process.stdout.cursorTo(dots[name][1] , dots[name][2]);
		process.stdout.write('.')	
		dots[name][1] = dots[name][1] + 1
	}, 100);
	
}

module.exports.stopLoadingDots = function stopLoadingDots(name) {
	process.stdout.cursorTo(dots[name][1] , dots[name][2]);
	process.stdout.write(' Finished ' + name)
	clearInterval(dots[name][0]);
	process.stdout.cursorTo( 0, numDots); // move cursor below all 
}


