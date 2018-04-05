/**
 * swiper.js
 */
// sample04
var swiperSkipHide = function() {
	$(".swiper-skip").remove();
}
window.addEventListener('DOMContentLoaded', function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: false,
		speed: 1000,
		touchRatio: 0.2,
		autoHeight: true,
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 10
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