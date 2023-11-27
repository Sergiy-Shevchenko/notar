import svg from '../../images/svg/symbol-defs.svg';
const linckItems = [
  { name: 'phone', href: 'tel:+380960051155', iconId: 'icon-linck-phone' },
  {
    name: 'telegram',
    href: 'https://t.me/simonova_notary',
    iconId: 'icon-linck-telegram',
  },
  {
    name: 'viber',
    href: 'viber://chat?number=%2B380960051155',
    iconId: 'icon-linck-viber',
  },
  {
    name: 'whatsapp',
    href: 'https://wa.me/380960051155',
    iconId: 'icon-linck-whatsapp',
  },
  {
    name: 'mail',
    href: 'mailto:simonova.w78@ukr.net',
    iconId: 'icon-linck-mail',
  },
];

const linckEl = document.querySelector('.link__list');

const makeLinck = () => {
  const element = linckItems
    .map(({ name, href, iconId }) => {
      return `    
    <li class="link__item">
      <a class="link" href="${href}">
        <svg class="link__img">
          <use href="${svg}#${iconId}"></use>
        </svg>
      </a>
    </li>`;
    })
    .join('');
  linckEl.insertAdjacentHTML('afterbegin', element);
};

makeLinck();
