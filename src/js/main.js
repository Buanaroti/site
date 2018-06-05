$(document).ready(function() {
	//slider
	$('.js-slider-otziv').slick({
		dots: false, 
		arrows: false, 
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000
	});
	$('.js-slider-klient').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
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

	//tabs
	function openCity(evt, cityName) {
		// Declare all variables
		var i, tabcontent, tablinks;
	
		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
	
		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
	
		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(cityName).style.display = "block";
		evt.currentTarget.className += " active";

	}
		// Get the element with id="defaultOpen" and click on it
		document.getElementById("defaultOpen").click();	