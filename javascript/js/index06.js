// // number
// let num1 = 10;
// let num2 = 20.5;
// let num3 = "1233";
// let num4 = "3244.44";

// // parseInt
// console.log("parseInt of num3:", parseInt(num3));
// console.log("parseInt of num4:", parseInt(num4));

// // parseFloat
// console.log("parseFloat of num3:", parseFloat(num3));
// console.log("parseFloat of num4:", parseFloat(num4));

// // toFixed
// console.log("toFixed of num2:", num2.toFixed(1));
// console.log("toFixed of num4:", parseFloat(num4).toFixed(1));

// // toString
// console.log("toString of num1:", num1.toString());
// console.log("toString of num2:", num2.toString());

// // isNaN
// console.log("isNaN of num1:", isNaN(num1));
// console.log("isNaN of num2:", isNaN(num2));
// console.log("isNaN of num3:", isNaN(num3));
// console.log("isNaN of num4:", isNaN(num4));


// Functions

// types of function:
/*1. Function Declaration
2. Function Expression
3. Arrow Function
4. IIFE (Immediately Invoked Function Expression)*/


// // Declaration
// function test() {
//     let text = "Hello , class kasy hu"
//     console.log(text);
// }

// test();


// // Expression
// const test2 = function() {
//     let text = "Hello , class kasy hu"
//     console.log(text);
// }

// test2();

// // Arrow
// const test3 = () => {
//     let text = "Hello , class kasy hu"
//     console.log(text);
// }

// test3();

// // IIFE
// (function() {
//     let text = "Hello , class kasy hu, me tu thk ni hu aur aap kaise ho"
//     console.log(text);
// })();


// // parameters and arguments
// function greet(name) {
//     let text = "Hello, " + name;
//     console.log(text);
// }

// greet("Alice, kasy hu ");


// // return statement
// function add(a, b) {
//     return a + b;
// }

// let sum = add(5, 10);
// console.log("Sum:", sum);



// Scope

/*
Scope
1. Global Scope
2. Function Scope = local scope
3. Block Scope
4. Lexical Scope
*/


// // global scope
// let globalVar = "I am a global variable";

// function checkScope() {
//     let localVar = "I am a local variable";
//     console.log(globalVar);
//     console.log(localVar);
// }

// checkScope();

// // Function Scope
// function anotherFunction() {
//     let anotherLocalVar = "I am another local variable";
//     console.log(globalVar);
//     console.log(anotherLocalVar);
// }

// anotherFunction();


// // Block Scope
// {
//     let blockScopedVar = "I am a block scoped variable";
//     console.log(blockScopedVar);
// }


// Hoisting

// var : hoisting
// example
// console.log(hoistedVar); // Output: undefined
// var hoistedVar = "I am hoisted";
// console.log(hoistedVar); // Output: "I am hoisted"


// // let
// // console.log(letVar); // Output: ReferenceError: Cannot access 'letVar' before initialization
// let letVar = "I am let variable";
// console.log(letVar); // Output: "I am let variable"

// // const
// // console.log(constVar); // Output: ReferenceError: Cannot access 'constVar' before initialization
// const constVar = "I am const variable";
// console.log(constVar); // Output: "I am const variable"


// // Declaration

// add(22,33)

// function add(a, b) {
//     return a + b;
// }