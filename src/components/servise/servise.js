// const serviseItems = [
//   { id: '1', name: 'Оформлення договорів' },
//   { id: '2', name: 'Оформлення довіреностей' },
//   { id: '3', name: 'Оформлення заяв' },
//   { id: '4', name: 'Оформлення спадщини' },
//   { id: '5', name: 'Оформлення заповіту' },
//   { id: '6', name: 'Посвідчення підпису' },
//   { id: '7', name: 'Посвідчення копій' },
//   { id: '8', name: 'Переоформлення нерухомості' },
//   { id: '9', name: 'Державна реєстрація' },
//   { id: '10', name: 'Посвідчення аграрних розписок' },
// ];

const serviseEl = document.querySelector('.servise__list');

const makeServise = () => {
  //---------------1-variant-----------------------
  //   const element = serviseItems
  //     .map(({ id, name }) => {
  //       return `
  //           <li class="lng-servise-item">
  //             <p class="lng-servise-title">${name}</p>
  //           </li>`;
  //     })
  //     .join('');
  //   serviseEl.insertAdjacentHTML('afterbegin', element);

  //--------------2-variant--------------------------
  serviseEl.innerHTML = `
    <li class="lng-servise-item">
  <p class="lng-servise-title0">Оформлення договорів</p>
  </li>
<li class="lng-servise-item"><p class="lng-servise-title1">Оформлення довіреностей</p></li>
<li class="lng-servise-item"><p class="lng-servise-title2">Оформлення заяв</p></li>
<li class="lng-servise-item"><p class="lng-servise-title3">Оформлення спадщини</p></li>
<li class="lng-servise-item"><p class="lng-servise-title4">Оформлення заповіту</p></li>
<li class="lng-servise-item"><p class="lng-servise-title5">Посвідчення підпису</p></li>
<li class="lng-servise-item"><p class="lng-servise-title6">Посвідчення копій</p></li>
<li class="lng-servise-item"><p class="lng-servise-title7">Переоформлення нерухомості</p></li>
<li class="lng-servise-item"><p class="lng-servise-title8">Державна реєстрація</p></li>
<li class="lng-servise-item"><p class="lng-servise-title9">Державна реєстрація</p></li>
`;
  //----------------------------------
};
makeServise();
