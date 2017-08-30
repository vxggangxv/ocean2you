$(function() {
	
	// 모바일 네비탭 클릭 기능
	$("#mNav-btn").on("click", function() {
		$(this).toggleClass("on");
		$("#mNav-box").toggleClass("on");
	});
	
	// 위로가기 버튼
	$("#goTop").on('click', function() {
		$(window).scrollTop(0);
	});
	
	$("#goTop").hide();
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop =	$("#setTop").offset().top;
		
		if (scr < setTop) {
			$("#goTop").fadeOut();
			$("#header").removeClass('on');
			$("body").removeClass('on');
			
			$("#header .logo").attr('src', 'http://img.ocean2you.co.kr/renewal/logo.png');
			$("#header .gcLogo").attr('src', 'http://img.ocean2you.co.kr/renewal/oc2_gcLogo.png');
		}
		if (scr >= setTop) {
			$("#goTop").fadeIn();
			$("#header").addClass('on');
			$("body").addClass('on');
			
			
			$("#header .logo").attr('src', 'http://img.ocean2you.co.kr/renewal/logo_fixed.png');
			$("#header .gcLogo").attr('src', 'http://img.go.co.kr/logo.png');
		}
	});
	
});