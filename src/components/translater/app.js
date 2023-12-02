import { langArr } from './lang';

const select = document.querySelector('select');
const allLang = ['ua', 'ru', 'en'];

select.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua';
    location.reload();
  }
  select.value = hash;

  // for (let key in langArr) {
    // console.log(key)
    document.querySelector('.lng-title-city').innerHTML = langArr['city'][hash];
    document.querySelector('.lng-title-job').innerHTML = langArr['job'][hash];
    document.querySelector('.lng-title-name').innerHTML = langArr['name'][hash];
    document.querySelector('.lng-title-certificate').innerHTML = langArr['certificate'][hash];
    document.querySelector('.lng-servise-title0').innerHTML = langArr['servise0'][hash];
    document.querySelector('.lng-servise-title1').innerHTML = langArr['servise1'][hash];
    document.querySelector('.lng-servise-title2').innerHTML = langArr['servise2'][hash];
    document.querySelector('.lng-servise-title3').innerHTML = langArr['servise3'][hash];
    document.querySelector('.lng-servise-title4').innerHTML = langArr['servise4'][hash];
    document.querySelector('.lng-servise-title5').innerHTML = langArr['servise5'][hash];
    document.querySelector('.lng-servise-title6').innerHTML = langArr['servise6'][hash];
    document.querySelector('.lng-servise-title7').innerHTML = langArr['servise7'][hash];
    document.querySelector('.lng-servise-title8').innerHTML = langArr['servise8'][hash];
    document.querySelector('.lng-servise-title9').innerHTML = langArr['servise9'][hash];
    document.querySelector('.lng-text').innerHTML = langArr['text'][hash];
    document.querySelector('.lng-footer-job').innerHTML = langArr['job'][hash];
    document.querySelector('.lng-footer-name').innerHTML = langArr['name'][hash];
    document.querySelector('.lng-footer-adress').innerHTML = langArr['adress'][hash];
    document.querySelector('.lng-footer-point').innerHTML = langArr['point'][hash];
    document.querySelector('.lng-title-day1').innerHTML = langArr['day1'][hash];
    document.querySelector('.lng-title-day2').innerHTML = langArr['day2'][hash];
    document.querySelector('.lng-title-day3').innerHTML = langArr['day3'][hash];
    document.querySelector('.lng-title-day4').innerHTML = langArr['day4'][hash];
    document.querySelector('.lng-title-day5').innerHTML = langArr['day5'][hash];
    document.querySelector('.lng-title-day6').innerHTML = langArr['day6'][hash];
    document.querySelector('.lng-title-day7').innerHTML = langArr['day7'][hash];
    document.querySelector('.lng-title-time6').innerHTML = langArr['time'][hash];
    document.querySelector('.lng-title-time7').innerHTML = langArr['time'][hash];
  // }
}
changeLanguage();
