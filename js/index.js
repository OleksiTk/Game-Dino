let dino = document.querySelector(".dino__img");
let cactus = document.querySelector(".dino__cactus");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("dino__jump");
  }
  setTimeout(() => {
    dino.classList.remove("dino__jump");
  }, 1000);
}

let alive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusleft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusleft < 100 && cactusleft > 0 && Math.abs(dinoTop) <= 30) {
    alert("game over");
    location.reload();
  }
}, 200);
