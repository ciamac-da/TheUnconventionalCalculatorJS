const defaultResult = 0;
let   currentResult = defaultResult;
let   logEntries = []

function getUserNumberInput() {
  return parseFloat(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)
}

function writeToLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
){
  const logEntry = {
    operation : operationIdentifier,
    previousResult : previousResult,
    number : operationNumber,
    result : newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if( calculationType === "ADD"){
    currentResult += enteredNumber;
    mathOperator = "+"
  }else{
    currentResult -= enteredNumber;
    mathOperator = "-"
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber )
  writeToLog(calculationType, initialResult , enteredNumber, currentResult)  
}



function add() {
  calculateResult("ADD")
}

function subtract() {
 calculateResult("SUBTRACT")
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber ;
  createAndWriteOutput("*", initialResult, enteredNumber )
  writeToLog("MULTIPLY", initialResult , enteredNumber, currentResult)  

}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber ;
  createAndWriteOutput("/", initialResult, enteredNumber )
  writeToLog("DIVIDE", initialResult , enteredNumber, currentResult)  
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
