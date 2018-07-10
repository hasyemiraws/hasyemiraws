function runAllScript() {	

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

	$('.menu__list-link li').each(function() {			
		$(this).hover(function() {						
			$(this).addClass('active');									
		});		

		$(this).mouseout(function() {
			$(this).removeClass('active');
		});
	});

	$("#js__lang--list li").each(function() {
		if ($(this).hasClass("selected")) {
			$(this).parent().prepend($(this));
		}
	});

	$(window).scroll(function() {
		if (!$('.content--section').length) return true;

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
}

var initDisqus = function() {
		
	if (document.getElementById("disqus_thread")) {
		disqusLoader( '#disqus_thread',
		{
			scriptUrl:    'https://hasyemiraws.disqus.com/embed.js',
			laziness: 0,
			disqusConfig: function()
			{
			this.page.identifier  = window.location.href;
			this.page.url     = window.location.href ; 
			}
		});		
	}
} 

$(function() {	
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

	$(document).on('click', '.header-hamburger', function(e) {		
		e.stopPropagation();		
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.header__top').removeClass('menu-active');			
			$('body').css('overflow', 'auto');
			$('.header__nav__menu').removeClass('menu-show');
			if ($(window).width() < 731) {
				$('.menu__overlay').fadeIn().removeClass('slideInRight').removeClass('fadeIn').addClass('fadeOut').fadeOut();	
			} else {
				$('.menu__overlay').removeClass('slideInRight').addClass('slideOutRight').fadeOut();							
			}			
		} else {
			$(this).addClass('is-active');	 	
			$('.header__top').addClass('menu-active');
			$('body').css('overflow', 'hidden');		
			$('.header__nav__menu').addClass('menu-show');
			if ($(window).width() < 731) {
				$('.menu__overlay').fadeIn().removeClass('slideOutRight').removeClass('fadeOut').addClass('fadeIn');				
			} else {
				$('.menu__overlay').fadeIn().removeClass('slideOutRight').addClass('slideInRight');				
			}
		}		
	});	

	$(document).on('click', "[data-attr-menu='toggle']", function(event) {
		$parent = $(this).parent();
		$submenu = $parent.children("ul");

		if (!$submenu.hasClass("show")) {
			$submenu.addClass("show");
		}
	});

	$(document).on('click', "[data-attr-menu='back']", function(event) {
		$parent = $(this).closest("ul");		

		if ($parent.hasClass("show")) {
			$parent.removeClass("show");
		}
	});

	$(document).on("click", ".header__nav--lang-label", function() {				
		$("#js__lang--list").toggleClass("show");
	});	

	$(document).on('click', 'article a[href*="#"]:not([href="#"])', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 40
				}, 1000);
				return false;
			}
		}
	});
	
	$(document).on('click', '.menu__overlay--container', function(e){e.stopPropagation()});
	$(document).on('click', '.header__nav', function(e){e.stopPropagation()});

	$(document).on('click', function(event) {
		if (!$(event.target).parent(".menu__overlay--container").length || !$(event.target).hasClass("menu__overlay--container")) {
			if ($('.header-hamburger').hasClass('is-active')) {
				$('.header-hamburger').removeClass('is-active');
				$('.header__top').removeClass('menu-active');			
				$('body').css('overflow', 'auto');
				$('.header__nav__menu').removeClass('menu-show');
				if ($(window).width() < 731) {
					$('.menu__overlay').fadeIn().removeClass('slideInRight').removeClass('fadeIn').addClass('fadeOut').fadeOut();	
				} else {
					$('.menu__overlay').removeClass('slideInRight').addClass('slideOutRight').fadeOut();							
				}
			}
		}

		if (!$(event.target).parents("#js__lang--list").length) {
			if ($("#js__lang--list").hasClass("show")) {
				$("#js__lang--list").toggleClass("show");
			}			
		}
	});	
	
	$(document).on("click", "#js__lang--list li a", function(e) {
		if ($(this).parent().hasClass("selected")) {
			e.preventDefault();

			$(this).closest("#js__lang--list").toggleClass("show");
		}
	});	
	
	runAllScript();	
	initDisqus();			  	
});

