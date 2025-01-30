$(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 3,
    dots: false,

  });


});



$('.your-class').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,

        dots: false
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



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  $(".offmenu").addClass('active');
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  $(".offmenu").removeClass('active');

  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  // document.body.style.backgroundColor = "white";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


$("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />');
$("body").append(` <button class="scroll-top">
<i class="fa fa-angle-double-up"></i>
</button>`);

$(".slide-menu").append("<div id='offmenu' class='offmenu'></div>");
$("#offmenu").click(function(){
  closeNav()
})


function scrollToTop() {
  if ($('.scroll-top').length) {  
      $(window).on('scroll', function () {
          if ($(this).scrollTop() > 200) {
              $('.scroll-top').fadeIn();
          } else {
              $('.scroll-top').fadeOut();
          }
      }); 
      //Click event to scroll to top
      $('.scroll-top').on('click', function () {
          $('html, body').animate({
              scrollTop: 0
          }, 200);
          return false;
      });
  }
}

scrollToTop();