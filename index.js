// Function for adding two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function for subtracting two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function for multiplying two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function for dividing two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero!";
    } else {
        return num1 / num2;
    }
}

// Examples of usage

console.log("Addition: " + add(5, 3));
console.log("Subtraction: " + subtract(5, 3));
console.log("Multiplication: " + multiply(5, 3));
console.log("Division: " + divide(6, 3));
