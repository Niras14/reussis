(function($) {
    "use strict";

    /*===================
    01: Main Menu
    =====================*/
    $('ul.nav li a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    /* Menu Maker */
    $(".nav-wrapper").menumaker({
        title: '<span></span>',
        format: "multitoggle"
    });

    $($(window)).on('scroll', function() {
        if (!$('ul.nav').hasClass('open')) {
            $('#menu-button').removeClass('menu-opened');
        };
    });

    if ($(window).width() >= 992) {
        let $trigger = $('.menu-trigger');
        $trigger.on('click', function() {
            $(this).toggleClass('active');
            $('.main-menu-wrapper').toggleClass('show');
            $('.logo-holder').toggleClass('d-none');

            $('.nav-wrapper').toggleClass('active');
        })
    }

    /*========================
    02: Sticky Nav
    ==========================*/
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-main").removeClass("sticky fadeInDown animated");
			$('.back-to-top').removeClass('show');
        } else {
            $(".header-main").addClass("sticky fadeInDown animated");
			$('.back-to-top').addClass('show');
        }
    });

    /*========================
    03: Background Image
    ==========================*/
    var $bgImg = $('[data-bg-img]');
    $bgImg.css('background-image', function() {
        return 'url("' + $(this).data('bg-img') + '")';
    }).removeAttr('data-bg-img').addClass('bg-img');


    /*========================
    04: Banner Slider
    ==========================*/
    var $bannerSlider = $('.banner_slider');

    $bannerSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').html(carousel.relative(carousel.current()) + 1 + '<span>/' + carousel.items().length) + '</span>';
    });

    $bannerSlider.on('translate.owl.carousel', function(e) {
        $(".banner_content h1").removeClass("animated fadeInDown");
        $(".banner_content p").removeClass("animated fadeInDown");
        $(".banner_content .btn").removeClass("animated fadeInDown");
        $(".single-banner-image img:not(.banner-icon)").removeClass("animated fadeInUp");
    });

    $bannerSlider.on('translated.owl.carousel', function(e) {
        $(".banner_content h1").addClass("animated fadeInDown");
        $(".banner_content p").addClass("animated fadeInDown");
        $(".banner_content .btn").addClass("animated fadeInDown");
        $(".single-banner-image img:not(.banner-icon)").addClass("animated fadeInUp");
    });

    /*==================================
    05: Check Data
    ====================================*/
    var checkData = function(data, value) {
        return typeof data === 'undefined' ? value : data;
    };

    /*==================================
    06: Owl Carousel
    ====================================*/
    var $owlCarousel = $('.owl-carousel');
    $owlCarousel.each(function() {
        var $t = $(this);

        $t.owlCarousel({
            items: checkData($t.data('owl-items'), 1),
            margin: checkData($t.data('owl-margin'), 0),
            loop: checkData($t.data('owl-loop'), true),
            smartSpeed: 450,
            autoplay: checkData($t.data('owl-autoplay'), true),
            autoplayTimeout: checkData($t.data('owl-speed'), 3000),
            center: checkData($t.data('owl-center'), false),
            animateIn: checkData($t.data('owl-animate-in'), false),
            animateOut: checkData($t.data('owl-animate-out'), false),
            nav: checkData($t.data('owl-nav'), false),
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: checkData($t.data('owl-dots'), false),
            responsive: checkData($t.data('owl-responsive'), {})
        });
    });

    /*==================================
    07: Changing svg color 
    ====================================*/
    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /*==================================
    08: Google map 
    ====================================*/
    var $map = $('[data-trigger="map"]'),
        $mapOps;

    if ($map.length) {
        // Map Options
        $mapOps = $map.data('map-options');

        // Map Initialization
        window.initMap = function() {
            $map.css('min-height', '600px');
            $map.each(function() {
                var $t = $(this),
                    map, lat, lng, zoom;

                $mapOps = $t.data('map-options');
                lat = parseFloat($mapOps.latitude, 10);
                lng = parseFloat($mapOps.longitude, 10);
                zoom = parseFloat($mapOps.zoom, 10);

                map = new google.maps.Map($t[0], {
                    center: { lat: lat, lng: lng },
                    zoom: zoom,
                    scrollwheel: false,
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [{
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#e9e9e9"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#f5f5f5"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#dedede"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                    "saturation": 36
                                },
                                {
                                    "color": "#333333"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{
                                    "color": "#f2f2f2"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                    "color": "#fefefe"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        }
                    ]
                });

                map = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: map,
                    animation: google.maps.Animation.DROP,
                    draggable: false,
                    icon: 'assets/img/map-marker.png'
                });

            });
        };
        initMap();
    };

    /*==================================
    09: Preloader 
    ====================================*/
    $(window).on('load', function() {
        $('.preloader').fadeOut(1000);
    });

    /*==================================
    10: Contact Form
    ====================================*/
    $('.contact-form-wrapper').on('submit', 'form', function(e) {
        e.preventDefault();

        var $el = $(this);

        $.post($el.attr('action'), $el.serialize(), function(res) {
            res = $.parseJSON(res);
            $el.parent('.contact-form-wrapper').find('.form-response').html('<span>' + res[1] + '</span>');
        });
    });


	/* nb form script */
	$(document).ready(function() {
		
		/* $("#open-form").on("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
			$("#nb-form").toggleClass("nbformopen");
		});

		$("#nb-form").on("click", function(e) {
			e.stopPropagation();
		});

		$("body").on("click", function() {
			if ($("#nb-form").hasClass("nbformopen")) {
				$("#nb-form").removeClass("nbformopen");
			}
		});  */
		
		/* $('.back-to-top').on('click', function() {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); */
		
		
		
		if(window.matchMedia('(min-width: 992px)').matches) {
			$('.menu-trigger').click(function(){
				$('.menu-trigger').toggleClass('active');
				$('.nav-wrapper').toggleClass('active');
				$('.logo-holder').toggleClass('d-none');
			});
			$('.nlink').click(function(){
				$('.menu-trigger').removeClass('active');
				$('.nav-wrapper').removeClass('active');
				$('.logo-holder').removeClass('d-none');
			});
		}
		if(window.matchMedia('(max-width: 991px)').matches) {
			$('.nav.align-items-center').hide();
			$('#menu-button').click(function(){
				$('#menu-button').toggleClass('active');
				$('.nav.align-items-center').toggleClass('d-block');
			});
			$('.nlink').click(function(){
				$('#menu-button').removeClass('active');
				$('.nav.align-items-center').removeClass('d-block');
			});
		}
		
	});
}(jQuery));