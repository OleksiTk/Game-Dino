//variables
let registrations = document.querySelector(".login--page__body");
let buttonRegister = document.querySelector(".login--page__button--register");
let buttonLogin = document.querySelector(".login--page__button--login");
let buttonsAccount = document.querySelector(".login--page__buttons");
let buttonBack = document.querySelector(".page__back-butoon");
let buttonRegSumbit = document.querySelector(".login--page__sumbitbuttons");
let logins = document.querySelector(".login--page__body--for--login");

// Event

buttonLogin.addEventListener("click", showLog);
buttonRegister.addEventListener("click", showReg);
buttonBack.addEventListener("click", goBackPage);
// buttonRegSumbit.addEventListener("click", regSumbit);

//Function

//Registration

function showReg() {
  buttonRegSumbit.style.display = "flex";
  buttonsAccount.style.display = "none";
  registrations.style.display = "grid";
  buttonBack.style.display = "block";
}

function goBackPage() {
  buttonsAccount.style.display = "flex";
  registrations.style.display = "none";
  buttonBack.style.display = "none";
}

// function regSumbit() {
//   window.location.reload();
// }

//Login
function showLog() {
  logins.style.display = "grid";
  buttonRegSumbit.style.display = "flex";
  buttonsAccount.style.display = "none";
  buttonBack.style.display = "block";
}
////////////////////////////////////////////////////////////
//Reistration
let pageSideBar = document.querySelector(".page__sidebar");
let accountPage = document.querySelector(".page__account");

let storedAccount = JSON.parse(localStorage.getItem("Account"));

// Якщо об'єкта в localStorage немає, створюємо новий об'єкт і зберігаємо його
if (!storedAccount) {
  let checkAccountReg = {
    name: ".",
    password: ".",
    email: ".",
    validate: 0, // або будь-яке значення за замовчуванням
  };

  // Перетворюємо об'єкт в рядок перед збереженням в localStorage
  localStorage.setItem("Account", JSON.stringify(checkAccountReg));
  storedAccount = checkAccountReg; // Присвоюємо новий об'єкт
}

// Тепер перевіряємо значення "validate"
if (storedAccount.validate === 3) {
  console.log("Пісюн"); // Це для тесту
  pageSideBar.style.display = "none"; // Сховуємо бокову панель
  accountPage.style.display = "block"; // Показуємо сторінку акаунта
} else {
  console.log("Account validate не дорівнює 3");
}
//
let fullName = document.querySelector("#nameREG");
let yourEmail = document.querySelector("#emailREG");
let yourPassword = document.querySelector("#passwordREG");
let submitValidation = document.querySelector(".login--page__sumbitbutton");
fullName.addEventListener("input", checkErorName);
yourPassword.addEventListener("input", checkErrorPassword);
yourEmail.addEventListener("input", checkErrorEmail);

//Inputs
function checkErorName() {
  let checkName = /^[A-Za-z]+ [A-Za-z]+$/;

  if (checkName.test(fullName.value)) {
    fullName.style.border = "2px solid black"; // Вказуємо товщину і тип лінії
  } else {
    if (fullName.value.trim() === "") {
      fullName.style.border = "2px solid black"; // Вказуємо товщину і тип лінії
    } else {
      fullName.style.border = "2px solid red"; // Вказуємо товщину і тип лінії
    }
  }
}

function checkErrorPassword() {
  let checkPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

  if (checkPassword.test(yourPassword.value)) {
    yourPassword.style.border = "2px solid black";
  } else {
    if (yourPassword.value.trim() === "") {
      yourPassword.style.border = "2px solid black";
    } else {
      yourPassword.style.border = "2px solid red";
    }
  }
}

function checkErrorEmail() {
  let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (checkEmail.test(yourEmail.value)) {
    yourEmail.style.border = "2px solid black";
  } else {
    if (yourEmail.value.trim() === "") {
      yourEmail.style.border = "2px solid black";
    } else {
      yourEmail.style.border = "2px solid red";
    }
  }
}
///

let errorText = document.createElement("div");

submitValidation.addEventListener("click", (event) => {
  event.preventDefault(); // Зупиняє стандартну поведінку кнопки (перезавантаження сторінки)
  checkValidet();
});
function checkValidet() {
  let count = 0;
  let checkName = /^[A-Za-z]+ [A-Za-z]+$/;
  let checkPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //Name
  if (checkName.test(fullName.value)) {
    console.log("correct");
    count++;
    storedAccount.name = fullName.value;
    localStorage.setItem("Account", JSON.stringify(storedAccount));
  } else {
    count--;
    validateInputs.appendChild(errorText);
    errorText.classList.add("validation__error");
    errorText.innerHTML = "Dont correct";
  }

  //Password
  if (checkPassword.test(yourPassword.value)) {
    count++;
    console.log("correct");
    storedAccount.password = yourPassword.value;
    localStorage.setItem("Account", JSON.stringify(storedAccount));
  } else {
    count--;
    validateInputs.appendChild(errorText);
    errorText.classList.add("validation__error");
    errorText.innerHTML = "Dont correct";
  }

  //email
  if (checkEmail.test(yourEmail.value)) {
    console.log("correct");
    count++;
    storedAccount.email = yourEmail.value;
    localStorage.setItem("Account", JSON.stringify(storedAccount));
  } else {
    count--;
    validateInputs.appendChild(errorText);
    errorText.classList.add("validation__error");
    errorText.innerHTML = "Dont correct";
  }
  console.log("Count: " + count);
  if (count == 3) {
    storedAccount.validate = 3;
    localStorage.setItem("Account", JSON.stringify(storedAccount));
    console.log("Correct");
    pageSideBar.style.display = "none";
    accountPage.style.display = "block";
  }
}
////////////////////////////////////////////////////////////
//login
let LOGName = document.querySelector("#nameLOG");
let LOGPassword = document.querySelector("#passwordLOG");

LOGName.addEventListener("input", checkErorNameLOG);
LOGPassword.addEventListener("input", checkErrorPasswordLOG);

function checkErorNameLOG() {
  let checkName = /^[A-Za-z]+ [A-Za-z]+$/;

  if (checkName.test(LOGName.value)) {
    LOGName.style.border = "2px solid black"; // Вказуємо товщину і тип лінії
  } else {
    if (LOGName.value.trim() === "") {
      LOGName.style.border = "2px solid black"; // Вказуємо товщину і тип лінії
    } else {
      LOGName.style.border = "2px solid red"; // Вказуємо товщину і тип лінії
    }
  }
}

function checkErrorPasswordLOG() {
  let checkPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

  if (checkPassword.test(LOGPassword.value)) {
    LOGPassword.style.border = "2px solid black";
  } else {
    if (LOGPassword.value.trim() === "") {
      LOGPassword.style.border = "2px solid black";
    } else {
      LOGPassword.style.border = "2px solid red";
    }
  }
}
