import { advantageItems } from "./advantageItems";

const advantageEl = document.querySelector('.advantage__list')

function advantage() {
  const element = advantageItems.map(({ id, name }) => {
    return `
    <li class="advantage__item">
      <p class="advantage__title">${name}</p>
   </li>`;   
    
  }).join('')
  advantageEl.insertAdjacentHTML('afterbegin', element)
}

advantage();