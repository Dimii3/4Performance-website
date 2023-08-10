const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.btn-nav');
const navLinks = document.querySelectorAll('.nav__link');
// COUNTING
const counterBox = document.querySelector('.achievements-list');
const counterItems = document.querySelectorAll('.achievements-list__num');
// COOKIES
const cookie = document.querySelector('.cookie');
const cookiesBtns = document.querySelectorAll('.cookie__btn');
// FOOTER YEAR
const currentYear = document.querySelector('.footer__year');
// BACK TO TOP
const btnUp = document.querySelector('.btn-up');

// FUNCTIONALITY
let menuOpen = false;

const checkMenuIfOpen = () => {
	if (!menuOpen) {
		navBtn.classList.add('open');
		nav.classList.add('open');
		menuOpen = true;
	} else {
		navBtn.classList.remove('open');
		nav.classList.remove('open');
		menuOpen = false;
	}
};

const addBackground = () => {
	window.scrollY >= 300 ? nav.classList.add('nav-bgc') : nav.classList.remove('nav-bgc');
};

const showCookies = () => {
	const cookieEaten = localStorage.getItem('cookie');
	if (cookieEaten) {
		cookie.classList.add('hide');
	}
};

const handleCookie = () => {
	localStorage.setItem('cookie', 'true');
	cookie.classList.add('hide');
};
showCookies();

const options = {
	rootMargin: '30%',
};

const startCounter = (entry) => {
	if (entry[0].isIntersecting) {
		counterItems.forEach((counter) => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number');
				const value = parseInt(counter.textContent);
				const speed = 1;
				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`;
					setTimeout(updateCounter, 1);
				} else {
					counter.textContent = finalNumber;
				}
			};
			updateCounter();
		});
	}
};

const backtoTop = () => {
	scrollY >= 600 ? btnUp.classList.add('show') : btnUp.classList.remove('show');
};

const date = new Date().getFullYear();
currentYear.textContent = date;

// LISTENERS
const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);
navLinks.forEach((link) => {
	link.addEventListener('click', checkMenuIfOpen);
});
navBtn.addEventListener('click', checkMenuIfOpen);
window.addEventListener('scroll', addBackground);
window.addEventListener('scroll', backtoTop);
btnUp.addEventListener('click', () => {
	window.scrollTo(0, 0);
});
cookiesBtns.forEach((btn) => btn.addEventListener('click', handleCookie));
