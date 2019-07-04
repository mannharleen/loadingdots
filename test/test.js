const { startLoadingDots, stopLoadingDots } = require('../index.js')

let p1 = () => {
	return new Promise( resolve => {
		// startLoadingDots('p1');
		resolver = () => {
			// dots = false
			// stopLoadingDots('p1');
			resolve()
		}
		setTimeout(resolver, 500);
	});	
}

startLoadingDots('p1');
p1().then( d => stopLoadingDots('p1'))


let p2 = new Promise( resolve => {
	startLoadingDots('p2');
	resolver = () => {
		// dots = false
		stopLoadingDots('p2');
		resolve()
	}
	setTimeout(resolver, 1000);
});


let p3 = new Promise( resolve => {
	startLoadingDots('p3');
	resolver = () => {
		// dots = false
		stopLoadingDots('p3');
		resolve()
	}
	setTimeout(resolver, 0);
});


let p4 = new Promise( (resolve, reject) => {
	startLoadingDots('p4')
	stopLoadingDots('p4')
	reject()
});
p4.catch( e => {})