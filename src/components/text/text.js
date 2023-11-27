const textItems = [
  {
    text: 'Консультуємо та вчиняємо всі види нотаріальних дій, згідно із Законом України “Про нотаріат та нотаріальну діяльність”.',
  },
  // {text: 'Консультируем и совершаем все виды нотариальных действий, согласно Закону Украины "О нотариате и нотариальной деятельности"'}
];

const textEl = document.querySelector('.section__text');

const mateText = () => {
  const element = textItems
    .map(({ text }) => {
      return `    
        <p class="text">${text}</p>`;
    })
    .join('');
  textEl.insertAdjacentHTML('beforeend', element);
};
mateText();
