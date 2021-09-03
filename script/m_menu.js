  $(function(){
       //모바일메뉴보이기
        $('.btn').click(function(){
           $('.m_menu').slideToggle(); 
        });
	   //모바일메뉴 스크립트
    	$(".main").click(function(){
		  $(this).find('.sub').slideToggle();
		  $(this).siblings().children('.sub').slideUp();
		  return false;
	});
});