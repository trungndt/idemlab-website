(function() {
  $(function() {
    var General;
    General = (function() {
      function General() {}

      General.init = function() {
        $(window).scroll(function() {
          General.setupFixedNavbar();
        });
        $('.text-green').on('click', function(event) {
          $('.event').fadeIn();
          $('.hotel').fadeOut();
          return event.preventDefault();
        });
        $('.text-blue').on('click', function(event) {
          $('.hotel').fadeIn();
          $('.event').fadeOut();
          return event.preventDefault();
        });
        $('#subject').niceSelect();
      };

      General.setupFixedNavbar = function() {
        var $nav;
        $nav = $('.menu-main');
        if ($(window).scrollTop() > 700) {
          $nav.addClass('fixed');
        } else {
          $nav.removeClass('fixed');
        }
      };

      return General;

    })();
    return General.init();
  });

}).call(this);
