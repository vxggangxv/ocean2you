$(function() {
	
	// 패키지 탭
	$("#facil-tab li").on('click', function() {
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$("#facil-box section").eq(idx).addClass('on').siblings().removeClass('on');
		
	});
	
	// bx슬라이더
	$("#bxBox-1 .bxS, #bxBox-2 .bxS, #room-list .bxBox .bxS").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
	});
	
});