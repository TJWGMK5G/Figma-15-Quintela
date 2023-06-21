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


// Добавление бг цвет для всех последующий страниц, кроме главной 
// Если класс personal на странице есть, то у хедера появляется background-color 
// if (document.querySelector('.popup-personal') == true) {
//     хедеру добавить цвет (создаём новый класс в котором указываем css стиль bg-color и навешиваем на хедер)
//     document.querySelector('')
// } else {
//     (document.querySelector('.popup-personal') == false)
// }