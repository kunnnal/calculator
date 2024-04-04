let input = document.getElementById("display");
function AddNumber(numbers) {
  input.value += numbers;
}
function AddOperator(operator) {
  input.value += operator;
}
function Clear() {
  input.value = "";
}
function Calculate() {
  try {
    const result = calculator(input.value);
    input.value = result;
  } catch (error) {
    input.value = "Error";
  }
}

function calculator(expression) {
  const operators = expression.split(/[0-9.]+/).filter((op) => op);
  /*for evaluate simply the mathematichal expression    &
   for remove any empty string from resulting array use filter*/
  const operands = expression.split(/[\+\-\*\/]/).map(Number);

  let result = operands[0];

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const nextOperand = operands[i + 1];

    switch (operator) {
      case "+":
        result += nextOperand;
        break;
      case "-":
        result -= nextOperand;
        break;
      case "*":
        result *= nextOperand;
        break;
      case "/":
        if (nextOperand === 0) {
          throw new error("undefine"); // -------------------
        }
        result /= nextOperand;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }

  return result;
}
// end of result function
// =======================
// start of square root function
function Sqrt() {
  // console.log("Sqrt");
  const value = parseFloat(input.value);
  if (value >= 0) {
    const sqrtResult = Math.sqrt(value);
    input.value = sqrtResult;
  } else {
    input.value = " ";
  }
}
// end of square root function
// ===========================
