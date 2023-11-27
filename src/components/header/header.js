const notary = [
  {
    city: 'КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ',
    job: 'НОТАРІУС',
    name: 'СІМОНОВА Вікторія Валеріївна',
    certificate: 'Свідоцтво',
  },
];

const headerEl = document.querySelector('.header__title');

const makeHeader = () => {
  const element = notary
    .map(({ city, job, name, certificate }) => {
      return `
              <h3 class="title city">${city}</h3>
              <h1 class="title job">${job}</h1>
              <h2 class="title name">${name}</h2>
              <h3 class="title city certificate">${certificate} №9824</h3>           
`;
    })
    .join('');
  headerEl.insertAdjacentHTML('afterbegin', element);
};

makeHeader();
