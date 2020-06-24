const main = document.querySelector(".main");

function green(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.add("green");
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.textContent = i;

  button.id = "button" + i;
  main.appendChild(button);

  button.addEventListener("click", green);
}
