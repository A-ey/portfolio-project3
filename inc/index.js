


$(document).ready(function(){
	
    
    
    //상단의 펼침버튼을 클릭하면 왼쪽네비 펼쳐지게
    $('#menubar').click(function(){
        $('#leftbox').css('left','0');
        $('#leftclose').css('left','200px');
    });
    
    //왼쪽네비 닫기버튼 누르면 네비 숨김
    $('#leftclose').click(function(){
        $('#leftbox').css('left','-100%');
        $('#leftclose').css('left','-200px');
    });
    
    //섹션1 이미지 클릭하면 모달창 보이게 
    $('.thumb').click(function(){
        $('#modal').css('display','flex');
    
    //모달창 이미지 변경
    $('#modalimg').attr('src',$(this).attr('src'));    
        
    //모달창 캡션 변경
    $('#modalcaption').html($(this).attr('alt'));
    });
    
    //모달창 닫기버튼 클릭하면 사라지게
    $('#modal, #close').click(function(){
        $('#modal').css('display','none');
    });
    
    
    $('.link').click(function(){
        
       var url= $(this).attr('href');     //클릭한 링크의 href값(연결할 곳)
                
       var y1 = $(url).offset().top;   //연결할 곳의 세로 위치값

        $('body, html').stop().animate({'scrollTop':y1},1000,'easeOutBack');   //알아낸 섹션 위치로 이동
                
    });        
   

                $(window).scroll(function(){
                    
                    var y = $(this).scrollTop();
                    
                    if(y>0)
                        $('#scrollbutton').stop().animate({'bottom':'20px'},300);
                    else
                        $('#scrollbutton').stop().animate({'bottom':'-60px'},300);        
                    

                        var y3 = $('#sec3').offset().top - $(window).height() +600;
    
                        if ( y >= y3) {
                            $('.designers').eq(0).addClass('ani1');
                            $('.designers').eq(1).addClass('ani3');
                            $('.designers').eq(2).addClass('ani2');
                        }
                        
                });    
    
   
    $('#scrollbutton').click(function(){
            $('body, html').stop().animate({'scrollTop':0},1000,'easeOutBounce');
        });
    
    
    
    });    // end $(document).ready
    