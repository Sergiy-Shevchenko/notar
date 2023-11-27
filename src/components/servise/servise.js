const serviseItems = [
  { id: '1', name: 'Оформлення договорів' },
  { id: '2', name: 'Оформлення довіреностей' },
  { id: '3', name: 'Оформлення заяв' },
  { id: '4', name: 'Оформлення спадщини' },
  { id: '5', name: 'Оформлення заповіту' },
  { id: '6', name: 'Посвідчення підпису' },
  { id: '7', name: 'Посвідчення копій' },
  { id: '8', name: 'Переоформлення нерухомості' },
  { id: '9', name: 'Державна реєстрація' },
  { id: '10', name: 'Посвідчення аграрних розписок' },
];

const serviseEl = document.querySelector('.servise__list');

const makeServise = () => {
  const element = serviseItems
    .map(({ id, name }) => {
      return `      
          <li class="servise__item">
            <p class="servise__title">${name}</p>
          </li>`;
    })
    .join('');
  serviseEl.insertAdjacentHTML('afterbegin', element);
};

makeServise();
