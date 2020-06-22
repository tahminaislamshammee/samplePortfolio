$(document).ready(function(){
  //mobile-menu

  $('#mobile-menu-active').meanmenu({
    
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'

  });


  //sticky-menu
  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
     $(".header-area").addClass("sticky-menu");
    }else{
     $(".header-area").removeClass("sticky-menu");
    }
});

 
//one page nav
$('#nav').onePageNav( {
    currentClass: 'current', changeHash: true, scrollSpeed: 750, scrollThreshold: 0.2, easing: 'swing', scrollOffset: 20
}
)
// scroll up
$.scrollUp({
  scrollName: 'scrollUp', // Element ID
  scrollSpeed:750,
  topDistance: '300', // Distance from top before showing element (px)
  topSpeed:500, // Speed back to top (ms)
  animation: 'fade', // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
  activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

//scroll-down
$(".scroll-down").click(function() {
  $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 1500);
});

  /*audio*/
  var audio = document.getElementById("audio-player");
  audio.volume = 0.2;

if($(window).length) {
$('.site-sound').css({'visibility':'visible'});
$('body').addClass("audio-on");
if ($('body').hasClass('audio-off')) {
      $('body').removeClass('audio-on');
} 
$(".site-sound").on('click', function() {
  $('body').toggleClass("audio-on audio-off");   
  
  if ($('body').hasClass('audio-on')) {
    $(".pulsing-ui").addClass("scroll-header");
    audio.play();
  
  }
  if ($('body').hasClass('audio-off')) {
    audio.pause();
    $(".pulsing-ui").removeClass("scroll-header");
  } 

});
}

//circular-skills-area

$('.chart').easyPieChart({
  barColor: '#d4a98e',
  trackColor:false,
  lineWidth:5,
  size:125,
  animate:{
    duration: 500,
    enabled:false
},
  
});

$('.work-menu ul li').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});


var $grid = $('.filter-items-gallery').isotope({
itemSelector: '.grid-item',
percentPosition: true,
masonry: {
  // use outer width of grid-sizer for columnWidth
  columnWidth: 1
}
})


$('.filter-button-group').on( 'click', 'li', function() {
var filterValue = $(this).attr('data-filter');
$grid.isotope({ filter: filterValue,

  hiddenStyle: {
    transform: 'scale(.2) skew(30deg)',
    opacity: 0
},
visibleStyle: {
    transform: 'scale(1) skew(0deg)',
    opacity: 1,
},
transitionDuration: '.5s'

});

});

//0wl-carousel
    $('.clients-active').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:false,
      autoplayTimeout: 3000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })




});
//typed.js
var typed = new Typed('.type', {
    strings: ['web developer', 'freelancer','web designer'],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true 
  });





  