/*
 * Application
 */

$(function() {	

	// var activeCategory = .data('category');

	var elSelector		= '.header__top',
		$element		= $( elSelector );

	if( !$element.length ) return true;

	var elHeight		= 0,
		elTop			= 0,
		$document		= $( document ),
		dHeight			= 0,
		$window			= $( window ),
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0;

	$window.on( 'scroll', function()
	{
		elHeight		= $element.outerHeight();
		dHeight			= $document.height();
		wHeight			= $window.height();
		wScrollCurrent	= $window.scrollTop();
		wScrollDiff		= wScrollBefore - wScrollCurrent;
		elTop			= parseInt( $element.css( 'top' ) ) + wScrollDiff;

		// if ($(window).scrollTop() >= $("#main").offset().top) {
        	
	 //    }		
		if( wScrollCurrent <= 0 || $(window).scrollTop() <= $(".content--section").offset().top + 100 ) // scrolled to the very top; element sticks to the top
		{
			$element.removeClass('header-sticky-active');
		}

		else if( wScrollDiff > 0 && $(window).scrollTop() >= $(".content--section").offset().top + 100 ) // scrolled up; element slides in
		{
			// $element.css({ 'top': (elTop > 0 ? 0 : elTop), 'position': 'fixed' });
			$element.addClass('header-sticky-active');
		}

		else if( wScrollDiff < 0 && $(window).scrollTop() >= $(".content--section").offset().top + 100 ) // scrolled down
		{
			if( wScrollCurrent + wHeight >= dHeight - elHeight ) {}  // scrolled to the very bottom; element slides in

			else // scrolled down; element slides out
			{				
				if (!$element.hasClass('menu-active')) {
					$element.addClass('header-sticky');
					$element.removeClass('header-sticky-active');				
				}					
			}
		}

		wScrollBefore = wScrollCurrent;
	});


	// $('.hero-image').each(function() {		
	// 	if ($(this).data('image')) {
	// 		$(this).css('background-image', "url('" + $(this).data('image') + "')");
	// 	}
	// });

	// $('.nav__menu__dots').click(function() {
	// 	if ($(this).hasClass('is-active')) {
	// 		$(this).removeClass('is-active');				
	// 		$('body').css('overflow', 'auto');			
	// 		$('.menu__overlay').addClass('zoomOut').removeClass('zoomIn').fadeOut();			
	// 		$('.menu__list-link, .menu__categories-image').addClass('slideOutDown').removeClass('slideInUp');
	// 	} else {
	// 		$(this).addClass('is-active');	
	// 		$('body').css('overflow', 'hidden');
	// 		$('.menu__overlay').fadeIn().addClass('zoomIn').removeClass('zoomOut');	
	// 		$('.menu__list-link, .menu__categories-image').addClass('slideInUp').removeClass('slideOutDown');		
	// 	}		
	// });		

	$('.header-hamburger').click(function(e) {
		e.stopPropagation();		
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$element.removeClass('menu-active');			
			$('body').css('overflow', 'auto');
			$('.header__nav__menu').removeClass('menu-show');
			if ($(window).width() < 731) {
				$('.menu__overlay').fadeIn().removeClass('slideInRight').removeClass('fadeIn').addClass('fadeOut').fadeOut();	
			} else {
				$('.menu__overlay').removeClass('slideInRight').addClass('slideOutRight').fadeOut();							
			}			
		} else {
			$(this).addClass('is-active');	 	
			$element.addClass('menu-active');
			$('body').css('overflow', 'hidden');		
			$('.header__nav__menu').addClass('menu-show');
			if ($(window).width() < 731) {
				$('.menu__overlay').fadeIn().removeClass('slideOutRight').removeClass('fadeOut').addClass('fadeIn');				
			} else {
				$('.menu__overlay').fadeIn().removeClass('slideOutRight').addClass('slideInRight');				
			}
		}		
	});
	
	$('.menu__overlay--container').click(function(e){e.stopPropagation()});
	$('.header__nav').click(function(e){e.stopPropagation()});

	$(document).on('click', function(event) {
		if (!$(event.target).parent(".menu__overlay--container").length || !$(event.target).hasClass("menu__overlay--container")) {
			if ($('.header-hamburger').hasClass('is-active')) {
				$('.header-hamburger').removeClass('is-active');
				$element.removeClass('menu-active');			
				$('body').css('overflow', 'auto');
				$('.header__nav__menu').removeClass('menu-show');
				if ($(window).width() < 731) {
					$('.menu__overlay').fadeIn().removeClass('slideInRight').removeClass('fadeIn').addClass('fadeOut').fadeOut();	
				} else {
					$('.menu__overlay').removeClass('slideInRight').addClass('slideOutRight').fadeOut();							
				}
			}
		}
	});

	$('.menu__list-link li').each(function() {			
		$(this).hover(function() {						
			$(this).addClass('active');									
		});

		$(this).mouseout(function() {
			$(this).removeClass('active');
		});
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() >= $('.content--section').offset().top - 40) {
			if (!$('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').addClass('header__top__scroll');
			}
		} else {
			if ($('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').removeClass('header__top__scroll').removeClass('header-sticky');
			}
		}
	});

	// $('.book-item').each(function() {
	// 	var me = $(this);
	// 	var img_data = $(this).attr('data-image');
	// 	var style = '';
	// 	var img = document.createElement('img');
	// 	img.setAttribute('src', img_data);

	// 	img.addEventListener('load', function() {
	// 	    var vibrant = new Vibrant(img);
	// 	    var swatches = vibrant.swatches()			    	    		   
    //         style += 'background-color:'+ swatches['Vibrant'].getHex()+';';
    //         me.attr('style', style);
	// 	});		
	// });		
});