$(function () {

	// 브라우저 높이 -> 화면 높이 적용
	var ht = $(window).height();
	$('section.main, section.main-bg').height(ht);
	
	$(window).on('resize', function () {
		var ht = $(window).height();
		$('section.main, section.main-bg').height(ht);
	});
	
	
	// 모바일 네비탭 클릭 기능
	$("#mNav-btn").on("click", function() {
		$(this).toggleClass("on");
		$("#mNav-box").toggleClass("on");
	});
	
	$("#bxList-1 .bxS-1, #bxList-1 .bxS-2").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next.png" alt="다음">',
	});
	


});