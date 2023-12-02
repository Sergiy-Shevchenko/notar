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
  //-----------1-variant-------------
  // const element = schudlesContent
  //   .map(({ day, time }) => {
  //     return `  
  //  <tr>
  //  <td class="title__td">${day}</td>
  //  <td>${time}</td>
  // </tr>`;
  //   })
  //   .join('');
  // schedlelEl.insertAdjacentHTML('afterbegin', element);

  //---------------2-variant---------

  schedlelEl.innerHTML = `
  <tr>
   <td class="lng-title-day1">Понеділок</td>
   <td class="lng-title-time1">10:00-19:00</td>
  </tr>
   <tr>
   <td class="lng-title-day2">Вівторок</td>
   <td class="lng-title-time2">10:00-19:00</td>
  </tr>
 <tr>
   <td class="lng-title-day3">Середа</td>
   <td class="lng-title-time3">10:00-19:00</td>
  </tr>
 <tr>
   <td class="lng-title-day4">Четвер</td>
   <td class="lng-title-time4">10:00-19:00</td>
  </tr>
 <tr>
   <td class="lng-title-day5">П'ятниця</td>
   <td class="lng-title-time5">10:00-19:00</td>
  </tr>
 <tr>
   <td class="lng-title-day6">Субота</td>
   <td class="lng-title-time6">За попередньою домовленістю</td>
  </tr>
 <tr>
   <td class="lng-title-day7">Неділя</td>
   <td class="lng-title-time7">За попередньою домовленістю</td>
  </tr> 
  `;


  

};

makeSchudle();
