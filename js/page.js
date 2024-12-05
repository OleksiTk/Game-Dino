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
buttonRegSumbit.addEventListener("click", regSumbit);

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

function regSumbit() {
  window.location.reload();
}

//Login
function showLog() {
  logins.style.display = "grid";
  buttonRegSumbit.style.display = "flex";
  buttonsAccount.style.display = "none";

  buttonBack.style.display = "block";
}
////////////////////////////////////////////////////////////
let fullName = document.querySelector("#nameREG");
let yourEmail = document.querySelector("#emailREG");
let yourPassword = document.querySelector("#passwordREG");
let submitValidation = document.querySelector(".login--page__sumbitbutton");
fullName.addEventListener("input", checkErorName);
yourPassword.addEventListener("input", checkErrorPassword);
yourEmail.addEventListener("input", checkErrorEmail);

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

let errorText = document.createElement("div");
submitValidation.addEventListener("click", () => {
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
  } else {
    count--;
    validateInputs.appendChild(errorText);
    errorText.classList.add("validation__error");
    errorText.innerHTML = "Dont correct";
  }
}
////////////////////////////////////////////////////////////
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
