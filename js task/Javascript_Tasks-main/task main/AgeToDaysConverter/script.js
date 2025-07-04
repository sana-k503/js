document.getElementById("ageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const ageInput = document.getElementById("age");
    const age = ageInput.value.trim();
    const result = document.querySelector(".result");

    if (!age || isNaN(age) || Number(age) <= 0) {
        result.style.color = "#d93025";
        result.textContent = "Please enter a valid age.";
    } else {
        const days = Number(age) * 365.25;
        result.style.color = "#184d99";
        result.textContent = `You are approximately ${days.toLocaleString()} days old.`;
    }
});

function clearAgeFields() {
    document.getElementById("age").value = "";
    const result = document.querySelector(".result");
    result.textContent = "";
}