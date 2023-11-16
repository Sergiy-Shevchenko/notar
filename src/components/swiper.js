//   import Swiper from "swiper/swiper-bundle.min.mjs";
// import Swiper from "swiper/swiper-bundle.min.mjs";

new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  lazy: true,
  loop: true,
  direction: 'horizontal',


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
