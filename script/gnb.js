$(function(){
 var gnbM = $('.gnb>ul>li>a');
 var subM = $('.gnb>ul>li>ul');
  
 var min = $('.gnb').height();
 var max = subM.innerHeight()+min; //320px

 gnbM.on('mouseenter focus',function(){
  $('.gnb').css({height:min});
  $('.gnb>ul').stop().animate({height:max},
  "fast","swing",function(){   subM.stop().slideDown('fast'); });
  // 내부 function end
  
  subM.removeClass('on');
  $(this).find('ul').addClass('on');
 
 }); //onEvent end

  $('.gnb>ul>li').mouseleave(function(){
   subM.stop().slideUp('fast',function(){
    $('.gnb').stop().animate({height:min},'fast','swing');
   });
  });

});