$(function () {

	// 브라우저 높이 -> 화면 높이 적용
	$(window).on('resize', function () {
        resizeWin();
	}).resize();
	
	// 자세히보기 클릭시
	$("#txt-box .more-a").on('click', function() {
		var setTop =	$("#setTop").offset().top;
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
	
	// 왕복이용권 배너 클릭시
	$('.topbn-wrap .bn-ocean').on('click', function(){
		$('#pop-bustour').show();
        $('html').css({'overflow': 'hidden', 'height': '100%'});
        $('#pop-bustour').on('scroll', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
	});
    
});

//리사이즈 
function resizeWin(){
    var wt = $(window).width();
    var ht = $(window).height();
    
    $('.topbn-wrap .slide-banner').bxSlider({
        mode: 'fade',
        auto: true,
        controls : false,
        pager : false,
        autoControls: true,
        autoHover: true,
        speed: 500
    });
    if( wt <= 768 ){
        $(window).load(function(){
            //console.log('load')
            $('#bgMov').get(0).load();
            
            $('.m-vid').fadeIn(500, function(){
                $('#bgMov').get(0).play();
                $(this).find('#bgMov').on('ended',function(){
                    $(this).parents('.m-vid').fadeOut(500);
                });
            });
        });
    }else{
        //console.log('pc')
        $('#bgMov').get(0).pause();
        $('.m-vid').css({'display' : 'none'});
        
        if( $('.topbn-wrap').css('display') == 'block' ){
            $('.header').css({'margin-top' : 77+'px'});
            //console.log(busTourpt)
            var scr = $(window).scrollTop();
            var setTop = $("#setTop").offset().top;
            
            if (scr >= setTop) { 
                $('.header').css({'margin-top' : 0+'px'});
            }
            $(window).on('scroll', function() {
                scr = $(window).scrollTop();
                
                if (scr < setTop) {
                    $('.header').css({'margin-top' : 77+'px'});
                }
                if (scr >= setTop) { 
                    $('.header').css({'margin-top' : 0+'px'});
                }
            });
        }else{
            
        }
    }
}

