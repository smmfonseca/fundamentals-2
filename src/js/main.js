/* import {animatedScrollTo} from './es6-scroll-to.js';

document.querySelector('.title').innerHTML = 'Great success!'
document.querySelector('.text').innerHTML = 'Javascript is working!'

animatedScrollTo(500); */


// jQuery
/* $(".js-button").click(function () {
	$(".slider").toggleClass("show");
}); */


// JAVASCRIPT

/* const btn = document.querySelector('.js-button');
const slide = document.querySelector('.slider');

btn.addEventListener("onClick", function() {
	slider.classList.toggle("show");
}); */


// JS SLIDER APPLIED TO ALL BTNS

const btns = document.querySelectorAll('.js-button');

btns.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		let slider = event.target.closest('.content').querySelector('.slider');
		if (slider.classList.contains('show')) {
			slider.classList.remove('show');
		} else {
			document.querySelectorAll('.slider').forEach((slider) => {
				slider.classList.remove('show');
			})
			slider.classList.add('show');
		}
	})
});
