



$$ = document.querySelectorAll.bind(document);
$ = document.querySelector.bind(document);




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

window.onscroll = () => {
    menu_mb.classList.add('fa-bars')
    menu_mb.classList.remove('fa-x')
    sub_menu_mb.classList.remove('active')
}


 // sử lý read more bài báo
 const read_more = $('.read-more');
 const list_news = $('.list-news');
 let hide = true
 read_more.addEventListener('click', () => {
     if(hide == false) {
         list_news.classList.remove('active')
         read_more.classList.remove('close')
         read_more.innerText = 'read more'
         read_more.style = 'position: absolute;'
         hide = true
     }else {
         list_news.classList.add('active')
         read_more.classList.add('close')
         read_more.innerText = 'close'
         read_more.style = 'position: relative;'
         hide = false

     }
 })