document.addEventListener("DOMContentLoaded", function() {
	var lastElementClicked;
	Barba.Pjax.init();
	Barba.Prefetch.init();

	Barba.Dispatcher.on('linkClicked', function(el) {
		lastElementClicked = el;	  
	});

var FadeTransition = Barba.BaseTransition.extend({
	start: function() {
	$("html, body").animate({ scrollTop: 0 }, "300");
	$('body').css('overflow', 'visible');
	if ($('.content--section').length > 0) {
		if ($(window).scrollTop() >= $('.content--section').offset().top - 40) {
			if (!$('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').addClass('header__top__scroll');
			}
		} else {
			if ($('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').removeClass('header__top__scroll').removeClass('header-sticky');
			}
		}
	}	
	/**
	 * This function is automatically called as soon the Transition starts
	 * this.newContainerLoading is a Promise for the loading of the new container
	 * (Barba.js also comes with an handy Promise polyfill!)
	 */

	// As soon the loading is finished and the old page is faded out, let's fade the new page
	Promise
		.all([this.newContainerLoading, this.fadeOut()])
		.then(this.fadeIn.bind(this));
	},

	fadeOut: function() {
	/**
	 * this.oldContainer is the HTMLElement of the old Container
	 */

	return $(this.oldContainer).animate({ opacity: 0 }).promise();
	},

	fadeIn: function() {
	/**
	 * this.newContainer is the HTMLElement of the new Container
	 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
	 * Please note, newContainer is available just after newContainerLoading is resolved!
	 */

	var _this = this;
	var $el = $(this.newContainer);

	$(this.oldContainer).hide();

	$el.css({
		visibility : 'visible',
		opacity : 0
	});

	$el.animate({ opacity: 1 }, 400, function() {
		/**
		 * Do not forget to call .done() as soon your transition is finished!
		 * .done() will automatically remove from the DOM the old Container
		 */
				 
		_this.done();			
		initDisqus();
		var words = document.getElementsByClassName('word');
        var wordArray = [];
        var currentWord = 0;

		if (words.length) {
			words[currentWord].style.opacity = 1;
			for (var i = 0; i < words.length; i++) {
			splitLetters(words[i]);
			}		

			function changeWord() {
				var cw = wordArray[currentWord];
				var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
				for (var i = 0; i < cw.length; i++) {
				animateLetterOut(cw, i);
				}

				for (var i = 0; i < nw.length; i++) {
				nw[i].className = 'letter behind';
				nw[0].parentElement.style.opacity = 1;
				animateLetterIn(nw, i);
				}

				currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
			}

			function animateLetterOut(cw, i) {
				setTimeout(function() {
				cw[i].className = 'letter out';
				}, i*80);
			}

			function animateLetterIn(nw, i) {
				setTimeout(function() {
				nw[i].className = 'letter in';
				}, 340+(i*80));
			}

			function splitLetters(word) {
				var content = word.innerHTML;
				word.innerHTML = '';
				var letters = [];
				for (var i = 0; i < content.length; i++) {
				var letter = document.createElement('span');
				letter.className = 'letter';
				if (content.charAt(i) == ' ') {
				letter.innerHTML = '&nbsp;';
				} else {
				letter.innerHTML = content.charAt(i);
				}		
				word.appendChild(letter);
				letters.push(letter);
				}

				wordArray.push(letters);
			}
			
			changeWord();
			setInterval(changeWord, 4000);        
		}
	});
	}
});  	

var ShrinkTransition = Barba.BaseTransition.extend({
	start: function() {
	this.newContainerLoading.then(this.shrinkImage.bind(this));
	},

	shrinkImage: function() {
	var _this = this;

	this.oldContainer.style.zIndex = '10';
	this.newContainer.style.visibility = 'visible';

	var href = Barba.HistoryManager.prevStatus().url.split('/').pop();
	var destThumb = this.newContainer.querySelector('a[href="' + href + '"]');
	var destThumbPosition = destThumb.getBoundingClientRect();
	var fullImage = this.oldContainer.querySelector('.full');

	TweenLite.to(this.oldContainer.querySelector('.back'), 0.2, { opacity: 0 });

	TweenLite.to(fullImage, 0.3, {
		top: destThumbPosition.top,
		height: destThumb.clientHeight,
		onComplete: function() {
		_this.done();
		}
	});
	}
});

	Barba.Pjax.getTransition = function() {
		var transitionObj = FadeTransition;

		return transitionObj;
	};	

	Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

		var js = container.querySelectorAll("script");	
		if (js.length > 0) {
			js.forEach(function(el) {
				if (el.innerHTML != '') {
					eval(el.innerHTML);
				} else {
					$.getScript( el.src )
					.done(function( script, textStatus ) {
					});
				}
			});		
		}

		runAllScript();
	});
});