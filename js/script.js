// Owl Carousel
	$(function() {
  var owl = $(".owl-carousel");
var popOver = $(".pop-over")

  owl.on('initialized.owl.carousel', function(event){
      popOver.css("display", "block")
  })
  owl.on('mouseenter',function(e){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
 owl.on('mouseleave',function(e){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[2000]);
  })

  owl.owlCarousel({
    // items: 3,
    // margin: 10,
    // loop: true,
    // nav: true
    loop: true,
			thumbs: false,
			items: 1,
			navigation:true,
			autoplay: true,
			autoplayHoverPause: true,
			stopOnHover:true,
			slideSpeed: 2000,
			autoplayTimeout: 4000,
			nav: false,
			mouseDrag : true,
			touchDrag: true,
			fallbackEasing: "linear",
  });
});

$(".slider").not('.slick-initialized').slick()