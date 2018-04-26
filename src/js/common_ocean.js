$(function() {
	// 단체문의 팝업
	$(".popOpen").on('click', function () {

		var thisObj = $(this);
		//var popTop = thisObj.offset().top;
		var popTop = $(window).scrollTop() + 100;


		$('#contact-pop').css("top", popTop);
		$('#contact-pop, #contact-bg').show();

	});
	
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
		var setTop = $("#setTop").offset().top;
		
		if (scr < setTop) {
			$("#goTop, #rtBookingBn").fadeOut();
			$("#gnb-header").removeClass('on');
			$("body").removeClass('on');
			
			$("#gnb-header .nav-bar .mFaq-a img").attr('src', 'http://img.ocean2you.co.kr/renew/m_icon.png');
			$("#gnb-header .logo").attr('src', 'http://img.ocean2you.co.kr/renew/logo.png');
			$("#gnb-header .gcLogo").attr('src', 'http://img.ocean2you.co.kr/renew/oc2_gcLogo.png');
		}
		if (scr >= setTop) {
			$("#goTop, #rtBookingBn").fadeIn();
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

function toggleOn(itm, type) {
	if (type == "sib") {
		$(itm).on('click', function () {
			var idx = $(this).index();
			
			$(this).toggleClass('on').siblings().removeClass('on');
		});
	} else {
		$(itm).on('click', function () {
			var idx = $(this).index();
			$(this).toggleClass('on');
		});
	}
}

// 고정 레이어 팝업 띄우기
function fixedPop(op, itm, cls) {
    var popOpen = $(op),
        pop = $(itm),
        popCls = $(cls),
        popWrap = $("#wrapper-pop");

    popOpen.on("click", function() {
        popWrap.css("z-index", "100");
        var wd = pop.width();
        var ht = pop.height();
        pop.css({
            display: "block",
            position: "fixed",
            left: "50%",
            marginLeft: -wd/2,
            top: "50%",
            marginTop: -ht/2
        });
        $("body").addClass("of-hidden");
        return false;
    });

    popCls.on("click", function() {
        popWrap.css("z-index", "-1");
        pop.css({
            display: "none"
        });
        $("body").removeClass("of-hidden");
    });

}

// 레이어 팝업 비노출
function hidePop(itm) {
    $(itm).hide();
    $(itm).closest("#wrapper-pop").css("z-index", "-1");
}

// 레이어 팝업 노출
function showPop(itm) {
    $(itm).show();
    $(itm).closest("#wrapper-pop").css("z-index", "100");
}