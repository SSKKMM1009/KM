$(document).ready(function(){
    
let title_arr = ['BEST', 'NEW', 'OUTER', 'TOP', 'BOTTOM', 'ACC', 'BAG&SHOES']
    
    let href = location.href

    console.log(href)

    cate = href.split('?')[1].split('=')[1]

    console.log(cate[0])

    cate = cate[0]

    $('.sec_title').text(title_arr[cate])

    for(let j=0; j<8; j++) {
        let item = `
            <div class="item">
                <a href="300.theComma(item).html?cate=${cate}&itemNo=${j}">
                <div class="img_box">
                    <img src="${ITEM_LIST[cate][j].src}" alt="" class = "product_img">
                </div>
                <div class="desc_box">
                    <div class="item_title">${ITEM_LIST[cate][j].title}</div>
                    <div class="item_price">${ITEM_LIST[cate][j].o_price.toLocaleString('ko')}원</div>
                    <div class="item_price">${ITEM_LIST[cate][j].s_price.toLocaleString('ko')}원</div>
                    <div class="item_desc">${ITEM_LIST[cate][j].desc}</div>
                </div>
                </a>
            </div>`
        $('.sec_body').append(item)
        //$('.sec_body').eq(0).append(item)
    }
    })



   