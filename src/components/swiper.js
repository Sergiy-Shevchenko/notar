  import Swiper from "swiper/swiper-bundle.min.mjs";


  new Swiper('.swiper', {
        spaceBetween: 100,
        direction: 'horizontal',
        loop: true,
      
            pagination: {
          el: '.swiper-pagination',
        },   
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });



