// button references

const result = document.getElementById("res");
const btnWrapper = document.getElementById("btns");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const btnEql = document.getElementById("btnEql");
const btnClr = document.getElementById("btnClr");

btnWrapper.addEventListener("click", function (e) {
  result.innerHTML += e.target.innerText;
});

btnClr.addEventListener("click", function (e) {
  result.innerHTML = "";
  e.stopImmediatePropagation();
});

btnEql.addEventListener("click", function (e) {
  e.stopImmediatePropagation();

  const displayText = result.innerHTML;

  const operator = findOperator(displayText);

  const operand1 = Number(
    Number(displayText.slice(0, displayText.indexOf(operator))).toString(10)
  );
  console.log("operand1", displayText.slice(0, displayText.indexOf(operator)));
  const operand2 = Number(
    Number(displayText.slice(displayText.indexOf(operator) + 1)).toString(10)
  );
  console.log("operand2", operand2);

  switch (true) {
    case operator == "+":
      result.innerHTML = Number(operand1 + operand2).toString(2);
      break;
    case operator == "-":
      result.innerHTML = Number(operand1 + operand2).toString(2);
      break;
    case operator == "*":
      result.innerHTML = Number(operand1 + operand2).toString(2);
      break;
    case operator == "/":
      result.innerHTML = Number(operand1 + operand2).toString(2);
      break;
    default:
      result.innerHTML = "Syntax Error";
  }
});

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
