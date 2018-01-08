$(document).ready(function() {
  $('#abouttext').toggleClass("body1toggle");

  var headerSwitch1 = false;
  var headerSwitch2 = true;

  $('#portlink').click(function() {
    if (headerSwitch1 === true) {
      return;
    } else {
      $('#abouttext').toggleClass("body1toggle");
      $('#portfolio').toggleClass("body2toggle");
      headerSwitch1 = true;
      headerSwitch2 = false;
    };
  });

  $('#aboutlink').click(function() {
    if (headerSwitch2 === true) {
      return;
    } else {
      $('#portfolio').toggleClass("body2toggle");
      $('#abouttext').toggleClass("body1toggle");
      headerSwitch1 = false;
      headerSwitch2 = true;
    };
  });
});
