function displayCapName() {
  let nameInput = document.getElementById("text");
  let name = nameInput.value.trim();

  // Check for uppercase letters
  if (/[A-Z]/.test(name)) {
    document.querySelector(".displayName").innerHTML = "Please enter the name in lowercase only.";
    return;
  }

  if (name === "") {
    document.querySelector(".displayName").innerHTML = "Please enter a name.";
    return;
  }

  // Capitalize first letter of each word, rest lowercase
  let capitalized = name
    .split(" ")
    .filter(word => word !== "")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  document.querySelector(".displayName").innerHTML = capitalized;
}

function clearFields() {
  document.getElementById("text").value = "";
  document.querySelector(".displayName").innerHTML = "";
}
