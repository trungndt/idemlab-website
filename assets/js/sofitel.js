(function() {
  $(function() {
    var Contact, General, Homepage;
    General = (function() {
      function General() {}

      General.init = function() {
        $(window).scroll(function() {});
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
          $('html, body').animate({
            scrollTop: $target.offset().top - 100
          });
        });
        $(document).on('click', '.content-menu.dropdown a', function(e) {
          e.preventDefault();
        });
        $('#subject').niceSelect();
        General.setupFixedNavbar();
      };

      General.setupFixedNavbar = function() {
        var $nav, direction, iScrollPos, wScroll;
        $nav = $('.menu-main');
        iScrollPos = 0;
        direction = '';
        wScroll = 0;
        $(window).scroll(function() {
          wScroll = $(window).scrollTop();
          direction = wScroll > iScrollPos ? 'down' : 'up';
          if (wScroll > 700) {
            $nav.addClass('fixed');
            if (direction === 'up') {
              $nav.addClass('nav-hide');
            } else {
              $nav.removeClass('nav-hide');
            }
          } else {
            $nav.removeClass('fixed');
          }
          iScrollPos = wScroll;
        });
      };

      return General;

    })();
    Homepage = (function() {
      function Homepage() {}

      Homepage.init = function() {
        this.handleSubscribeForm();
      };

      Homepage.handleSubscribeForm = function() {
        $(document).on('click', '#btnSubscribe', function(e) {
          e.preventDefault();
          $('.msg-default').hide();
          $('.msg-success').show();
          setTimeout(function() {
            $('.msg-default').show();
            return $('.msg-success').hide();
          }, 2000);
        });
      };

      return Homepage;

    })();
    Contact = (function() {
      function Contact() {}

      Contact.init = function() {
        $(document).on('blur', '.form-item input, .form-item textarea', function() {
          var $form, isFormValid;
          if ($(this).val() !== '') {
            $(this).addClass('not-empty');
          } else {
            $(this).removeClass('not-empty');
          }
          isFormValid = Contact.validateContactForm();
          $form = $('#formContact');
          if (isFormValid) {
            $form.find('.btn').removeClass('btn-disables');
            $form.addClass('form-valid');
          } else {
            $form.removeClass('form-valid');
          }
        });
        $(document).on('submit', '#formContact', function(e) {
          e.preventDefault();
          console.log($(this));
          if ($(this).hasClass('form-valid')) {
            return Contact.showSuccessForm();
          }
        });
      };

      Contact.validateContactForm = function() {
        var $form, valid;
        valid = true;
        $form = $('#formContact');
        if ($form.find('.nice-select').val() === null) {
          $form.find('.nice-select').addClass('error');
          valid = false;
        } else {
          $form.find('.nice-select').removeClass('error');
        }
        $.each($form.find('input, textarea'), function(i, e) {
          if ($(e).val() === '') {
            $(e).addClass('error');
            return valid = false;
          } else {
            return $(e).removeClass('error');
          }
        });
        console.log(valid);
        return valid;
      };

      Contact.showSuccessForm = function() {
        $('#sectionFormDefault').hide();
        $('#sectionFormSuccess').show();
      };

      return Contact;

    })();
    General.init();
    Homepage.init();
    Contact.init();
  });

}).call(this);
