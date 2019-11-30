// remove vertical scrollbar
// $("body").css("overflow", "hidden");

// remove horizontal scrollbar
document.documentElement.style.overflowX = 'hidden';    // horizontal scrollbar will be hidden


// button scroll
$(document).ready(function () {
  $("#button-1").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-2").offset().top
    }, 1000);
  });
});


// nav scroll
$(document).ready(function () {
  $("#home").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-1").offset().top
    }, 1000);
  });
  $("#about").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-2").offset().top + 1
    }, 1000);
  });
  $("#portfolio").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-3").offset().top + 1
    }, 1000);
  });
  $("#contact").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-4").offset().top + 1
    }, 1000);
  });
});


// arrow scroll
$(document).ready(function () {
  $("#down-1").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-2").offset().top + 1
    }, 1000);
  });
  $("#down-2").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-3").offset().top + 1
    }, 1000);
  });
  $("#down-3").click(function () {
    $('html, body').animate({
      scrollTop: $("#section-4").offset().top + 1
    }, 1000);
  });
});


// change color of nav on scroll 
$(window).on('scroll', function () {
  var stickyTop = $('.navbar').offset().top;
  var down1Position = $("#down-1").offset().top - 50;
  var down2Position = $("#down-2").offset().top - 50;
  var down3Position = $("#down-3").offset().top - 50;
  // home
  if ($(window).scrollTop() <= down1Position) {
    $("#home").first().addClass("current");
    $("#about").first().removeClass("current");
    $("nav").first().removeClass("dark");
  } else if ($(window).scrollTop() > down1Position && $(window).scrollTop() <= down2Position) {
    $("nav").first().addClass("dark");
    $("#about").first().addClass("current");
    $("#home").first().removeClass("current");
    $("#portfolio").first().removeClass("current1");
    $(".navbar ul li").removeClass("white");
    // portfolio
  } else if ($(window).scrollTop() > down2Position && $(window).scrollTop() <= down3Position) {
    $("nav").first().addClass("dark");
    $("#portfolio").first().addClass("current1");
    $("#about").first().removeClass("current");
    $("#contact").first().removeClass("current");

    // $(".navbar ul li").hover(function () {
    //   $(this).addClass("white");
    // }, function () {
    //   $(this).removeClass("white");
    // });

  } else {
    $("nav").first().addClass("dark");
    $("#contact").first().addClass("current");
    $("#portfolio").first().removeClass("current1");
    $(".navbar ul li").removeClass("white");
  }
});


// var down2Position = $("#down-2").offset().top - 50;
// var down3Position = $("#down-3").offset().top - 50;
// if ($(window).scrollTop() > down2Position && $(window).scrollTop() <= down3Position) {
//   $(".navbar ul li").hover(function () {
//     $(this).css("background-color", "white")
//   });



// animate percentages
// $(window).on('scroll', function () {
//   if ($('#python-percent').is(':visible')) {
//     $("#python-percent").first().addClass("w-60");
//   }
// });

// animate percentages
$(window).on('scroll', function () {
  if ($('#python-percent').is(':visible')) {
    $('#python-percent').animate({
      width: "60%"
    }, 1000, function () {
      // Animation complete.
    });
  };
});

$(window).on('scroll', function () {
  if ($('#vba-percent').is(':visible')) {
    $('#vba-percent').animate({
      width: "65%"
    }, 1000, function () {
      // Animation complete.
    });
  };
});

$(window).on('scroll', function () {
  if ($('#sql-percent').is(':visible')) {
    $('#sql-percent').animate({
      width: "75%"
    }, 1000, function () {
      // Animation complete.
    });
  };
});

$(window).on('scroll', function () {
  if ($('#html-percent').is(':visible')) {
    $('#html-percent').animate({
      width: "70%"
    }, 1000, function () {
      // Animation complete.
    });
  };
});

$(window).on('scroll', function () {
  if ($('#css-percent').is(':visible')) {
    $('#css-percent').animate({
      width: "50%"
    }, 1000, function () {
      // Animation complete.
    });
  };
});

$(window).on('scroll', function () {
  if ($('#javascript-percent').is(':visible')) {
    $('#javascript-percent').animate({
      width: "40%"
    }, 1000, function () {
      // Animation complete.
    });
  };
});
















// old code

// nav scroll
// $(document).ready(function () {
//   $("#about").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#section-2").offset().top + 1
//     }, 1000);
//   });
// });

// $(document).ready(function () {
//   $("#portfolio").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#section-3").offset().top + 1
//     }, 1000);
//   });
// });

// $(document).ready(function () {
//   $("#contact").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#section-4").offset().top + 1
//     }, 1000);
//   });
// });

// acrrow scroll

// $(document).ready(function () {
//   $("#down-2").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#section-3").offset().top + 1
//     }, 1000);
//   });
//   $("#down-3").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#section-4").offset().top + 1
//     }, 1000);
//   });
// });
// $(document).ready(function () {
//   $("#down-3").click(function () {
//     $('html, body').animate({
//       scrollTop: $("#section-4").offset().top + 1
//     }, 1000);
//   });
// });

// $(window).on('scroll', function () {
//   if ($('#javascript-percent').visible(False)) {
//     $('#javascript-percent').css({ 'width': '0%' });
//   };
// });
