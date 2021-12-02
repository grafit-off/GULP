// Debounce
/*
	const resizeFunc = () => {
		classificationSwiper.init();
		console.log('Debounce');
	}
	const debounceFunc = new Debounce(100, resizeFunc);

	window.addEventListener('resize', () => {
		debounceFunc.init();
	});
*/

class Debounce {
	constructor(time = 100, functions = () => { }) {
		this.time = time;
		this.functions = functions;
		this.timeOut = null;
	}

	init() {
		clearTimeout(this.timeOut);
		this.timeOut = setTimeout(() => {
			this.functions();
		}, this.time);
	}
}
