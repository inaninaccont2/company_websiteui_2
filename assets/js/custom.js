$(document).ready(function(){
	"use strict";
/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  new-cars-carousel
		
			$("#new-cars-carousel").owlCarousel({
				items: 1,
				autoplay:true,
				loop: true,
				dots:true,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


		// ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				dots:false,
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
			});

		// iii. .brand-item (carousel)
		
			$('.brand-item').owlCarousel({
				items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

});

document.getElementById('fontSizeSelector').addEventListener('change', function() {
    const selectedSize = this.value;

    if (selectedSize === 'Small') {
        document.body.style.fontSize = '12px'; // Small font size
        document.querySelector('.navbar-header a.navbar-brand').style.fontSize = '18px';
        document.querySelector('.welcome-hero-txt h2').style.fontSize = '36px';
        document.querySelector('.welcome-hero-txt p').style.fontSize = '12px';
        document.querySelector('.more-project a').style.fontSize = '12px';
        document.querySelectorAll('.section-header h2').forEach(function(link) {
            link.style.fontSize = '30px';
        });
        document.querySelectorAll('.new-cars-txt h2 a').forEach(function(link) {
            link.style.fontSize = '24px';
        });
        document.querySelectorAll('.single-service-item h2 a').forEach(function(link) {
            link.style.fontSize = '12px';
        });
        // Update all nav links
        document.querySelectorAll('nav.navbar.bootsnav ul.nav li a').forEach(function(link) {
            link.style.fontSize = '12px';
        });

    } else if (selectedSize === 'Medium') {
        document.body.style.fontSize = '16px'; // Medium font size
        document.querySelector('.navbar-header a.navbar-brand').style.fontSize = '22px';
        document.querySelector('.welcome-hero-txt h2').style.fontSize = '42px';
        document.querySelector('.welcome-hero-txt p').style.fontSize = '16px';
        document.querySelector('.more-project a').style.fontSize = '16px';
        document.querySelectorAll('.section-header h2').forEach(function(link) {
            link.style.fontSize = '34px';
        });
        document.querySelectorAll('.new-cars-txt h2 a').forEach(function(link) {
            link.style.fontSize = '30px';
        });
        document.querySelectorAll('.single-service-item h2 a').forEach(function(link) {
            link.style.fontSize = '16px';
        });
        // Update all nav links
        document.querySelectorAll('nav.navbar.bootsnav ul.nav li a').forEach(function(link) {
            link.style.fontSize = '16px';
        });

    } else if (selectedSize === 'Large') {
        document.body.style.fontSize = '20px'; // Large font size
        document.querySelector('.navbar-header a.navbar-brand').style.fontSize = '26px';
        document.querySelector('.welcome-hero-txt h2').style.fontSize = '48px';
        document.querySelector('.welcome-hero-txt p').style.fontSize = '20px';
        document.querySelector('.more-project a').style.fontSize = '20px';
        document.querySelectorAll('.section-header h2').forEach(function(link) {
            link.style.fontSize = '40px';
        });
        document.querySelectorAll('.new-cars-txt h2 a').forEach(function(link) {
            link.style.fontSize = '36px';
        });
        document.querySelectorAll('.single-service-item h2 a').forEach(function(link) {
            link.style.fontSize = '20px';
        });
        // Update all nav links
        document.querySelectorAll('nav.navbar.bootsnav ul.nav li a').forEach(function(link) {
            link.style.fontSize = '20px';
        });
    }
});