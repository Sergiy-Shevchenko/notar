import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { Report } from 'notiflix/build/notiflix-report-aio'
import { linksItems } from './linkItems';

const linkEl = document.querySelector('.link__list')

function linck() {
  const element = linksItems.map(({ id, name }) => {
    return `
    <li class="item__link">
    <a class="link" href="#${id}">${name}</a>
    </li>`;  
    
  }).join('')
  linkEl.insertAdjacentHTML('afterbegin', element)
  // Notify.warning('Процюємо 24/7');
  Report.success(
    'Працюємо 24/7',
    'метро Голосіївська, готель "МИР"',
    'Ок',
    );
}

linck();
