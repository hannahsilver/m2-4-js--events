// Exercise 1.2
// ------------
console.log("exercise 1.2");

const main = document.querySelector(".result");

const youWin = function () {
  main.textContent = "You win!";
};
const time = Math.floor(Math.random() * 5);
document.getElementById("time").innerText = time;

window.addEventListener("click", youWin);
setTimeout(() => {
  if (main.textContent === "") {
    main.textContent = "You lose!";
  }
  window.removeEventListener("click", youWin);
}, time * 1000);
