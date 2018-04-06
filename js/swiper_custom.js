/**
 * swiper.js
 * 以下参照
 * http://idangero.us/swiper/api/
 */

//Skip button hide
var swiperSkipHide = function() {
	$(".swiper-skip").remove();
}

//Swipe Main
window.addEventListener('DOMContentLoaded', function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		paginationClickable: false,
		speed: 500,
		touchRatio: 0.2,
		autoHeight: true,
		nested: true,
		mousewheel: false,
		simulateTouch: true,
		breakpoints: {
			768: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		},
		on:{
			click(){
				swiper.slideNext(400);
			},
			reachEnd: function() {
				swiperSkipHide();
				swiper.allowSlidePrev= false;
			},
		},
	});
} , false);

