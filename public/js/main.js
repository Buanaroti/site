$(document).ready(function() {
	//slider
	$('.js-main-slider').slick({
		dots: false, 
		arrows: false, 
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1000
	});

	//scroll-link
	$('.js-scroll-link').on('click', function(e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($(anchor.attr('href')).offset().top)
		}, 700);
	});
});