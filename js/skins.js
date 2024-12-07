// Знайти всі кнопки з класом .skins__take--button
let buttons = document.querySelectorAll(".skins__take--button");

// Додати обробник подій для кожної кнопки
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Запобігаємо поширенню події (не запускається перевертання картки)
    console.log("Ви натиснули на кнопку");
  });
});

// Функція для перевертання картки
function toggleFlip(card) {
  card.querySelector(".card").classList.toggle("flipped");
}
