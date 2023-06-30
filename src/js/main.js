if (document.querySelector('.main-swiper') == true) {
    new Swiper('.main-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            },
            autoHeight: true,
            initialSlide: 0,
            // slidesPerView: 1,
            spaceBetween: 150,
            loop: true,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
            // autoplay: {
            //     delay: 4000,
            //     disavleOnInterection: true,
            // },
            speed: 1000,
      });
}



//   News Company
const btn = document.querySelector('.main-news__btn');
const item = document.querySelectorAll('.main-news-item');

let flag = false;

if (btn == true) {

    btn.addEventListener('click' , function() {
        flag = !flag
        if (flag == true) {
            btn.innerHTML = "Скрыть"
        } else {
            btn.innerHTML = 'Открыть'
        }   
    })
    
    item.forEach(function (i) {
           btn.addEventListener('click' , function () {
            i.classList.toggle("active");
           })
    })

}


// На определённых страницах меняется bg шапки
if (document.querySelector('.main-swiper') == false) {
    document.querySelector('.header').classList.add('header-newbg')
 } 
//  else {
//     document.querySelector('.main-swiper') == true
// }

// console.log('Ебанина!')