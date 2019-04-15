$(document).ready(function(){
/*
	Códigos de invocação dos plugins.
*/

	$('.modal').modal();

	$('.sidenav').sidenav();

	 $('.destaquesfot').owlCarousel({
	 		autoplay:true,
    autoplayTimeout:5000,
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
	    nav:false,
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

	$('#textarea1').val();

	 $('.datepickerin').datepicker();

	  $('.datepickerout').datepicker();


	  $("a[rel^='prettyPhoto']").prettyPhoto();

});



  $(function() {
                $('.link').bind('click',function(event){
                    var $anchor = $(this);
        
                  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
                    
                  

                });
            });
	  



















