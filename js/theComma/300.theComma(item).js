let href = location.href

console.log(href)

let cate = href.split('?')[1].split('&')[0].split('=')[1]

let itemno = href.split('?')[1].split('&')[1].split('=')[1]

console.log(cate)

console.log(itemno)

let item_L = `<img class="item_img" src="${ITEM_LIST[cate][itemno].src}" alt="">`
        
        let item_R = `<h3 class="item_title">${ITEM_LIST[cate][itemno].title}</h3>
                      <h4 class="customer">소비자가</h4>
                      <h4 class="item_title">판매가</h4>
                      <h4 class="item_title">배송비</h4>
                      <h4 class="item_title">적립금</h4>`

        let item_r = `<h3 class="ttt"><br></h3>
                      <h4 class="customer">${ITEM_LIST[cate][itemno].o_price}원</h4>
                      <h4 class="item_title">${ITEM_LIST[cate][itemno].s_price}원</h4>
                      <select name="" class = 'deli'>
                        <option value="">주문시 결제(선결제)</option>
                        <option value="">주문후 결제(후결제)</option>
                        <option value="">쿠폰사용(배송비 무료)</option> 
                      </select>
                      <h4 class="coin">10,000원(20%)</h4>`              

        $('.item_L').append(item_L)

        $('.R_title').append(item_R)

        $('.R_desc').append(item_r)

        let item_mid_r = `<h4 class="color">색상</h4>`;
        let item_mid_l = `<div class="opt_box">
                            <div class="option black" id="black" data-btnName="black"></div>
                            <div class="option beige" id="beige" data-btnName="beige"></div>
                            <div class="option gray" id="gray" data-btnName="gray"></div>
                          </div>
                          <div class = "opt_txt">[필수]옵션을 선택해 주세요.</div>
                          
                          <div class = "selected"></div>`;

        
        $('.mid_R_title').append(item_mid_r)

        $('.mid_R_desc').append(item_mid_l)

        let 저장할거 = "";

        $('.option').click(function(){

            let 클릭한거 = $(this).data('btnname')

            console.log(클릭한거)

            if($('.sel_box').hasClass(클릭한거)){
                alert('이미 선택된 상품입니다.')
            }
            else{
                let item = `<div class = "sel_box ${클릭한거}">
                                <div>${ITEM_LIST[cate][itemno].title}</div>
                                
                                <button id="id_minus" class="class_minus">-</button>
                                <button id="id_plus" class="class_plus">+</button>
                                <input type = "text" class = "item_count" value = "0"></input>

                                <div class = "btn_remove">X</div>
                            </div>
                            <div>(${클릭한거})</div>
                            `

                $('.selected').append(item)
            }

        })
        
        $(document).on('click', '.btn_remove', function(){
            $(this).parent().remove();
        })

        $(document).on('click', '#id_minus', function(){
            $('.item_count').value = Number($('.item_count').value) - 1;
        })

        $(document).on('click', '#id_plus', function(){
            $('.item_count').value = $('.item_count').value + 1;
        })
    