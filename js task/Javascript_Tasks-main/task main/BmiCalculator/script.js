function displayBmi() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    document.querySelector(".displayBmiResult").innerHTML = "Please enter a valid input";
  } else {
    let actualHeight = height / 100; // convert cm to meters
    let Bmi = weight / (actualHeight * actualHeight);
    document.querySelector(".displayBmiResult").innerHTML = `Your BMI is ${Bmi.toFixed(2)}`;
  }
}

function clearFields() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.querySelector(".displayBmiResult").innerHTML = "";
}
