// Знайти всі кнопки з класом .skins__take--button
let buttons = document.querySelectorAll(".skins__take--button");

// Додати обробник подій для кожної кнопки
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    updateButtonState(button);
    resetOtherButtons(button);
    event.stopPropagation(); // Запобігаємо поширенню події (не запускається перевертання картки)
  });
});
window.addEventListener("load", () => {
  let selectedSkin = localStorage.getItem("userSkins");
  if (selectedSkin) {
    buttons.forEach((button) => {
      if (button.id === selectedSkin) {
        updateButtonState(button);
      } else {
        button.innerHTML = "GET";
      }
    });
  }
});
function updateButtonState(button) {
  button.innerHTML = "OWN";
}

function resetOtherButtons(clickedButton) {
  buttons.forEach((button) => {
    if (button !== clickedButton) {
      button.innerHTML = "GET";
    }
  });
}

let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    toggleCard(card);
  });
});

function toggleCard(takecard) {
  takecard.classList.toggle("flipped");
}

//switchskins
let takeSkins = "OD1";

let originalDino = document.querySelector("#OD1");
let coolDino = document.querySelector("#CD2");
let flowerDino = document.querySelector("#FD3");
let piviozavrDino = document.querySelector("#PD4");
let robocopDino = document.querySelector("#RD5");
let snowDino = document.querySelector("#SD6");
if (localStorage.getItem("userSkins")) {
  takeSkins = localStorage.getItem("userSkins");
}

originalDino.addEventListener("click", () => {
  takeSkins = "OD1";
  localStorage.setItem("userSkins", takeSkins);
  console.log(takeSkins);
});

coolDino.addEventListener("click", () => {
  takeSkins = "CD2";
  localStorage.setItem("userSkins", takeSkins);

  console.log(takeSkins);
});

flowerDino.addEventListener("click", () => {
  takeSkins = "FD3";
  localStorage.setItem("userSkins", takeSkins);
  console.log(takeSkins);
});
piviozavrDino.addEventListener("click", () => {
  takeSkins = "PD4";
  localStorage.setItem("userSkins", takeSkins);
  console.log(takeSkins);
});

robocopDino.addEventListener("click", () => {
  takeSkins = "RD5";
  localStorage.setItem("userSkins", takeSkins);
  console.log(takeSkins);
});

snowDino.addEventListener("click", () => {
  takeSkins = "SD6";
  localStorage.setItem("userSkins", takeSkins);
  console.log(takeSkins);
});
