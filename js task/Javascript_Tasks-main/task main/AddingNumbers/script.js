const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clearBtn");

function updateResult() {
  const val1 = parseInt(num1.value);
  const val2 = parseInt(num2.value);

  if (num1.value !== "" && num2.value === "") {
    result.value = "NaN";
  } else if (num1.value !== "" && num2.value !== "") {
    result.value = val1 + val2;
  } else {
    result.value = "";
  }
}

function clearInputs() {
  num1.value = "";
  num2.value = "";
  result.value = "";
}

num1.addEventListener("input", updateResult);
num2.addEventListener("input", updateResult);
clearBtn.addEventListener("click", clearInputs);
