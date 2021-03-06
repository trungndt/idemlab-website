(function() {
  $(function() {
    var Contact, General, Homepage, SignUp;
    General = (function() {
      var handleSubscribeForm;

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
        General.setupFormValidation('#formSubscribe', handleSubscribeForm);
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
              $nav.find('.collapse.in').removeClass('in');
              $nav.find('.navbar-toggle').addClass('collapsed');
            } else {
              $nav.removeClass('nav-hide');
            }
          } else {
            $nav.removeClass('fixed');
          }
          iScrollPos = wScroll;
        });
      };

      General.setupFormValidation = function(formId, callback) {
        var $form, errorMarkElemSelector, validateFormElements;
        $form = $(formId);
        errorMarkElemSelector = formId + ' input, ' + formId + ' textarea';
        $(document).on('blur', errorMarkElemSelector, function() {
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
        $(document).on('focus', errorMarkElemSelector, function() {
          return $(this).closest('.form-item').removeClass('error-mark');
        });
        $(document).on('submit', formId, function(e) {
          e.preventDefault();
          if ($form.data('valid') === true && (callback != null)) {
            callback($form);
          }
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
            if ($(e).val() === '') {
              $(e).closest('.form-item').addClass('error-mark');
              valid = false;
            } else if ($(e).attr('type') === 'email' && $(e).val().indexOf('@') < 0) {
              $(e).closest('.form-item').addClass('error-mark');
              valid = false;
            } else if ($(e).attr('type') === 'phone' && isNaN($(e).val())) {
              $(e).closest('.form-item').addClass('error-mark');
              valid = false;
            } else {
              $(e).closest('.form-item').removeClass('error-mark');
            }
          });
          return valid;
        };
      };

      handleSubscribeForm = function() {
        $('.msg-default').hide();
        $('.msg-success').show();
        setTimeout(function() {
          $('.msg-default').show();
          return $('.msg-success').hide();
        }, 2000);
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

      Homepage.init = function() {};

      return Homepage;

    })();
    Contact = (function() {
      var showSuccessForm;

      function Contact() {}

      Contact.init = function() {
        General.setupFormValidation('#formContact', showSuccessForm);
      };

      showSuccessForm = function() {
        $('#sectionFormDefault').hide();
        $('#sectionFormSuccess').show();
      };

      return Contact;

    })();
    SignUp = (function() {
      var showSuccessForm;

      function SignUp() {}

      SignUp.init = function() {
        General.setupFormValidation('#formSignUp', showSuccessForm);
      };

      showSuccessForm = function($form) {
        var $successPanel;
        console.log($form);
        $successPanel = $('#sectionFormSuccess');
        $('#sectionFormDefault').hide();
        $successPanel.show();
      };

      return SignUp;

    })();
    General.init();
    Homepage.init();
    Contact.init();
    SignUp.init();
  });

}).call(this);
