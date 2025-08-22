/*
if (condition) {
  // code to be executed if condition is true
} else if (condition) {
  // code to be executed if condition is false
} else {
  // code to be executed if none of the conditions are true
}
 */

// // calculator
// let num1 = 10
// let num2 = 45
// let operator = "/"

// if (operator === "+") {
//   console.log(num1 + num2)
// } else if (operator === "-") {
//   console.log(num1 - num2)
// } else if (operator === "*") {
//   console.log(num1 * num2)
// } else if (operator === "/") {
//   console.log(num1 / num2)
// } else {
//   console.log("Invalid operator")
// }

// const prompt = require("prompt-sync")();

// let numb1 = parseInt(prompt("Enter first number:"))
// let numb2 = parseInt(prompt("Enter second number:"))
// let operator1 = prompt("Enter operator (+, -, *, /):")

// if (operator1 === "+") {
//   console.log(numb1 + numb2)
// } else if (operator1 === "-") {
//   console.log(numb1 - numb2)
// } else if (operator1 === "*") {
//   console.log(numb1 * numb2)
// } else if (operator1 === "/") {
//   console.log(numb1 / numb2)
// } else {
//   console.log("Invalid operator")
// }


// let num2 = parseInt(prompt("Enter second number:"));
// console.log(num2);


// prompt - sync - package
// npm init -y
// npm install prompt-sync
// require("prompt-sync")();



// ternary operator
// const prompt = require("prompt-sync")();
// let age = parseInt(prompt("Enter your age:"));
// age >= 17 ? 
// console.log("You can vote") 
// : age < 18 ? 
// console.log("You are a minor") 
// : console.log("You cannot vote");


// switch statement
let job_role = "teacher"

switch(job_role){
    case "teacher":
        console.log("You teach students.");
        break;
    case "engineer":
        console.log("You design and build things.");
        break;
    case "doctor":
        console.log("You help sick people.");
        break;
    default:
        console.log("Unknown job role.");
}

