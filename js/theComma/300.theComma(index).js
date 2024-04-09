$(document).ready(function(){
    
    //main_banner
    let bn_idx = 0;
    let bn_count = $('.banner').length;
    let bn_timer = 1000;



    for(let i = 0; i < bn_count; i++){
        $('.indi').append('<div class="line"></div>')
        }
    
        $('.line').eq(0).addClass('line_active')
    

    $('.banner').eq(0).css({left : 0})

    $('.L_btn').click(function(){
        //버튼 막기
        $('.btn').css({pointerEvents : 'none'})

        setTimeout(function(){
            $('.btn').css({pointerEvents : 'auto'})
        },bn_timer)

        //나갈판
        $('.banner').eq(bn_idx % bn_count).animate({
            left :'-100%'
        },bn_timer)

        //들어올판

        $('.banner').eq((bn_idx+1) % bn_count).css({
            left : '100%'
        }).animate({
            left : 0
        },bn_timer)

        bn_idx = (bn_idx+1) % bn_count;

        $('.line').removeClass('line_active')
        $('.line').eq(bn_idx % bn_count).addClass('line_active')
    })

    $('.R_btn').click(function(){
                //버튼 막기
        $('.btn').css({pointerEvents : 'none'})

        setTimeout(function(){
            $('.btn').css({pointerEvents : 'auto'})
        },bn_timer)

        //나갈판
        $('.banner').eq(bn_idx % bn_count).animate({
            left :'100%'
        },bn_timer)

        //들어올판

        $('.banner').eq((bn_idx+2) % bn_count).css({
            left : '-100%'
        }).animate({
            left : "0"
        },bn_timer)

        bn_idx = (bn_idx+2) % bn_count;

        $('.line').removeClass('line_active')
        $('.line').eq(bn_idx % bn_count).addClass('line_active')
    })

    // 버튼 막기, 배너슬라이드, 인디케이터 함수 각각 만들기로 추천

    let auto_slide_inter = "";

    function auto_slide(){
        auto_slide_inter = setInterval(function(){
            $('.R_btn').trigger('click')
        },bn_timer + 2000)
    }

    auto_slide()

    $('.main_banner').hover(function(){
        clearInterval(auto_slide_inter)
    }, function(){
        auto_slide()
    })

    weekly/////////////////////////////////

    
    let weekly_img_arr = [];

    weekly_img_arr = 
    ['img/theComma/items/ranking/1.jpg', 'img/theComma/items/ranking/2.jpg', 'img/theComma/items/ranking/3.jpg', 'img/theComma/items/ranking/4.jpg', 'img/theComma/items/ranking/5.jpg', 'img/theComma/items/ranking/6.jpg']


    for(let i = 0; i < weekly_img_arr.length; i++){

            let item =`
                        <div class="weekly_box">
                            <div class="weekly_img">
                                <img src="${weekly_img_arr[i]}" alt="">
                                <div class="weekly_rank">${i + 1}</div>
                            </div>
                            <div class="weekly_title">더 콤마</div>
                            <div class="weekly_desc_box">
                                <div class="desc weekly_dis_price">300,000원</div>
                                <div class="desc weekly_price">200,000원</div>
                                <div class="desc weekly_desc">상품에 대한 설명이 표시됩니다.</div>
                            </div>
                        </div>`


        $('.weekly_ranking').append(item)

    }
//BEST ITEM ////////////////////////////////
let item_count = ITEM_LIST.length;


    for(let i = 0; i < 1; i++){
        for(let j = 0; j < 8; j++){
            let item =`
                        <div class="best_box">
                            <div class="best_img">
                                <img src="${ITEM_LIST[i][j].src}" alt="">
                            </div>
                            <div class="best_title">${ITEM_LIST[i][j].title}</div>
                            <div class="best_desc_box">
                                <div class="desc best_dis_price">${ITEM_LIST[i][j].o_price}원</div>
                                <div class="desc best_price">${ITEM_LIST[i][j].s_price}원</div>
                                <div class="desc best_desc">${ITEM_LIST[i][j].desc}</div>
                            </div>
                        </div>`


        $('.best_item').append(item)
        }
    }

    for(let i = 1; i < 2; i++){
        for(let j = 0; j < 8; j++){
            let item =`
                        <div class="new_box">
                            <div class="new_img">
                                <img src="${ITEM_LIST[i][j].src}" class = "first_img" alt="" data-imgName = "first">
                                <img src="${ITEM_LIST[i][j].covered_src}" class = "second_img" alt="" data-imgName = "second">
                            </div>
                            <div class="new_title">${ITEM_LIST[i][j].title}</div>
                            <div class="new_desc_box">
                                <div class="desc new_dis_price">${ITEM_LIST[i][j].o_price}원</div>
                                <div class="desc new_price">${ITEM_LIST[i][j].s_price}원</div>
                                <div class="desc new_desc">${ITEM_LIST[i][j].desc}</div>
                            </div>
                        </div>`


        $('.new_item').append(item)
        }
    }

    $('.first_img').mouseenter(function(){

        for(let i = 0; i < 8; i++){
            $('.first_img').eq(i).css({
                opacity : 0
            }),$('.second_img').eq(i).css({
                opacity : 1
            })
        }
    })

    
    


    // $('.first_img').hover(function(){
    //     $('.second_img').addClass('img_active_block')
    //     $('.first_img').addClass('img_active_none')
    // }, function(){
    //     $('.second_img').removeClass('img_active_block')
    //     $('.first_img').removeClass('img_active_none')
    // })



    

    



//$(document).ready(function(){///////////////////////////////////////////////////
})