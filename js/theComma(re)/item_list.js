const ITEM_LIST = [
    // best
    [
        {item_no: 1, src: 'img/theComma/items/best/1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 90000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 2, src: 'img/theComma/items/best/2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 3, src: 'img/theComma/items/best/3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 4, src: 'img/theComma/items/best/4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 5, src: 'img/theComma/items/best/5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no:6, src: 'img/theComma/items/best/6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: 'img/theComma/items/best/7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: 'img/theComma/items/best/8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:2, src: 'img/theComma/items/best/2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:1, src: 'img/theComma/items/best/1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: 'img/theComma/items/best/3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: 'img/theComma/items/best/8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: 'img/theComma/items/best/4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: 'img/theComma/items/best/6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: 'img/theComma/items/best/7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, src: 'img/theComma/items/best/5.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:1, src: 'img/theComma/items/best/1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: 'img/theComma/items/best/4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, src: 'img/theComma/items/best/2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: 'img/theComma/items/best/6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: 'img/theComma/items/best/3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: 'img/theComma/items/best/8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'}
    ]
    ,
    // new
    [ 
        {item_no:1, covered_src: 'img/theComma/items/new/4.jpg', src: 'img/theComma/items/new/1.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, covered_src: 'img/theComma/items/new/8.jpg', src: 'img/theComma/items/new/2.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, covered_src: 'img/theComma/items/new/6.jpg', src: 'img/theComma/items/new/3.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, covered_src: 'img/theComma/items/new/7.jpg', src: 'img/theComma/items/new/4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, covered_src: 'img/theComma/items/new/8.jpg', src: 'img/theComma/items/new/5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, covered_src: 'img/theComma/items/new/2.jpg', src: 'img/theComma/items/new/6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, covered_src: 'img/theComma/items/new/4.jpg', src: 'img/theComma/items/new/7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, covered_src: 'img/theComma/items/new/1.jpg', src: 'img/theComma/items/new/8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:9, covered_src: 'img/theComma/items/new/7.jpg', src: 'img/theComma/items/new/4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:10, covered_src: 'img/theComma/items/new/8.jpg', src: 'img/theComma/items/new/5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:11, covered_src: 'img/theComma/items/new/2.jpg', src: 'img/theComma/items/new/6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:12, covered_src: 'img/theComma/items/new/4.jpg', src: 'img/theComma/items/new/7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:13, covered_src: 'img/theComma/items/new/1.jpg', src: 'img/theComma/items/new/8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
         
    ],
    [],
    [],
    [],
    [],
    []
]