$( document ).ready(function() {
	$('#my-js-thing').click( function(){
		$('body').removeClass("spin")
		this.offsetWidth = this.offsetWidth
		$('body').addClass("spin")
	})
	
	$('.draggable').draggable()
})