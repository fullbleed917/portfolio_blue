  // A $( document ).ready() block.

  function calculateContainerHeight(){
    var windowWidth = $('body').width();
    var headerHeight = $('.header').outerHeight();
    var heroHeight = $('.hero').outerHeight();
    var containerHeight = headerHeight + heroHeight;
    if (windowWidth <= 568){
      $('.container').css('height', containerHeight);
    }
    else if(windowWidth >= 569){
      $('.container').css('height', 0);
    }
  }

$( document ).ready(function() {
    console.log( "ready!" );
    $( ".burger-nav" ).click(function() {
      $(".headerright").slideToggle();
  });

  calculateContainerHeight();
  $( window ).resize(function() {
    calculateContainerHeight();
  });
});

$(function() {
    var header = $(".header");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});





