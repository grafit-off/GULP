// Active header on scroll
const header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;

function navOpen() {
	if (prevScrollpos != 0) {
		header.classList.add('header--active');
		headerMenu.classList.add('menu--onscroll');
	} else {
		header.classList.remove('header--active');
		headerMenu.classList.remove('menu--onscroll');
	}
}
function navScroll() {
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos) {
			header.classList.add('header--active');
			headerMenu.classList.add('menu--onscroll');
		} else if (prevScrollpos = currentScrollPos) {
			header.classList.add('header--active');
			headerMenu.classList.add('menu--onscroll');
		} else {
			header.classList.remove('header--active');
			headerMenu.classList.remove('menu--onscroll');
		}
		prevScrollpos = currentScrollPos;
	}
}
navOpen()
navScroll()
// -- //

// cookies
const cookieEl = document.querySelector('.cookie-block');
const cookieSubmitBtn = document.querySelector('.btn-cookies');
cookieSubmitBtn.addEventListener('click', () => {
	cookieEl.style.display = 'none';
});
let cookies = () => {
	if (!Cookies.get('hide-cookie')) {
		setTimeout(() => {
			cookieEl.style.display = 'block';
		}, 1000);
	}
	Cookies.set('hide-cookie', 'true', {
		expires: 30
	});
}
cookies();
// -- //


