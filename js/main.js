$(document).ready(function(){
	//함수 호출
	isMobile();
	
	
	
	
	
 function isMobile() {
    var filter = "win16|win32|win64|mac|macintel";
    if( navigator.platform  ){
      if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
		  //모바일 접속
		  //아코디언메뉴
		  var btn=$('nav>ul>li>a');
		  
		  btn.click(function(){
			 if($(this).attr('class') !='active'){
				 btn.next().slideUp();
				 btn.removeClass('active');
				 
				 $(this).addClass('active');
				 $(this).next().slideDown();
			 
			 }else{
				 
				 $(this).removeClass('active');
				 $(this).next().slideUp();
			 }
		  });
		  
		  
		  //햄버거 메뉴 클릭하면 nav 나옴
		  $('.mobile_menu').click(function(){
			 $('nav').stop().animate({
				right:0 
			 });
		  });
		  
		  //close 버튼 클릭하면 nav 들어감
		  $('.close').click(function(){
			  $('nav').stop().animate({
				 right:'-100%'
			  });
		  });
		  
		  
		  
		  
		  
      }else{
	  // pc접속 	  
      //nav주메뉴에 마우스 올리면 서브메뉴 나타나고, 서브배경 나타남
	$('nav > ul > li > a').hover(function(){
		$('.sub').stop().slideDown();
		$('.sub_bg').stop().slideDown();
	});
	//nav메뉴 영역에서 마우스 아웃하면 서브메뉴, 서브배경 사라짐
	$('nav > ul > li').mouseleave(function(){
		$('.sub').stop().slideUp();
		$('.sub_bg').stop().slideUp();
	});
//모바일로 접속했는지 감지하는 함수 선언   
      }
    }
  }
	
       
        //top클릭하면 화면 맨 위로 이동 
        $('.top').click(function(){
            $('html,body').animate({'scrollTop':0});
		
    });

	
});