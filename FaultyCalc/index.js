// Create a faulty calculator using JavaScript

// This faulty calculator does the following:
// 1. It takes two numbers as input from the user
// 2. It performs wrong operations as follows:

// + ---> -
// * ---> +
// - ---> /
// / ---> **

// It performs wrong operation 10% of the time

let r = Math.random();

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
let d = prompt("Enter operation");

let operations = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (r < 0.1) {
    // Perform the faulty operation
    d = operations[d];
}

let result;

if (d === "+") {
    result = a + b;
} else if (d === "-") {
    result = a - b;
} else if (d === "*") {
    result = a * b;
} else if (d === "/") {
    result = a / b;
} else if (d === "**") {
    result = a ** b;
} else {
    console.log("Invalid operation");
    result = null;
}

if (result !== null) {
    console.log("The result of the operation is " + result);
}
