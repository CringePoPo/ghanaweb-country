
	// $(document).ready(function () {
	// 	$('#olwMain').owlCarousel({
	// 		loop: true,
	// 		thumbs: false,
	// 		items: 1,
	// 		autoplay: true,
	// 		autoplayHoverPause: true,
	// 		slideSpeed: 2000,
	// 		autoplayTimeout: 4000,
	// 		nav: false,
	// 		mouseDrag : true,
	// 		touchDrag: true,
	// 		fallbackEasing: "linear",
	// 	});
	// });
	$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
var popOver = $(".pop-over")

  owl.on('initialized.owl.carousel', function(event){
      popOver.css("display", "block")
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
			slideSpeed: 2000,
			autoplayTimeout: 4000,
			nav: false,
			mouseDrag : true,
			touchDrag: true,
			fallbackEasing: "linear",
  });
});

