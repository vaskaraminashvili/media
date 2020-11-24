$(function () {
  var time = 2000;
  var $bar, $slick, isPause, tick, percentTime;

  $bar = $(".slider-progress .progress");

  $(".slider-wrapper").on({
    mouseenter: function () {
      isPause = true;
    },
    mouseleave: function () {
      isPause = false;
    },
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar.css({
        width: percentTime + "%",
      });
      if (percentTime >= 100) {
        $slick.slick("slickNext");
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + "%",
    });
    clearTimeout(tick);
  }

  $slick = $(".main_slider");
  $slick_nav = $(".main_slider-nav");

  // $slick_nav.on("init.slick", function (event, slick) {
  //   startProgressbar();
  // });
  $slick.slick({
    draggable: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,

    asNavFor: ".main_slider-nav",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  });
  $slick_nav.slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".main_slider",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          slidesToShow: 2,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });
});
