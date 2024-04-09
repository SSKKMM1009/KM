$(document).ready(function(){

    // 탑배너
    $('.tb_item').eq(0).css({top: 0});
    
    let tb_idx = 0;
    let tb_count = $('.tb_item').length;
    let tb_timer = 500;
    
    setInterval(function(){
        // 나갈판
        $('.tb_item').eq(tb_idx % tb_count).animate({
            top: '-100%'
        }, tb_timer)

        // 들어올판
        $('.tb_item').eq((tb_idx+1) % tb_count).css({
            top: '100%'
        }).animate({
            top: '0'
        }, tb_timer)
        tb_idx+=1;
    }, tb_timer + 500);


    // nav에 hover 하면 메뉴100%, 판의 알맹이 나타나게 하기 
    $('.nav_item').hover(function(){
        $('.pan').stop().slideDown(300)
 
        $('.pan_item').css({display: 'none'}) // 보고 있던거 다 초기화하고
        $('.pan_item').eq($(this).index()).css({ //지금 볼 것만 보여줘라
            display: 'flex'
        })
    }, function(){
        $('.pan').stop().slideUp(300)
    })

    $('.pan').hover(function(){
        $('.pan').stop().slideDown(300)
         

    }, function(){
        $('.pan').stop().slideUp(300)
    })
})