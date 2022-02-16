function generatePin() {
  const pin = Math.floor(Math.random() * (10000 - 1000)) + 1000;
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    } else if (number == "<") {
      calcInput.value = calcInput.value.slice(0, -1);
    }
  } else {
    calcInput.value = calcInput.value + number;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typedNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
  }
}
