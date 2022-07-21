const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

//  клик по кнопке

navBtn.addEventListener('click', function (event) {
	event.stopPropagation();
	mobileNav.classList.toggle('mobile-nav-active');
	navBtn.classList.toggle('nav__button-close');
	body.classList.toggle('no-scroll');
})
// Клик по окну за пределами навигации

window.addEventListener('click', function() {
	console.log('Click on window');
	
	if (body.classList.contains('no-scroll')) {
		mobileNav.classList.toggle('mobile-nav-active');
		navBtn.classList.toggle('nav__button-close');
		body.classList.toggle('no-scroll');
	}
})
//  Остановка клика по мобильной навигации


mobile-nav.addEventListener('click', function (event) {
	event.stopPropagation()
})