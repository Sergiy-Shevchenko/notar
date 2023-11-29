const notary = [
  {
    city: 'КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ',
    job: 'НОТАРІУС',
    name: 'СІМОНОВА Вікторія Валеріївна',
    certificate: 'Свідоцтво',
  },
];

const headerEl = document.querySelector('.header__title');

const button = document.querySelector('.translate')
// console.log(button);

const makeHeader = () => {
  const element = notary
    .map(({ city, job, name, certificate }) => {
      return `
              <h3 class="lng-title-city">${city}</h3>
              <h1 class="lng-title-job ">${job}</h1>
              <h2 class="lng-title-name ">${name}</h2>
              <h3 class="lng-title-certificate">${certificate} №9824</h3>           
`;
    })
    .join('');
  headerEl.insertAdjacentHTML('afterbegin', element);
};

makeHeader();
