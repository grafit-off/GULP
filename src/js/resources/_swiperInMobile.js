// Swiper
/* 
	const swiperObj = {
		containerModifierClass: "classification-swiper",
		wrapperClass: "classification-swiper__wrapper",
		slideClass: "classification-swiper__slide",
		slidesPerView: 1,
		pagination: {
			el: ".classification-swiper__pagination",
			clickable: true
		},
		watchSlidesVisibility: true
	};
	const classificationSwiper = new MobileSwiper('classification-swiper', swiperObj, 767);
	classificationSwiper.init();
*/
class MobileSwiper {
	constructor(selector, swiperObj, breakpoint) {
		this.selector = document.querySelector(`.${selector}`);
		this.selectorClassName = selector;
		this.breakpoint = breakpoint;
		this.swiperObj = swiperObj;
		this.initSlider = null;
	}
	create() {
		if (window.innerWidth <= this.breakpoint && this.selector.dataset.mobile == 'false') {
			this.initSlider = new Swiper(this.selector, this.swiperObj);
			this.selector.dataset.mobile = 'true';
		}
	}
	destroy() {
		if (window.innerWidth > this.breakpoint) {
			this.selector.dataset.mobile = 'false';
			if (this.selector.classList.contains(`${this.selectorClassName}initialized`)) {
				this.initSlider.destroy();
			}
		}
	}
	init() {
		this.selector.dataset.mobile = 'false';
		this.create();
		this.destroy();
	}
}
