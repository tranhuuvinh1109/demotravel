(function($) {
	"use strict";

	$(window).load(function() {
		$("#loader").fadeOut("slow");
	});

	$(document).ready(function() {

		M.AutoInit();

		//=======================================================

		// Collapse Nav

		$(".sidenav").sidenav();

		$('.tooltipped').tooltip({
			enterDelay: 50,
		});

		//=======================================================

		// Nav dropdown

		$(".dropdown-button").dropdown({
			hover: true
		});

		$("#arrow").click(function() {
			$('html, body').animate({
				scrollTop: $("#searchbox").offset().top -99
			}, 500);
		});

		//=======================================================

		// Slider

		$(".slider").slider({
			full_width: true,
			indicators: false
		});

		$('#fullscreen-slider').css({'height': (($(window).height()-99))+'px'});
		$(window).resize(function(){
			$('#fullscreen-slider').css({'height': (($(window).height()-99))+'px'});
		});

		// ====================================================================

		// Home Video Height

		$('#video').css({'height': (($(window).height()-99))+'px'});
		$(window).resize(function(){
			$('#video').css({'height': (($(window).height()-99))+'px'});
		});

		// ====================================================================

		// Slider Offers

		function fade($ele) {
			$ele.fadeIn(1000).delay(4000).fadeOut(1000, function() {
				var $next = $(this).next('li');
				fade($next.length > 0 ? $next : $(this).parent().children().first());
			});
		};  

		fade($('#promos > li').first());

		//=======================================================

		// Maps

		$('#fullscreen-map').css({'height': (($(window).height()-99))+'px'});
		$(window).resize(function(){
			$('#fullscreen-map').css({'height': (($(window).height()-99))+'px'});
		});

		//=======================================================

		// Date picker

		$('.datepicker').datepicker();

		var today = new Date.today().toString("yyyy-MM-dd");
		var tomorrow = new Date.today().addDays(1).toString("yyyy-MM-dd");

		$('#check-in').val(today).datepicker({
			formatSubmit: 'yyyy-mm-dd',
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 2, // Creates a dropdown of 2 years to control year
			min: true
		});

		$('#check-out').val(tomorrow).datepicker({
			formatSubmit: 'yyyy-mm-dd',
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 2, // Creates a dropdown of 2 years to control year
			min: 1
		});

		//=======================================================

		// Select input

		$('select').formSelect();

		//=======================================================

		// Parallax

		$('.parallax').parallax();

		//=======================================================

		// Materialbox

		$('.materialboxed').materialbox();

		//=======================================================
		
		// Searchbox trigger

		$('#advanced').hide();

		$('#show-advanced').click(function() {
			$('#advanced').slideToggle();
		});

		//=======================================================

		// Owl Carousel

		$("#last-minute .owl-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-circle-left fa-lg light-blue-text"></i>','<i class="fa fa-chevron-circle-right fa-lg light-blue-text"></i>'],
			responsive:{
				0:{
					items:1
				},
				601:{
					items:2
				},
				1201:{
					items:3
				}
			}
		});

		$("#reviews .owl-carousel").owlCarousel({
			items: 2,
			margin: 30,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-circle-left fa-lg light-blue-text"></i>','<i class="fa fa-chevron-circle-right fa-lg light-blue-text"></i>'],
			responsive:{
				0:{
					items:1
				},
				993:{
					items:2
				}
			}
		});

		$("#latest-posts .owl-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-circle-left fa-lg light-blue-text"></i>','<i class="fa fa-chevron-circle-right fa-lg light-blue-text"></i>'],
			responsive:{
				0:{
					items:1
				},
				601:{
					items:2
				},
				1201:{
					items:3
				}
			}
		});

		$("#related-posts .owl-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-chevron-circle-left fa-lg light-blue-text"></i>','<i class="fa fa-chevron-circle-right fa-lg light-blue-text"></i>'],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1201:{
					items:3
				}
			}
		});

		//=======================================================

		// No UI Slider

		//-------------------------------------------------------

		// Price slider

		var priceSlider = document.getElementById('price-slider');
		noUiSlider.create(priceSlider, {
			start: [200, 1200],
			step: 1,
			connect: true,
			range: {
				'min': 200,
				'max': 1200
			},
			format: wNumb({
				decimals: 0,
				prefix: '$'
			})
		});

		var priceSnapValues = [
			document.getElementById('price-lower'),
			document.getElementById('price-upper')
		];

		priceSlider.noUiSlider.on('update', function( values, handle ) {
			priceSnapValues[handle].innerHTML = values[handle];
		});

		//-------------------------------------------------------

		// Guests slider

		var guestsSlider = document.getElementById('guests-slider');
		noUiSlider.create(guestsSlider, {
			start: [1, 12],
			step: 1,
			connect: true,
			range: {
				'min': 1,
				'max': 12
			},
			format: wNumb({
				decimals: 0
			})
		});

		var guestsSnapValues = [
			document.getElementById('guests-lower'),
			document.getElementById('guests-upper')
		];

		guestsSlider.noUiSlider.on('update', function( values, handle ) {
			guestsSnapValues[handle].innerHTML = values[handle];
		});

		//-------------------------------------------------------

		// Bedrooms slider

		var bedroomsSlider = document.getElementById('bedrooms-slider');
		noUiSlider.create(bedroomsSlider, {
			start: [1, 6],
			step: 1,
			connect: true,
			range: {
				'min': 1,
				'max': 6
			},
			format: wNumb({
				decimals: 0
			})
		});

		var bedroomsSnapValues = [
			document.getElementById('bedrooms-lower'),
			document.getElementById('bedrooms-upper')
		];

		bedroomsSlider.noUiSlider.on('update', function( values, handle ) {
			bedroomsSnapValues[handle].innerHTML = values[handle];
		});

		//-------------------------------------------------------

		// Bathrooms slider

		var bathroomsSlider = document.getElementById('bathrooms-slider');
		noUiSlider.create(bathroomsSlider, {
			start: [1, 3],
			step: 1,
			connect: true,
			range: {
				'min': 1,
				'max': 3
			},
			format: wNumb({
				decimals: 0
			})
		});

		var bathroomsSnapValues = [
			document.getElementById('bathrooms-lower'),
			document.getElementById('bathrooms-upper')
		];

		bathroomsSlider.noUiSlider.on('update', function( values, handle ) {
			bathroomsSnapValues[handle].innerHTML = values[handle];
		});

		//=======================================================

	});

})(jQuery);