$ ->
	class General
		@init: ->
			$(window).scroll ->
				do General.setupFixedNavbar
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
				console.log($target)
				$('html, body').animate(
						scrollTop: $target.offset().top - 100
					)
				return
			$('#subject').niceSelect()
			return
		@setupFixedNavbar: ->
			$nav = $('.menu-main')
			if ($(window).scrollTop() > 700)
				$nav.addClass('fixed')
			else
				$nav.removeClass('fixed')
			return

	do General.init