import Swiper from 'swiper/swiper-bundle.min.mjs';

new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  lazy: true,
  loop: true,
  autoHeight: true,
  direction: 'horizontal',
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

});

new Swiper('.disolve', {
  lazy: true,
  speed: 3000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
 
  loop: true,
});
