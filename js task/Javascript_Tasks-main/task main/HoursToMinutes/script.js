document.getElementById("hourForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const hours = parseFloat(document.getElementById("hours").value);

  if (isNaN(hours) || hours < 1) {
    document.querySelector(".result").innerHTML = "Please enter valid hours";
  } else {
    const minutes = hours * 60;
    document.querySelector(".result").innerHTML = `There are ${minutes} minutes in ${hours} hour(s).`;
  }
});

function clearFields() {
  document.getElementById("hours").value = "";
  document.querySelector(".result").innerHTML = "";
}
