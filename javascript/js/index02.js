// primitive data types
// string numbers booleans undefined null
// non-primitive data types
// objects arrays functions

// string:
// "hello world", 'hello world', `hello world`
let greeting = "hello world";
let lastname = 'Moy Moy';
let fullname = `john doe`;

console.log(greeting, typeof greeting);
console.log(lastname, typeof lastname);
console.log(fullname, typeof fullname);


// number:
const age = 30;
const pi = 3.14;

console.log(age + " type of age:- " + typeof age);
console.log(pi + " type of pi:- " + typeof pi);


// boolean:
const isTrue = true;
const isFalse = false;

console.log(isTrue + " type of isTrue:- " + typeof isTrue);
console.log(isFalse + " type of isFalse:- " + typeof isFalse);


// undefined:
let notDefined;
console.log(notDefined + " type of notDefined:- " + typeof notDefined);


// null:
let emptyValue = null;
console.log(emptyValue + " type of emptyValue:- " + typeof emptyValue);


// template literals

let text = `phir to phir ha`

let text2  =    `ok phir to ${text}`
console.log(text2);


// Arrays:
const myArray = [1, 2, 3, "hello", true, null];

console.log(myArray, typeof myArray);

// Key/index
console.log(myArray[0]); // 1
console.log(myArray[3]); // "hello"
console.log(myArray[5]); // null


// Objects:
const myObject = {
    name: "John",
    Age: 30,
    isStudent: false
};

console.log(myObject, typeof myObject);

// Accessing object properties
console.log(myObject.name); // "John"
console.log(myObject.Age); // 30
console.log(myObject.isStudent); // false


// d-structure

const { name, Age, isStudent } = myObject;

console.log(name); // "John"
console.log(age); // 30
console.log(isStudent); // false






















