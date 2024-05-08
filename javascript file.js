let currentInput = "";

function appendInput(value) {
  currentInput += value;
  document.getElementById("output").value = currentInput;
}

function clearOutput() {
  currentInput = "";
  document.getElementById("output").value = "";
}

function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("output").value = currentInput;
}

function performOperation(operator) {
  currentInput += operator;
  document.getElementById("output").value = currentInput;
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    document.getElementById("output").value = currentInput;
  } catch (error) {
    currentInput = "";
    document.getElementById("output").value = "Error";
  }
}