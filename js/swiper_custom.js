/**
 * swiper.js
 */
// sample04
var swiperSkipHide = function() {
	const elSkip = document.getElementsByClassName('swiper-skip');
	console.log(elSkip);
	elSkip.parentNode.removeChild(elSkip);
}
window.addEventListener('DOMContentLoaded', function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		speed: 1000,
		mousewheelControl: true,
		paginationClickable: false,
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		},
		queueEndCallbacks: true,
		onReachEnd: function(i) {
			i.disableMousewheelControl();
			i.disableTouchControl();
			swiperSkipHide();
		},
	});
}, false);