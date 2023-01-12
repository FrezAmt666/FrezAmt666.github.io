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

const date = new Date();
let month = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();
    switch (month) {
        case 0:
          month = "JAN";
          break;
        case 1:
          month = "FEB";
          break;
        case 2:
           month = "MAR";
          break;
        case 3:
          month = "APR";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JUL";
          break;
        case 7:
          month = "AUG";
          break;
        case 8:
          month = "SEP";
          break;
        case 9:
          month = "OCT";
          break;
        case 10:
          month = "NOV";
          break;
        case 11:
          month = "DEC";
          break;
      }
// console.log(day, "/", month, "/", year);
// $("#checkIn").val(year, "/", month, "/", day);

// booking
const guestBtn = document.querySelector("#guests-input-btn"),
	guestOptions = document.querySelector("#guests-input-options"),
	adultsSubsBtn = document.querySelector("#adults-subs-btn"),
	adultsAddBtn = document.querySelector("#adults-add-btn"),
	childrenSubsBtn = document.querySelector("#children-subs-btn"),
	childrenAddBtn = document.querySelector("#children-add-btn"),
	adultsCountEl = document.querySelector("#guests-count-adults"),
	childrenCountEl = document.querySelector("#guests-count-children");
let maxNumGuests = 15,
	isGuestInputOpen = false,
	adultsCount = 1,
	childrenCount = 0;
updateValues();
guestBtn.addEventListener('click', function (e) {
	if (isGuestInputOpen) {
		guestBtn.classList.remove("open");
		guestOptions.classList.remove("open");
	} else {
		guestBtn.classList.add("open");
		guestOptions.classList.add("open");
	}
	isGuestInputOpen = isGuestInputOpen ? false : true;
	e.preventDefault();
});
adultsAddBtn.addEventListener('click', function () {
	adultsCount = addValues(adultsCount);
	updateValues();
});
adultsSubsBtn.addEventListener('click', function () {
	adultsCount = substractValues(adultsCount, 1);
	updateValues();
});
childrenAddBtn.addEventListener('click', function () {
	childrenCount = addValues(childrenCount);
	updateValues();
});
childrenSubsBtn.addEventListener('click', function () {
	childrenCount = substractValues(childrenCount, 0);
	updateValues();
});

function calcTotalGuests() {
	return adultsCount + childrenCount;
}

function addValues(count) {
	return (calcTotalGuests() < maxNumGuests) ? count + 1 : count;
}

function substractValues(count, min) {
	return (count > min) ? count - 1 : count;
}

function updateValues() {
	let btnText = `${adultsCount} Adults`;
	btnText += (childrenCount > 0) ? `, ${childrenCount} Children` : '';
	guestBtn.innerHTML = btnText;
	adultsCountEl.innerHTML = adultsCount;
	childrenCountEl.innerHTML = childrenCount;
	if (adultsCount == 1) {
		adultsSubsBtn.classList.add("disabled");
	} else {
		adultsSubsBtn.classList.remove("disabled");
	} if (childrenCount == 0) {
		childrenSubsBtn.classList.add("disabled");
	} else {
		childrenSubsBtn.classList.remove("disabled");
	} if (calcTotalGuests() == maxNumGuests) {
		adultsAddBtn.classList.add("disabled");
		childrenAddBtn.classList.add("disabled");
	} else {
		adultsAddBtn.classList.remove("disabled");
		childrenAddBtn.classList.remove("disabled");
	}
}
function reveal() {
  var reveals = document.querySelectorAll(".zoomin");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  var leftin = document.querySelectorAll(".leftin");

  for (var i = 0; i < leftin.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = leftin[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      leftin[i].classList.add("Leftin");
    } else {
      leftin[i].classList.remove("Leftin");
    }
  }


  var rightin = document.querySelectorAll(".rightin");

  for (var i = 0; i < rightin.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = rightin[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      rightin[i].classList.add("Rightin");
    } else {
      rightin[i].classList.remove("Rightin");
    }
  }
}

window.addEventListener("scroll", reveal);


    });