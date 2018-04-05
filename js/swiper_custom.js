/**
 * swiper.js
 * 以下参照
 * http://idangero.us/swiper/api/
 */
// sample04

//Skip button hide
var swiperSkipHide = function() {
	$(".swiper-skip").remove();
}

//Swipe Main
window.addEventListener('DOMContentLoaded', function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: false,
		speed: 500,
		touchRatio: 0.2,
		autoHeight: true,
		nested: true,
		simulateTouch: true,
		breakpoints: {
			767: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		},
		onClick(i){
			i.slideNext(400);
		},
		onReachEnd: function(i) {
			i.disableMousewheelControl();
			i.disableTouchControl();
			swiperSkipHide();
		},
	});
} , false);

