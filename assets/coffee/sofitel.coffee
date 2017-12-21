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
			$('#subject').niceSelect()
			return
		@setupFixedNavbar: ->
			$nav = $('.menu-main')
			if ($(window).scrollTop() > 600)
				$nav.addClass('fixed')
			else
				$nav.removeClass('fixed')
			return

	do General.init