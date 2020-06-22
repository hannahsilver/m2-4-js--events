// Exercise 1.1
// ------------
console.log("exercise 1.1");

const main = document.querySelector(".result");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

h1.innerText = "Be a quicker clicker!";

main.appendChild(h1);
main.appendChild(h2);

const youWin = function () {
  h2.textContent = "You win!";
};

window.addEventListener("click", youWin);
setTimeout(() => {
  if (h2.textContent === "") {
    h2.textContent = "You lose!";
  }
  window.removeEventListener("click", youWin);
}, 1000);
