
import './components/servise'
import './components/modal'
import './components/swiper'
{/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}
import { Report } from 'notiflix/build/notiflix-report-aio'





function linck() {
  
    Report.success(
      'Працюємо 24/7',
      'метро Голосіївська, готель "МИР"',      
      'OK',
        {
        rtl: false,
        titleFontSize: '24px',
        messageFontSize: '16px',
        titleColor: '#242424',
        messageColor: '#fff',
    });
  }
  
  // linck();
  