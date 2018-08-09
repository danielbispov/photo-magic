$(document).ready(function() {
    // Add/remove '.fixed' class to header
    $(window).on('scroll', function() {
    	var scroll = $(window).scrollTop();

		if (scroll >= 50)
			$('#header').addClass('fixed');
		else
			$('#header').removeClass('fixed');
    });

    // Smooth page scroll with 'animate'
	nav = $('nav[role="navigation"]');
    nav.find('a').on('click', function () {
	  	var $el = $(this);
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 95
		}, 500);
	  return false;
	});

    // Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

    // Fancybox at the Portfolio section
    $('.work-box').fancybox();

    // Slider at the Cases section
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });
});
