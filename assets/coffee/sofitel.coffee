$ ->
	class General
		@init: ->
			$(window).scroll ->
				
				return
			$('.text-green').on 'click', (event) ->
			  $('.event').fadeIn()
			  $('.hotel').fadeOut()
			  event.preventDefault()
			$('.text-blue').on 'click', (event) ->
			  $('.hotel').fadeIn()
			  $('.event').fadeOut()
			  event.preventDefault()

			$(document).on 'click', '[data-action="scroll"]', () ->
				$target = $($(this).attr('href'))
				$('html, body').animate(
						scrollTop: $target.offset().top - 100
					)
				return

			# Nav effects
			$(document).on 'click', '.content-menu.dropdown a', (e) ->
				do e.preventDefault
				return

			$('.nice-select').niceSelect()
			do General.setupFixedNavbar
			do General.setupTelInput
			return

		@setupFixedNavbar: ->
			$nav = $('.menu-main')
			iScrollPos = 0
			direction = ''
			wScroll = 0
			$(window).scroll ->
				wScroll = $(window).scrollTop()
				direction = if wScroll > iScrollPos then 'down' else 'up'
				# 
				if (wScroll > 700)
					$nav.addClass('fixed')
					if (direction == 'up')
						$nav.addClass('nav-hide')
					else
						$nav.removeClass('nav-hide')
				else
					$nav.removeClass('fixed')
				iScrollPos = wScroll
				return
			return

		@setupFormValidation: (formId) ->
			# Validate everytime an input is done editting
			$form = $(formId)
			errorMarkElemSelector = formId + ' input, ' + formId + ' textarea'
			$(document).on 'blur', errorMarkElemSelector, () ->
				if ($(this).val() != '')
					$(this).addClass('not-empty')
				else 
					$(this).removeClass('not-empty')
				isFormValid = validateFormElements()
				if (isFormValid)
					$form.find('.btn').removeClass('btn-disables')
					$form.data('valid', true)
				else
					$form.data('valid', false)
				return

			$(document).on 'focus', errorMarkElemSelector, () ->
				$(this).closest('.form-item').removeClass('error-mark')

			# Check form state when submit
			$(document).on 'submit', formId, (e) ->
				e.preventDefault()
				showSuccessForm()
				return

			validateFormElements = ->
				valid = true
				if ($form.find('.nice-select').val() == null)
					$form.find('.nice-select').addClass('error')
					valid = false
				else
					$form.find('.nice-select').removeClass('error')
				
				# console.log($form.find('input, textarea'))

				$.each $form.find('input, textarea'), (i,e) ->
					# console.log(e)
					# console.log($form.find('input, textarea'))
					if ($(e).val() == '')
						# console.log($(e).closest('.form-item'))
						console.log($(e).is(':focus'))
						$(e).closest('.form-item').addClass('error-mark')
						valid = false
					else 
						$(e).closest('.form-item').removeClass('error-mark')
					console.log('-----------------------')
				valid
			
			showSuccessForm = ->
				$('#sectionFormDefault').hide()
				$('#sectionFormSuccess').show()
				return

			return

		@setupTelInput: ->
			if ($('.tel-input').length)
				$('.tel-input').intlTelInput()
			return
	

	class Homepage
		@init: ->
			do this.handleSubscribeForm
			return
		@handleSubscribeForm: ->
			$(document).on 'click', '#btnSubscribe', (e) ->
				e.preventDefault()
				$('.msg-default').hide()
				$('.msg-success').show()

				setTimeout () ->
					$('.msg-default').show()
					$('.msg-success').hide()
				,
					2000
				return
			return

	
	class Contact
		@init: ->
			General.setupFormValidation('#formContact')
			return
	
	class SignUp
		@init: ->
			General.setupFormValidation('#formSignUp')
			return

	do General.init
	do Homepage.init
	do Contact.init
	do SignUp.init
	return