// Dom references
const result = document.getElementById("res");
const btnWrapper = document.getElementById("btns");
const btnEql = document.getElementById("btnEql");
const btnClr = document.getElementById("btnClr");

// Listen any click event of the children
btnWrapper.addEventListener("click", function (e) {
  result.innerHTML += e.target.innerText;
});

// Clear result display content
btnClr.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  result.innerHTML = "";
});

// Listen click event to start operation
btnEql.addEventListener("click", function (e) {
  e.stopImmediatePropagation();

  const displayText = result.innerHTML;

  const operator = findOperator(displayText);

  const operand1 = parseInt(
    displayText.slice(0, displayText.indexOf(operator)),
    2
  );

  const operand2 = parseInt(
    displayText.slice(displayText.indexOf(operator) + 1),
    2
  );

  //actual  operation
  switch (operator) {
    case "+":
      result.innerHTML = Number(operand1 + operand2).toString(2);
      break;
    case "-":
      result.innerHTML = Number(operand1 - operand2).toString(2);
      break;
    case "*":
      result.innerHTML = Number(operand1 * operand2).toString(2);
      break;
    case "/":
      result.innerHTML = Number(operand1 / operand2).toString(2);
      break;
    default:
      result.innerHTML = "Syntax Error";
  }
});

// find operator to operate
function findOperator(text) {
  let sign;
  if (text.includes("+")) {
    sign = "+";
  } else if (text.includes("-")) {
    sign = "-";
  } else if (text.includes("*")) {
    sign = "*";
  } else if (text.includes("/")) {
    sign = "/";
  } else {
    console.log("There is an error.");
  }

  return sign;
}
