$(function () {

    // animate on scroll
    new WOW().init();
});

/*   stats    */
$(function(){
	$('.counter').counterUp({
		delay:10,
		time: 3000
	})
})

$(function () {

    // animate on scroll
    new WOW().init();
    $('.counter').counterUp({
      delay:10,
      time: 3000
    });
    $(".image_slider").slick({
    	dots: true,
       arrows: true,
       autoplay: true
    });

});


$(function(){
   $("#customer-testimonials").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      smartSpeed: 700,
      autoplayHoverPause: true
   });
})

