const main = document.querySelector(".main");

function changeColour(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle("green");
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.textContent = i;
  button.id = "button" + i;

  main.appendChild(button);

  button.addEventListener("click", changeColour);
}
