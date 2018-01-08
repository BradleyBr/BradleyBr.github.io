$(document).ready(function() {


  var switch1 = false;
  var switch2 = false;
  var switch3 = false;

  $(".project1").click(function() {
    if (switch1 === false ) {
      $(".project2").hide(450);
      $(".project3").hide(650);
      $(this).toggleClass("col-xs-4 col-md-4 col-xs-6 col-xs-offset-2", 600);
      $(".producttitle1").remove();
      $(".img-responsive").toggleClass("tog");
      setTimeout(function(){$("#projects").append("<div class='col-xs-6 textbox'><h1>Match Game</h1><p>Using Jquery to build a gameboard for matching numbers</p>" +
      "<button class='btn btn-primary'><a href='https://bradleybr.github.io/matchgame/' target='_blank'>website</a></button></div>");}, 650);
      switch1 = true;
    } else {
      $(".project2").show(650);
      $(".project3").show(450);
      $(this).toggleClass("col-xs-4 col-md-4 col-xs-6 col-xs-offset-2", 600);
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
      $(this).toggleClass("col-xs-4 col-md-4 col-xs-6", 600);
      $(".producttitle2").remove();
      $(".img-responsive").toggleClass("tog");
      setTimeout(function(){$("#projects").append("<div class='col-xs-6 textbox'><h1>Trackster</h1><p>Using Jquery to call last.FM api to create " +
      "music tracklist from user search query</p><button class='btn btn-primary'><a href='https://bradleybr.github.io/trackster/' target='_blank'>website</a></button></div>");}, 650);
      switch2 = true;
    } else {
      $(".project1").show("slow");
      $(".project3").show("slow");
      $(this).toggleClass("col-xs-4 col-md-4 col-xs-6", 600);
      $(".img-responsive").toggleClass("tog");
      $(".project2").append("<h4 class='producttitle2'>Trackster</h4");
      $(".textbox").remove();
      switch2 = false;
    };
  });

  $(".project3").click(function() {
    if (switch3 === false ) {
      $(".project1").hide(450);
      $(".project2").hide(650);
      $(this).toggleClass("col-xs-4 col-md-4 col-xs-6 col-xs-offset-4", 600);
      $(".producttitle3").remove();
      $(".img-responsive").toggleClass("tog");
      setTimeout(function(){$("#projects").append("<div class='col-xs-6 textbox'><h1>Jumpstart</h1><p>Website built with bootstrap, utilizing slick in Jquery</p>" +
      "<button class='btn btn-primary'><a href='https://bradleybr.github.io/jumpstart/' target='_blank'>website</a></button></div>");}, 650);
      switch3 = true;
    } else {
      $(".project1").show(650);
      $(".project2").show(450);
      $(this).toggleClass("col-xs-4 col-md-4 col-xs-6 col-xs-offset-4", 600);
      $(".img-responsive").toggleClass("tog");
      $(".project3").append("<h4 class='producttitle3'>Jumpstart</h4");
      $(".textbox").remove();
      switch3 = false;
    };
  });
});
