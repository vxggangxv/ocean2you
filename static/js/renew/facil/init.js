$(function() {
	// 패키지 탭 wid
  packFor('#facil-tab');

	$(window).resize(function(){
    packFor('#facil-tab');
	}).resize();
    
	
	// 패키지 탭
	$("#facil-tab li").on('click', function() {
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$("#facil-box > section").eq(idx).addClass('on').siblings().removeClass('on');
		
	});
	
	// bx슬라이더
	$("div[id*=bxBox-] .bxS, #room-list .bxBox .bxS").bxSlider({
		auto:true,
		autoControls: true,
		speed: 500,
		duration: 6000,
		prevText: '<img src="http://img.ocean2you.co.kr/btn_prev2.png" alt="이전">',
		nextText: '<img src="http://img.ocean2you.co.kr/btn_next2.png" alt="다음">',
	});
	
	// 자세히보기 버튼
	$("#d-area-1").on('click', function() {
		$(this).toggleClass('on');
	});
	
	
});

function packFor(packParent){
    var winW = $(window).width();
    
    if (winW <= 768) {
      $(packParent).find('li').css({'width' : 48+'%'});
    }else{
      packWid($(packParent));
    }
}

function packWid(itm){
    var pack = $(itm);
    var packLi = pack.find('li');
    var packLiLen = packLi.length;
    
    packLi.css({'width' : (100/packLiLen)+'%'});
    
}