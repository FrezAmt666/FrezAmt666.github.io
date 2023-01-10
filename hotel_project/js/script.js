$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
      $("#all").click(function() { 
        $(".local").show("slow");
        $(".asian").show("slow");
        $(".european").show("slow");
        $(".drink").show("slow");


        $("#all").addClass("choose");
        $("#local").removeClass("choose");
        $("#asian").removeClass("choose");
        $("#european").removeClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#local").click(function() { 
        $(".local").show("slow");
        $(".asian").hide("slow");
        $(".european").hide("slow");
        $(".drink").hide("slow");


        $("#all").removeClass("choose");
        $("#local").addClass("choose");
        $("#asian").removeClass("choose");
        $("#european").removeClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#asian").click(function() { 
        $(".local").hide("slow");
        $(".asian").show("slow");
        $(".european").hide("slow");
        $(".drink").hide("slow");


        $("#all").removeClass("choose");
        $("#local").removeClass("choose");
        $("#asian").addClass("choose");
        $("#european").removeClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#european").click(function() { 
        $(".local").hide("slow");
        $(".asian").hide("slow");
        $(".european").show("slow");
        $(".drink").hide("slow");


        $("#all").removeClass("choose");
        $("#local").removeClass("choose");
        $("#asian").removeClass("choose");
        $("#european").addClass("choose");
        $("#drink").removeClass("choose");
      
      });

      $("#drink").click(function() { 
        $(".local").hide("slow");
        $(".asian").hide("slow");
        $(".european").hide("slow");
        $(".drink").show("slow");


        $("#all").removeClass("choose");
        $("#local").removeClass("choose");
        $("#asian").removeClass("choose");
        $("#european").removeClass("choose");
        $("#drink").addClass("choose");
      
      });
      //Wooden Diffusor panel
$("#w31").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "../img/single.png");

});
$("#w32").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "../img/single2.png");

});
$("#w33").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "../img/single3.png");

});
$("#w34").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "../img/single4.png");

});



$("#w36").click(function() {
  // Change src attribute of image
  $("#w35").attr("src", "../img/duo1.png");

});
$("#w37").click(function() {
  // Change src attribute of image
  $("#w35").attr("src", "../img/duo2.png");

});
$("#w38").click(function() {
  // Change src attribute of image
  $("#w35").attr("src", "../img/duo3.png");

});
$("#w39").click(function() {
  // Change src attribute of image
  $("#w35").attr("src", "../img/duo4.png");

});



$("#w41").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "../img/family1.png");

});
$("#w42").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "../img/family2.png");

});
$("#w43").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "../img/family3.png");

});
$("#w44").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "../img/family4.png");

});


    });