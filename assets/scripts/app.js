const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `${currentResult} + ${userInput.value}`
  currentResult = currentResult + parseFloat(userInput.value);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
