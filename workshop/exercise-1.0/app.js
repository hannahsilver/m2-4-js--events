// Exercise 1.0
// ------------
console.log("exercise-1");

const main = document.querySelector(".main");

const youWin = function () {
  main.innerHTML = "<p>You win!</p>";
  window.removeEventListener(youWin);
};

window.addEventListener("click", youWin);
