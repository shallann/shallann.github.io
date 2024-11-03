const screen = document.getElementById("screen");

function showOnScreen(input) {
    screen.value += input;
}

function clearScreen() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        // Check if screen value is empty to avoid errors
        if (screen.value.trim() === "") {
            screen.value = "0";
        } else {
            screen.value = eval(screen.value);
        }
    } catch (error) {
        screen.value = "Error";
    }
}
