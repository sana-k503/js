function findNextNumber() {
  const number = document.getElementById("number").value;
  const array = number.split(",");

  if (!number || array.some(n => isNaN(n.trim()) || n.trim() === "")) {
    document.querySelector('.next-number').innerHTML = "Please enter valid numbers";
  } else {
    let lastNumber = Number(array[array.length - 1].trim());
    document.querySelector(".next-number").innerHTML = `Next number: ${lastNumber + 1}`;
  }
}

function clearFields() {
  document.getElementById("number").value = "";
  document.querySelector(".next-number").innerHTML = "";
}
