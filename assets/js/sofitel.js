(function() {
  $(function() {
    var Contact, General, Homepage, SignUp;
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
        $('.nice-select').niceSelect();
        General.setupFixedNavbar();
        General.setupTelInput();
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

      General.setupFormValidation = function(formId) {
        var $form, showSuccessForm, validateFormElements;
        $form = $(formId);
        $(document).on('blur', formId + ' input, ' + formId + ' textarea', function() {
          var isFormValid;
          if ($(this).val() !== '') {
            $(this).addClass('not-empty');
          } else {
            $(this).removeClass('not-empty');
          }
          isFormValid = validateFormElements();
          if (isFormValid) {
            $form.find('.btn').removeClass('btn-disables');
            $form.data('valid', true);
          } else {
            $form.data('valid', false);
          }
        });
        $(document).on('submit', '#formContact', function(e) {
          e.preventDefault();
          showSuccessForm();
        });
        validateFormElements = function() {
          var valid;
          valid = true;
          if ($form.find('.nice-select').val() === null) {
            $form.find('.nice-select').addClass('error');
            valid = false;
          } else {
            $form.find('.nice-select').removeClass('error');
          }
          $.each($form.find('input, textarea'), function(i, e) {
            console.log(e);
            if ($(e).val() === '') {
              console.log($(e).closest('.form-item'));
              $(e).closest('.form-item').addClass('error-mark');
              return valid = false;
            } else {
              return $(e).closest('.form-item').removeClass('error-mark');
            }
          });
          return valid;
        };
        showSuccessForm = function() {
          $('#sectionFormDefault').hide();
          $('#sectionFormSuccess').show();
        };
      };

      General.setupTelInput = function() {
        if (($('.tel-input').length)) {
          $('.tel-input').intlTelInput();
        }
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
        General.setupFormValidation('#formContact');
      };

      return Contact;

    })();
    SignUp = (function() {
      function SignUp() {}

      SignUp.init = function() {
        General.setupFormValidation('#formSignUp');
        return;
      };

      return SignUp;

    })();
    General.init();
    Homepage.init();
    Contact.init();
    SignUp.init();
  });

}).call(this);
