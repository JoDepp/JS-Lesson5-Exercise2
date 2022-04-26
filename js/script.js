var humanFans = document.querySelector(".fans");
var fishFans = document.querySelector(".fish");
var petFans = document.querySelector(".pets");
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

humanFans.addEventListener("mouseover", function () {
  humanFans.innerText = "123K";
});

fishFans.addEventListener("mouseover", function () {
  fishFans.innerText = "47K";
});

petFans.addEventListener("mouseover", function () {
  petFans.innerText = "20K";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
