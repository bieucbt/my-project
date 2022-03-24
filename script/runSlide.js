function runSlide(index,sum, length, width) {
    // slide chạy tự động
   if(auto == true){
       setInterval(runSlideRight, 4000)
   }

   // xử lý khi nhấn bên trái chuyển slide
   btn_left.addEventListener('click', runSlideLeft )

   // xử lý khi nhấn bên phải chuyển slide
   btn_right.addEventListener('click', runSlideRight)
}

  function runSlideRight() {
    if(index >= length - 1) {
        index = 0
        sum = 0
        slider.style = `transform: translateX(${sum}px)`

    }else {
        index ++
        sum -= width
        slider.style = `transform: translateX(${sum}px)`
    }
}

function runSlideLeft(){
    auto = false

    if(index <= 0) {
        index = (length - 1)
        sum -= (width * (length - 1))
        slider.style = `transform: translateX(${sum}px)`
    }else {
        sum += width
        slider.style = `transform: translateX(${sum}px)`
        index--
    }
}





export default runSlide