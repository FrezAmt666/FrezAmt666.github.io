$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      
    var navbar = $('#navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <=30){
            navbar.slideDown('slow');
        }else{
            navbar.slideUp('slow');
        }
    })

});

