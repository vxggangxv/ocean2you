$(function () {

	// 브라우저 높이 -> 화면 높이 적용
	var ht = $(window).height();
	$('section.main, section.main-bg').height(ht);
	
	$(window).on('resize', function () {
		var ht = $(window).height();
		$('section.main, section.main-bg').height(ht);
	});
	
	// 자세히보기 클릭시
	$("#txt-box .more-a").on('click', function() {
		var setTop =	$("#intro").offset().top;
		$('html, body').stop().animate({
			scrollTop: setTop
		}, 1300, 'easeInOutQuart');
	});
	
	// 별도 PC 메인 텍스트 fadeOut 및 hover 효과
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { 
			//mobile 
			//alert('mobile 접속'); 
			
		} else { 
			//pc 
			//alert('pc 접속'); 
			$("#txt-box").hide();
			$("#txt-box").fadeIn(700);
			setTimeout(function() {
				$("#txt-box").fadeOut(500);
			}, 500);
			$("#main").hover(function() {
				$("#txt-box").fadeIn(1000);
			}, function() {
				$("#txt-box").fadeOut(1000);
			});
			
		} 
	}
	
	// 시설안내 bx슬라이더
	$("#bxList-1 .bxS-1, #bxList-1 .bxS-2").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next.png" alt="다음">',
	});
	


});