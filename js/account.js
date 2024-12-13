let accountDetails = JSON.parse(localStorage.getItem("Account"));
let nameAccount = document.querySelector(".account__name-text");

if (accountDetails.name !== ".") {
  nameAccount.textContent = accountDetails.name;
}

console.log(accountDetails);
