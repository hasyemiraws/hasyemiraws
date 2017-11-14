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
		if( wScrollCurrent <= 0 || $(window).scrollTop() <= $(".post--section").offset().top + 100 ) // scrolled to the very top; element sticks to the top
		{
			$element.removeClass('header-sticky-active');
		}

		else if( wScrollDiff > 0 && $(window).scrollTop() >= $(".post--section").offset().top + 100 ) // scrolled up; element slides in
		{
			// $element.css({ 'top': (elTop > 0 ? 0 : elTop), 'position': 'fixed' });
			$element.addClass('header-sticky-active');
		}

		else if( wScrollDiff < 0 && $(window).scrollTop() >= $(".post--section").offset().top + 100 ) // scrolled down
		{
			if( wScrollCurrent + wHeight >= dHeight - elHeight ) {}  // scrolled to the very bottom; element slides in

			else // scrolled down; element slides out
			{
				$element.addClass('header-sticky');
				$element.removeClass('header-sticky-active');				
			}
		}

		wScrollBefore = wScrollCurrent;
	});


	$('.hero-image').each(function() {		
		if ($(this).data('image')) {
			$(this).css('background-image', "url('" + $(this).data('image') + "')");
		}
	});

	$('.nav__menu .hamburger').click(function() {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');				
			$('body').css('overflow', 'auto');			
			$('.menu__overlay').addClass('zoomOut').removeClass('zoomIn').fadeOut();			
			$('.menu__list-link, .menu__categories-image').addClass('slideOutDown').removeClass('slideInUp');
		} else {
			$(this).addClass('is-active');	
			$('body').css('overflow', 'hidden');
			$('.menu__overlay').fadeIn().addClass('zoomIn').removeClass('zoomOut');	
			$('.menu__list-link, .menu__categories-image').addClass('slideInUp').removeClass('slideOutDown');		
		}		
	});		

	$('.menu__list-link li').each(function() {			
		$(this).hover(function() {
			var activeCategory = $('.menu__list-link li.active').data("category");
			$('.menu__list-link li').removeClass('active');
			$('.menu__categories-label').removeClass('fadeIn');
			$(this).addClass('active');
			var elem = $(this);			
			$('.menu__categories-image').removeClass(activeCategory).addClass(elem.data('category'));						
			$('.menu__categories-label.'+elem.data('category')).addClass('fadeIn');
		});
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() >= $('.post--section').offset().top - 40) {
			if (!$('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').addClass('header__top__scroll');
			}
		} else {
			if ($('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').removeClass('header__top__scroll').removeClass('header-sticky');
			}
		}
	});

	$('.book-item').each(function() {
		var me = $(this);
		var img_data = $(this).attr('data-image');
		var style = '';
		var img = document.createElement('img');
		img.setAttribute('src', img_data);

		img.addEventListener('load', function() {
		    var vibrant = new Vibrant(img);
		    var swatches = vibrant.swatches()		    		    
            style += 'background-color:'+ swatches['DarkMuted'].getHex()+';';
            me.attr('style', style);
		});		
	});	
});