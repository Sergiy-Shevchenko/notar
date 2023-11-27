const schudlesContent = [
  { day: 'Понеділок', time: '10:00-19:00' },
  { day: 'Вівторок', time: '10:00-19:00' },
  { day: 'Середа', time: '10:00-19:00' },
  { day: 'Четвер', time: '10:00-19:00' },
  { day: `П'ятниця`, time: '10:00-19:00' },
  { day: 'Субота', time: 'За попередньою домовленістю' },
  { day: 'Неділя', time: 'За попередньою домовленістю' },
];

const schedlelEl = document.querySelector('.schedule-body');

const makeSchudle = () => {
  const element = schudlesContent
    .map(({ day, time }) => {
      return `  
   <tr>
   <td class="title__td">${day}</td>
   <td>${time}</td>
  </tr>`;
    })
    .join('');
  schedlelEl.insertAdjacentHTML('afterbegin', element);
};

makeSchudle();
