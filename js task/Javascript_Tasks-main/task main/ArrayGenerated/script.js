function displayFirstLast() {
    const input = document.getElementById("arrayItems").value;
    const array = input.split(",").map(item => item.trim()).filter(item => item !== "");

    if (array.length === 0) {
        document.getElementById("arrayResult").value = "Please enter at least one value";
        return;
    }

    // Check if all are numbers (optional, remove if you want to support strings too)
    if (array.some(item => isNaN(item))) {
        document.getElementById("arrayResult").value = "Enter only numbers, comma separated";
        return;
    }

    const firstItem = array[0];
    const lastItem = array[array.length - 1];
    document.getElementById("arrayResult").value = `${firstItem} ${lastItem}`;
}

function clearFields() {
    document.getElementById("arrayItems").value = "";
    document.getElementById("arrayResult").value = "";
}