$(document).ready(function(){
/*
	Códigos de invocação dos plugins.
*/
	$('.sidenav').sidenav();

	 $('.destaquesfot').owlCarousel({
    	loop:true,
    	margin:0,
    	dots:true,
  	 	nav:false,
  	 	items:1
	});

	$('.fots-quem').owlCarousel({
    animateIn: 'fadeIn',
    	loop:true,
    	margin:0,
    	nav:false,
    	dots:true,
  	 	items:1,
  	 	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
	});

	$('.list-acomodacoes').owlCarousel({
	    loop:true,
	    margin:105,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	 $('.datepicker').datepicker();


});























