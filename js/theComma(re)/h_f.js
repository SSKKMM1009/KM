$(document).ready(function(){
    
// top_banner
let tb_idx = 0;
let tb_count = 0;
let tb_length = $('.tb_txt').length;
let tb_interval = "";
let tb_timer = 1000;

$('.tb_txt').eq(0).css({top : 0})


tb_interval = setInterval(function(){

//나갈글씨
$('.tb_txt').eq(tb_idx % tb_length).animate({
    top : '-100%'
},tb_timer)

//들어올 글씨
$('.tb_txt').eq((tb_idx+1) % tb_length).css({
    top : "100%"
}).animate({
    top : 0
},tb_timer)

tb_idx = (tb_idx+1) % tb_length

},tb_timer + 500)


//nav_pan
$('.nav_item').hover(function(){
    $('.nav_pan').stop().slideDown(300)

    $('.pan_item').css({display : 'none'})

    $('.pan_item').eq($(this).index()).css({
        display : "block"
    })


},function(){
    $('.nav_pan').stop().slideUp(300)
})

$('.nav_pan').hover(function(){
    $('.nav_pan').stop().slideDown(300)
},function(){
    $('.nav_pan').stop().slideUp(300)
})


//$(document).ready(function(){/////////////////////////////////
})