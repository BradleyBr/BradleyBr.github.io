$(document).ready(function() {


  var switch1 = false;
  var switch2 = false;
  var switch3 = false;

  $(".project1").click(function() {
    if (switch1 === false ) {
      $(".project2").hide("slow");
      $(".project3").hide("slow");
      $(this).toggleClass("col-xs-4 col-xs-8", 500);
      $(".producttitle1").remove();
      $(".img-responsive").toggleClass("tog");
      $("#projects").append("<div class='col-xs-4 textbox'><h3>Match Game</h3><p>Using Jquery to build a gameboard for matching numbers</p>" +
      "<button class='btn btn-primary'>website</button></div>");
      switch1 = true;
    } else {
      $(".project2").show("slow");
      $(".project3").show("slow");
      $(this).toggleClass("col-xs-4 col-xs-8", 500);
      $(".img-responsive").toggleClass("tog");
      $(".project1").append("<h4 class='producttitle1'>Match Game</h4");
      $(".textbox").remove();
      switch1 = false;
    };
  });

  $(".project2").click(function() {
    if (switch2 === false ) {
      $(".project1").hide("slow");
      $(".project3").hide("slow");
      $(this).toggleClass("col-xs-4 col-xs-8", 500);
      $(".producttitle2").remove();
      $(".img-responsive").toggleClass("tog");
      $("#projects").append("<div class='col-xs-4 textbox'><h3>Trackster</h3><p>Using Jquery to call last.FM api to create " +
      "music tracklist from user search query</p><button class='btn btn-primary'>website</button></div>");
      switch2 = true;
    } else {
      $(".project1").show("slow");
      $(".project3").show("slow");
      $(this).toggleClass("col-xs-4 col-xs-8", 500);
      $(".img-responsive").toggleClass("tog");
      $(".project2").append("<h4 class='producttitle2'>Trackster</h4");
      $(".textbox").remove();
      switch2 = false;
    };
  });

  $(".project3").click(function() {
    if (switch3 === false ) {
      $(".project1").hide("slow");
      $(".project2").hide("slow");
      $(this).toggleClass("col-xs-4 col-xs-8", 500);
      $(".producttitle3").remove();
      $(".img-responsive").toggleClass("tog");
      $("#projects").append("<div class='col-xs-4 textbox'><h3>Jumpstart</h3><p>Website built with bootstrap, utilizing slick in Jquery</p>" +
      "<button class='btn btn-primary'>website</button></div>");
      switch3 = true;
    } else {
      $(".project1").show("slow");
      $(".project2").show("slow");
      $(this).toggleClass("col-xs-4 col-xs-8", 500);
      $(".img-responsive").toggleClass("tog");
      $(".project3").append("<h4 class='producttitle3'>Jumpstart</h4");
      $(".textbox").remove();
      switch3 = false;
    };
  });

  // moving header bar, commented out for now

  // var lastScrollTop = 0;
  // $(window).scroll(function() {
  //   var scrollVal = $(this).scrollTop();
  //   if (scrollVal - lastScrollTop > 50) {
  //     var navHeight = $('.navbar').css('height');
  //     $('.navbar').animate({top: '-' + navHeight}, 150);
  //     lastScrollTop = scrollVal;
  //   } else if (lastScrollTop - scrollVal > 50) {
  //     $('.navbar').animate({top: '0px'}, 150);
  //     lastScrollTop = scrollVal;
  //   };
  // });

  //click functions for interactive portfolio

});
