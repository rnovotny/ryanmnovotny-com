$( document ).ready(function() {
	$('#my-js-thing').click( function(){
		$('body').removeClass("spin")
		this.offsetWidth = this.offsetWidth
		$('body').addClass("spin")
		fbq('track', 'AddToCart', {
			content_ids: ['1234'],
			content_type: 'product',
			value: 2.99,
			currency: 'USD'
		})
	})
	
	$('.draggable').draggable()
})