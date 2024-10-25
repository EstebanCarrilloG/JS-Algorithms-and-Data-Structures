const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

function validatePhoneNumber(input) {
  const regExp1 = new RegExp(/^[1][\s][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/);
  const regExp2 = new RegExp(/^[1][\s][(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/);
  const regExp3 = new RegExp(/^[1][(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/);
  const regExp4 = new RegExp(/^[1][\s][0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/);
  const regExp5 = new RegExp(/^[0-9]{10}$/);
  const regExp6 = new RegExp(/^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/);
  const regExp7 = new RegExp(/^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/);

  if (
    input.match(regExp1) ||
    input.match(regExp2) ||
    input.match(regExp3) ||
    input.match(regExp4) ||
    input.match(regExp5) ||
    input.match(regExp6) ||
    input.match(regExp7)
  ) {
    return `Valid US number: ${input}`;
  } else {
    return `Invalid US number: ${input}`;
  }
}

function validateInput(input) {
  if (input == "") {
    alert("Please provide a phone number");
  } else {
    results.innerText = validatePhoneNumber(input);
  }
}
function clearOutput() {
  results.innerText = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", function () {
  validateInput(userInput.value);
});
clearBtn.onclick = clearOutput;
