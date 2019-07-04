const { startLoadingDots, stopLoadingDots } = require('../index.js')

let p1 = new Promise( resolve => {
	startLoadingDots('p1');
	resolver = () => {
		// dots = false
		stopLoadingDots('p1');
		resolve()
	}
	setTimeout(resolver, 1000);
});

let p2 = new Promise( resolve => {
	startLoadingDots('p2');
	resolver = () => {
		// dots = false
		stopLoadingDots('p2');
		resolve()
	}
	setTimeout(resolver, 3000);
});