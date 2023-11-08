import { advantageItems } from './advantageItems';

const advantageEl = document.querySelector('.list')

function advantage() {
  const element = advantageItems.map(({ id, name }) => {
    return `
    <li class="item">
    <a class="link" href="#${id}">${name}</a>
    </li> `;  
    
  }).join()
  advantageEl.insertAdjacentHTML('afterbegin', element)
}

advantage();
