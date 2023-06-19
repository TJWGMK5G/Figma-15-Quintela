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


//   News Company
const btn = document.querySelector('.main-news__btn');
const item = document.querySelectorAll('.news-item');

btn.addEventListener('click' , function() {
    btn.innerHTML = "Скрыть"
})

