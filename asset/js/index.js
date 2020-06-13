$('.carousel').carousel({
    interval: 4000
  })


 /* $(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 8,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false

    });*/


 

    $(document).ready(function() {
        $("nav").click(function() {
          $(this).toggleClass("_expand");
        });
      });
