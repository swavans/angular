(function() {
  var amadeusBlue;

  amadeusBlue = '#005eb8';

  this.manageSlideLogoAndBackground = function(slideType) {
    if (slideType === 'blue') {
      return setBlueMode();
    } else if (slideType === 'pink') {
      return setPinkMode();
    } else if (slideType === 'yellow') {
      return setYellowMode();
    } else {
      return setWhiteMode();
    }
  };

  this.setYellowMode = function() {
    textColor = '#fff';
    $("#amadeus-logo").removeClass().addClass("white-logo");
    $("#amadeus-copyright").removeClass().addClass("white-copyright");
    $(".reveal").css('color', textColor);
    $(".reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6").css('color', textColor);
    return $("#slide-show").removeClass().addClass("yellow-slide");
  };

  this.setPinkMode = function() {
    textColor = '#fff';
    $("#amadeus-logo").removeClass().addClass("white-logo");
    $("#amadeus-copyright").removeClass().addClass("white-copyright");
    $(".reveal").css('color', textColor);
    $(".reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6").css('color', textColor);
    return $("#slide-show").removeClass().addClass("pink-slide");
  };

  this.setBlueMode = function() {
    var textColor;
    textColor = '#eee';
    $("#amadeus-logo").removeClass().addClass("white-logo");
    $("#amadeus-copyright").removeClass().addClass("white-copyright");
    $(".reveal").css('color', textColor);
    $(".reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6").css('color', textColor);
    return $("#slide-show").removeClass().addClass("blue-slide");
  };

  this.setWhiteMode = function() {
    var textColor;
    textColor = 'grey';
    $("#amadeus-logo").removeClass().addClass("blue-logo");
    $("#amadeus-copyright").removeClass().addClass("blue-copyright");
    $(".reveal").css('color', 'black');
    $(".reveal h1, .reveal h2, .reveal h3").css('color', amadeusBlue);
    $(".reveal h4, .reveal h5, .reveal h6").css('color', textColor);
    return $("#slide-show").removeClass().addClass("white-slide");
  };

  this.positionFixedElements = function() {
    var audience;
    window.resize1AElements();
    audience = $('.slides').attr("audience");
    if (audience) {
      $("#amadeus-audience").position({
        my: "right-5 top+5",
        at: "right top",
        of: "#slide-show"
      });
      $("#amadeus-audience").removeClass().addClass(audience);
    }
    $("#amadeus-copyright").position({
      my: "right bottom",
      at: "right top",
      of: ".controls"
    });
    return $("#amadeus-logo").position({
      my: "right bottom",
      at: "left bottom",
      of: ".controls"
    });
  };

  this.resize1AElements = function() {
    var audienceHeight, audienceWidth, copyrightHeight, copyrightWidth, limitHeight, limitWidth, logoHeight, logoWidth, navControlsHeight, navControlsWidth, navDownLeft, navLeftTop, navRightLeft, navRightTop, navUpLeft, navdownTop, r, rx, ry, windowHeight, windowWidth;
    limitWidth = 1024;
    limitHeight = 768;
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    rx = ry = 1;
    if (windowWidth < limitWidth) {
      rx = windowWidth / limitWidth;
    }
    if (windowHeight < limitHeight) {
      ry = windowHeight / limitHeight;
    }
    r = rx;
    if (ry < rx) {
      r = ry;
    }
    audienceWidth = audienceHeight = Math.floor(80 * r);
    copyrightWidth = Math.floor(17 * r);
    copyrightHeight = Math.floor(184 * r);
    logoWidth = Math.floor(260 * r);
    logoHeight = Math.floor(84 * r);
    navControlsWidth = navControlsHeight = Math.floor(110 * r);
    navLeftTop = navRightTop = navUpLeft = navDownLeft = Math.floor(42 * r);
    navRightLeft = navdownTop = Math.floor(74 * r);
    $("#amadeus-audience").css('background-size', "" + audienceWidth + "px " + audienceHeight + "px");
    $("#amadeus-audience").css('height', "" + audienceHeight + "px");
    $("#amadeus-copyright").css('background-size', "" + copyrightWidth + "px " + copyrightHeight + "px");
    $("#amadeus-copyright").css('height', "" + copyrightHeight + "px");
    $("#amadeus-logo").css('background-size', "" + logoWidth + "px " + logoHeight + "px");
    $("#amadeus-logo").css('height', "" + logoHeight + "px");
    $(".reveal .controls div").css('transform', "scale(" + r + ")");
    $(".reveal .controls").css('height', "" + navControlsHeight + "px");
    $(".reveal .controls").css('width', "" + navControlsWidth + "px");
    $(".reveal .controls div.navigate-left").css('top', "" + navLeftTop + "px");
    $(".reveal .controls div.navigate-right").css('top', "" + navRightTop + "px");
    $(".reveal .controls div.navigate-right").css('left', "" + navRightLeft + "px");
    $(".reveal .controls div.navigate-up").css('left', "" + navUpLeft + "px");
    $(".reveal .controls div.navigate-down").css('left', "" + navDownLeft + "px");
    return $(".reveal .controls div.navigate-down").css('top', "" + navdownTop + "px");
  };

  this.manageCurrentSlide = function(slideType) {
    manageSlideLogoAndBackground(slideType);
    return positionFixedElements();
  };

  $(document).ready(function() {
    var resizeTimer;
    resizeTimer = void 0;
    return $(window).resize(function() {
      clearTimeout(resizeTimer);
      return resizeTimer = setTimeout(positionFixedElements, 100);
    });
  });

}).call(this);
