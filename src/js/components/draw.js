const Draw = () => {
  //Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

  function randomInteger(min, max) {
    // случайное число от (min+1) до (max+1)
    if (min < 0) {
      min = 0;
    }
    if (max <= min) {
      const diff = min - max;
      max = max + diff + 1;
    }
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const button = document.querySelectorAll(".dot");
  const confetti = document.querySelector('.confetti');
  for (let currentButton of button) {
    currentButton.addEventListener("click", function () {
      currentButton.style.backgroundImage = "url('img/content/users/" + randomInteger(1, 7) + ".jpg')";
      confetti.classList.remove('visually-hidden');
    });
  }
};
export default Draw;
