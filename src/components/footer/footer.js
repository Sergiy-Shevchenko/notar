const footerContent = [
  {
    job: 'НОТАРІУС',
    name: 'СІМОНОВА Вікторія Валеріївна',
    street: 'пр-т. Голосіївський, 70',
    point: 'готель "МИР"',
  },
];

const footerlEl = document.querySelector('.footer__contact');

const makeFooter = () => {
  const element = footerContent
    .map(({ job, name, street, point }) => {
      return `  
        <span class="location_point">
        <h4 class="footer__job">${job}</h4>
        <h4 class="footer__name">${name}</h4>
      </span>
      <span class="adress">
        <h4 class="footer__contact__point">${street}</h4>
        <h4 class="footer__contact__point">${point}</h4>
      </span>`;
    })
    .join('');
  footerlEl.insertAdjacentHTML('afterbegin', element);
};

makeFooter();
