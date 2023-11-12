import { Report } from 'notiflix/build/notiflix-report-aio'
import { servise } from './components/servise';
import check from './images/check_1.png'

// console.log(check);
// import 



function linck() {
   servise;
    Report.success(
      'Працюємо 24/7',
      'метро Голосіївська, готель "МИР"',      
      'OK',
        {
        rtl: false,
        titleFontSize: '24px',
        messageFontSize: '18px',
        titleColor: '#242424',
        messageColor: '#fff',
    });
  }
  
  linck();
  