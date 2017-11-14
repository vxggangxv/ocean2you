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
			$("#gnb-header").removeClass('on');
			$("body").removeClass('on');
			
			$("#gnb-header .nav-bar .mFaq-a img").attr('src', 'http://img.ocean2you.co.kr/renew/m_icon.png');
			$("#gnb-header .logo").attr('src', 'http://img.ocean2you.co.kr/renew/logo.png');
			$("#gnb-header .gcLogo").attr('src', 'http://img.ocean2you.co.kr/renew/oc2_gcLogo.png');
		}
		if (scr >= setTop) {
			$("#goTop").fadeIn();
			$("#gnb-header").addClass('on');
			$("body").addClass('on');
			
			$("#gnb-header .nav-bar .mFaq-a img").attr('src', 'http://img.ocean2you.co.kr/renew/m_iconB.png');
			$("#gnb-header .logo").attr('src', 'http://img.ocean2you.co.kr/renew/logo_fixed.png');
			$("#gnb-header .gcLogo").attr('src', 'http://img.go.co.kr/logo.png');
		}
	});
	
	//FAQ 노출, 질문 펼치기 및 닫기
	$("#faq-a").on('click', function() {
		$('#wrap').css({
			"position": "fixed"
		});
		$("#faqWrap-back").fadeIn();
		$(this).addClass('on');
	});
	$("#faqWrap .i-x").on('click', function() {
		$('#wrap').css({
			"position": "relative"
		});
		$("#faqWrap-back").hide();
		$("#faq-a").removeClass('on');
	});
	$("#faqWrap .d1").click(function() {
		$(this).next().slideToggle('fast');
		 $(this).toggleClass('on');
	});
	// 모바일
	$("#faq .f_q").on("click", function () {
		$(this).next().slideToggle("fast");
	});
	$("#wrap .wrapperin .btn-area .btn-a").on("click", function () {
		$('#faq li').show();
	});
	
});