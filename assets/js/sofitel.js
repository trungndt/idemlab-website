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
        $(document).on('click', '[data-action="scroll"]', function() {
          var $target;
          $target = $($(this).attr('href'));
          console.log($target);
          $('html, body').animate({
            scrollTop: $target.offset().top - 100
          });
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
