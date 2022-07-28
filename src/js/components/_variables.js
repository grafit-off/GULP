// Variables
const body = document.querySelector('.body');
const isMobileDevice = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
const media = window.matchMedia("(max-width: 767px)");
const burgerMenu = new Burger(document.querySelector('.burger'), document.querySelector('.nav'))