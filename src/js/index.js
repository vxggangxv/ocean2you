$(function () {

	//var wd = $(window).width();
	var ht = $(window).height();

	//$('section.main .vid').width(wd);
	$('section.main, section.main-bg').height(ht);
	
	
	$(window).on('resize', function () {
		//var wd = $(window).width();
		var ht = $(window).height();

		//$('section.main .vid').width(wd);
		$('section.main, section.main-bg').height(ht);
	});
	
	
	$("#mNav-btn").on("click", function() {
		$(this).toggleClass("on");
		$("#mNav-box").toggleClass("on");
	});
	


});