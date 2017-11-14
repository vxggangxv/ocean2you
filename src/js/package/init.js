$(function() {
	
	// 패키지 탭
	$("#pkg-tab li").on('click', function() {
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$("#pkg-box > section").eq(idx).addClass('on').siblings().removeClass('on');
		
	});
	
	// bx슬라이더
	$("#pkg-box div[id*=bxBox-] .bxS").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
	});
	
	// 오른쪽 배너
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop =	$("#setTop").offset().top;
		
		if(scr > setTop) {
			$("#rWing").css({
				"position": "fixed",
				"top": "256px"
			});
		} else {
			$("#rWing").css({
				"position": "absolute",
				"top": "656px"
			});
		}
	});
	
	
});