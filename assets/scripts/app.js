const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseFloat(userInput.value)
}

function add() {
  const enteredNumber = getUserNumberInput()
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult = currentResult + enteredNumber ;
  outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredNumber = getUserNumberInput()
  const calcDescription = `${currentResult} - ${enteredNumber}`
  currentResult = currentResult - enteredNumber ;
  outputResult(currentResult, calcDescription);
}

function multiply() {
  const enteredNumber = getUserNumberInput()
  const calcDescription = `${currentResult} * ${enteredNumber}`
  currentResult = currentResult * enteredNumber ;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput()
  const calcDescription = `${currentResult} / ${enteredNumber}`
  currentResult = currentResult / enteredNumber ;
  outputResult(currentResult, calcDescription);
}


addBtn.addEventListener('click', add);
