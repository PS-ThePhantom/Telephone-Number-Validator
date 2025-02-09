const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkNumber = () => {
  if (!input.value)
    alert("Please provide a phone number");
  else {
    const resultText = document.createElement("p")
    const validUsNumber = /^(1\s?)?(\d\d\d|\(\d\d\d\))[ -]?\d\d\d[ -]?\d\d\d\d$/;

    if (validUsNumber.test(input.value)) {
      resultText.style.color = "green";
      resultText.innerText = "Valid US number: " + input.value;

    } else {
      resultText.style.color = "red";
      resultText.innerText = "Invalid US number: " + input.value;

    }

    result.appendChild(resultText);
  }
};


clearButton.addEventListener("click", () => result.innerHTML = "");
checkButton.addEventListener("click", checkNumber);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
});