function generatePin() {
  const randomNumber = Math.floor(Math.random() * (10000 - 1000)) + 1000;
  document.getElementById("display-pin").value = randomNumber;
}
const buttons = document.getElementsByClassName("button");
const numberInput = document.getElementById("typed-numbers");
let tryLeft = 3;
for (const button of buttons) {
  button.addEventListener("click", function () {
    let number = numberInput.value;
    if (button.innerText == "C") {
      numberInput.value = "";
    } else if (button.innerText == "<") {
      numberInput.value = numberInput.value.slice(0, -1);
    } else if (number.length < 4) {
      numberInput.value = number + button.innerText;
    }
  });
}
function verifyPin() {
  const randomNumber = document.getElementById("display-pin").value;
  if (randomNumber == numberInput.value && numberInput.value.length == 4) {
    document.getElementById("notify-success").style.display = "block";
    document.getElementById("notify-fail").style.display = "none";
    document.querySelector(".action-left").style.display = "none";
    console.log(numberInput.value);
  } else {
    document.getElementById("notify-fail").style.display = "block";
    document.getElementById("notify-success").style.display = "none";
    console.log(numberInput.value);
    document.getElementById("tryLeft").innerText = --tryLeft;
  }
  if (tryLeft == 0) {
    document.querySelector(".submit-btn").disabled = true;
    document.querySelector(".submit-btn").style.backgroundColor = "#333333";
    document.querySelector(".generate-btn").style.backgroundColor = "#333333";
    document.querySelector(".generate-btn").disabled = true;
  }
}
