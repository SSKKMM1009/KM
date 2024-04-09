$(document).ready(function(){

    //top_banner

    $('.tb_item').eq(0).css({
        top : 0
    });

    let tb_banner_idx = 0; //= bang
    let tb_banner_count = $('.tb_item').length;
    let tb_banner_timer = 500;

    let tb_banner_interval = "";

    tb_banner_interval = setInterval(function(){

        //나갈 글씨
        $('.tb_item').eq(tb_banner_idx % tb_banner_count).animate({
            top : '-100%'
        },tb_banner_timer);

        //들어올 글씨
        $('.tb_item').eq((tb_banner_idx + 1) % tb_banner_count).css({
            top : '100%'
        }).animate({
            top : 0
        },tb_banner_timer);

        tb_banner_idx = (tb_banner_idx + 1) % tb_banner_count


    },tb_banner_timer + 500)

//top_banner 따라다니기///////////////////////////////////////////////////

    let tb_top_off = $('.top_banner').offset().top;
    let nav_top_off = $('.nav').offset().top

    $(window).scroll(function(){

        let win_top = $(window).scrollTop()



        if(win_top >= nav_top_off){
            $('.top_banner').css({
                position : "fixed"
            })
        }

        // 주의 banner_top도 같이 fixed되야 하니까 그 높이도 고려되야함
        if(win_top + 40 > nav_top_off){
            $('.nav').addClass('nav_active')
        }

        else{
            $('.nav').removeClass('nav_active')

        }
    })

//nav_item hover하면 pan 내려오기///////////////////////////////////////////////////

$('.nav_item').hover(function(){
    $('.pan').stop(true).slideDown(300)

    $('.pan_item').css({display : 'none'}) //판 내려올때 pan item 우선 가리기
    $('.pan_item').eq($(this).index()).css({
        display : 'flex' //pan item중 선택된 것의 pan_item만 보여주기
    })
},
function(){
    $('.pan').stop(true).slideUp(300)
})

// pan 내려오면 버티게 하는 기능
$('.pan').hover(function(){
    $('.pan').stop(true).slideDown(300)
},
function(){
    $('.pan').stop(true).slideUp(300)
})



//$(document).ready(function) 종료 부분/////////////////////////////////////////////////////////////////
})