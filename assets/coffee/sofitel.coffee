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

			$('#subject').niceSelect()
			do General.setupFixedNavbar
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
			$(document).on 'blur', '.form-item input, .form-item textarea', () ->
				if ($(this).val() != '')
					$(this).addClass('not-empty')
				else 
					$(this).removeClass('not-empty')
				return

			$(document).on 'submit', '#formContact', (e) ->
				e.preventDefault()
				console.log('validateContactForm')
				do Contact.validateContactForm
			return

		@validateContactForm: ->
			valid = true
			$form = $('#formContact')
			if ($form.find('.nice-select').val() == null)
				$form.find('.nice-select').addClass('error')
			$.each $form.find('input, textarea'), (i,e) ->
				if ($(e).val() == '')
					$(e).addClass('error')
				else 
					$(e).removeClass('error')
			valid

	do General.init
	do Homepage.init
	do Contact.init
	return