import { serviseItems } from './serviseItems';

const serviseEl = document.querySelector('.servise__list');

export function servise() {
  const element = serviseItems
    .map(({ id, name }) => {
      return `
    <li class="servise__item">
    <p class="servise__title">${name}</p>
    </li>`;
    })
    .join('');
  serviseEl.insertAdjacentHTML('afterbegin', element);
}

servise();
