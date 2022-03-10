
$$ = document.querySelectorAll.bind(document);
$ = document.querySelector.bind(document);

// sử lý slider chạy
function handleSlide(btn_left, btn_right, items, slider, auto) {
    let index = 0; // dùng để tính vị trí 
    let sum = 0; // lấy tổng của item rồi cách ra như kiểu trượt
    const length = items.length;
    const width = items[0].offsetWidth
    btn_left.addEventListener('click', () => {
        if(index <= 0) {
            index = (length - 1)
            sum -= (width * (length - 1))
            slider.style = `transform: translateX(${sum}px)`
        }else {
            sum += width
            slider.style = `transform: translateX(${sum}px)`
            index--
        }
    })

    if(auto === true){
        setInterval(() => {
            if(index >= length - 1) {
                index = 0
                sum = 0
                slider.style = `transform: translateX(${sum}px)`

            }else {
                index ++
                sum -= width
                slider.style = `transform: translateX(${sum}px)`

            }
        }, 4000)
    }

    btn_right.addEventListener('click', () => {
       
        if(index >= length - 1) {
            index = 0
            sum = 0
            slider.style = `transform: translateX(${sum}px)`
        }else {
            index ++
            sum -= width
            slider.style = `transform: translateX(${sum}px)`
        }
    })
}



   // sử lý đóng mở menu
   const menu_mb = $('.menu-mb');
   const sub_menu_mb = $('.menu');
   menu_mb.addEventListener('click', () => {
       menu_mb.classList.toggle('fa-bars')
       menu_mb.classList.toggle('fa-x')
       sub_menu_mb.classList.toggle('active')

        const items = sub_menu_mb.querySelectorAll('a')

       items.forEach(item => item.addEventListener('click', () => {
            menu_mb.classList.add('fa-bars')
            menu_mb.classList.remove('fa-x')
            sub_menu_mb.classList.remove('active')
       }))
   })


// sử lý read more bài báo
const read_more = $('.read-more');
const list_news = $('.list-news');
let hide = true
read_more.addEventListener('click', () => {
    if(hide == false) {
        list_news.classList.remove('active')
        read_more.classList.remove('close')
        read_more.innerText = 'read more'
        hide = true
    }else {
        list_news.classList.add('active')
        read_more.classList.add('close')
        read_more.innerText = 'close'
        hide = false

    }
    
   
})

