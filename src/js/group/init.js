$(function() {
	$(".popOpen").on('click', function() {
		//console.log('hi')
		
		var thisObj = $(this);
		//var popTop = thisObj.offset().top;
		var popTop = $(window).scrollTop() + 100;
		console.log(popTop);
		
		
		$('#contact-pop').css("top",popTop);
		$('#contact-pop, #contact-bg').show();
		
	});
});

