
$(document).ready(function(){

  //tabs
  (function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();

			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		} );
	})(jQuery);

  //footer accordion
  $('.accordion-title').click(function () {
      if ($(this).hasClass('active')) {
          $(this).removeClass('active').next('.accordion-content').slideUp();
      } else {
          $('.accordion-title').removeClass('active');
          $('.accordion-content').slideUp();
          $(this).addClass('active').next('.accordion-content').slideDown();
      }
  });

  //smooth scrolling
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
  //fim smooth scrolling

  // brands slider
  $('.slider-list').slick({
    mobileFirst: true,
    swipeToSlide: true,
    draggable: true,
    prevArrow:'.prev',
    nextArrow:'.next',
    focusOnSelect: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    cssEase:'ease',
    edgeFriction: 0.35,
    slidesToShow: 1,
    useCSS: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // products slider
  $('.product-list').slick({
    mobileFirst: true,
    swipeToSlide: true,
    draggable: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: false,
    speed: 500,
    initialSlide: 0,
    cssEase:'ease',
    edgeFriction: 0.35,
    slidesToShow: 1,
    useCSS: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  // product slider imgs
  $('.slider-product-imgs').slick({
    mobileFirst: true,
    swipeToSlide: false,
    draggable: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    centerMode: false,
    focusOnSelect: false,
    speed: 500,
    initialSlide: 0,
    fade: true,
    cssEase:'ease',
    edgeFriction: 0.35,
    slidesToShow: 1,
    useCSS: true,
    slidesToScroll: 1,
    asNavFor: '.slider-product-nav',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          swipeToSlide: true,
          draggable: true,
          fade: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 200,
        settings: {
          swipeToSlide: true,
          draggable: true,
          fade: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  // product slider nav
  $('.slider-product-nav').slick({
    mobileFirst: true,
    swipeToSlide: true,
    draggable: true,
    prevArrow: '.prev1',
    nextArrow: '.next1',
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    speed: 500,
    initialSlide: 0,
    cssEase:'ease',
    edgeFriction: 0.35,
    slidesToShow: 2,
    useCSS: true,
    slidesToScroll: 1,
    asNavFor: '.slider-product-imgs',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 299,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // seen products slider
  $('.product-view-list').slick({
    mobileFirst: true,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: false,
    speed: 500,
    initialSlide: 0,
    cssEase:'ease',
    edgeFriction: 0.35,
    slidesToShow: 1,
    useCSS: true,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          prevArrow: '.prev',
          nextArrow: '.next',
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

 // Header site
 // Hide Header on scroll down
 var didScroll;
 var lastScrollTop = 0;
 var delta = 20;
 var navbarHeight = $('header').outerHeight();

 $(window).scroll(function(event){
    didScroll = true;
 });

 setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
 }, 250);

 function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
 }


  // nav mobile e desktop com scroll horizontal
  (function (window, document, undefined) {
  'use strict';

  // Select nav items that have submenus
  var hasSubmenu = document.querySelectorAll('[data-id]');
  var active = 'active';
  var i = 0;

  // Show the submenu by toggling the relevant class names
  function showSubmenu (event) {
    // We lose reference of this when filtering the nav items
    var self = this;

    // Select the relevant submenu, by the data-id attribute
    var submenu = document.getElementById(self.dataset.id);

    // Probably best to prevent clicks through
    event.preventDefault();

    // Referring to the submenu parentNode
    // find all elements that aren't the submenu and remove active class
    var otherSubmenu = Array.prototype.filter.call(
      submenu.parentNode.children,
      function(child) {
        if ( child !== submenu ) {
          removeChildClass(child);
        }
      });

    // Referring to the the nav item parentNode
    // find all elements that aren't the submenu and remove active class
    var otherItem = Array.prototype.filter.call(
      self.parentNode.children,
      function(child) {
        if ( child !== self ) {
          removeChildClass(child);
        }
      });

    self.classList.toggle(active);
    submenu.classList.toggle(active);
  }

  // Remove the active class
  function removeChildClass(el) {
    // Check if it exists, then remove
    if ( el.classList.contains(active) ) {
      el.classList.remove(active);
    }
  }

  // On clicks show submenus
  for ( i = 0; i < hasSubmenu.length; i++ ) {
    hasSubmenu[i].addEventListener('click', showSubmenu);
  }
})(window, document);

});
