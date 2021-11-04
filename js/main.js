$(function(){
	
	$('.banner-section_slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section_slider-btn banner-section_slider-btnprev"><img src="images/left.png" alt=""></button>',
		nextArrow: '<button class="banner-section_slider-btn banner-section_slider-btnnext"><img src="images/right.svg" alt=""></button>',
		
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
	});

	$('.tab').on('click', function(e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab-active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content-active');

		$(this).addClass('tab-active');
		$($(this).attr('href')).addClass('tabs-content-active');
		$($(this).attr('href')).siblings().removeClass('tabs-content-active');

	});


	$('.product-item_favorite').on('click',function() {
		$(this).toggleClass('product-item_favorite-active');
	});

	$('.product_slider').slick({
		slidesToShow: 4,
		prevArrow: '<button class="product-slider_slider-btn product-slider_slider-btnprev"><img src="images/left_black.svg" alt=""></button>',
		nextArrow: '<button class="product-slider_slider-btn product-slider_slider-btnnext"><img src="images/right_black.svg" alt=""></button>',
		
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,	
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		]
	});

	$('.filter-style').styler();

	$('.filter_item-drop, .filter_extra').on('click', function(){
		$(this).toggleClass('filter_item-drop-active');
		$(this).next().slideToggle();
	});


	$(".js-range-slider").ionRangeSlider({
		grid: false,
		type: "double",
		min: 100000,
		max: 500000,
	});


	$('.catalog_filter-btngrid').on('click', function(){
		$(this).addClass('catalog_filter-button-active');
		$('.catalog_filter-btnline').removeClass('catalog_filter-button-active');
		$('.product-item_wrapper').removeClass('product-item_wrapper-list');
	});

	$('.catalog_filter-btnline').on('click', function(){
		$(this).addClass('catalog_filter-button-active');
		$('.catalog_filter-btngrid').removeClass('catalog_filter-button-active');
		$('.product-item_wrapper').addClass('product-item_wrapper-list');
	});

	$('.rate-yo').rateYo({
		rating: "4",
		ratedFill: "#1c62cd",
		spacing: "10px",
		normatFill: "#c4c4c4"
	});
	$('.menu_btn').on('click', function(){
		$('.menu-mobile_list').toggleClass('menu-mobile_list-active')
	});
	$('.mobile_click-menu').on('click', function(){
		$('.catalog_inner aside').toggleClass('right-slide')
	});
	$('.product-item_wrapper').on('click', function() {
		window.location.href = './product-page.html';
	})
});