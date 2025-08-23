// Array Methods

// const myarr = [2,3,4,5,"hello", "world", true]

// // map 
// myarr.map((item, index) => {
//     console.log(item, index);
// });

// const mappedArr = myarr.map((item, index) => {
//    return item;
// });
// console.log("Mapped Array:", mappedArr);


// // forEach
// myarr.forEach((item, index) => {
//     console.log(item, index);
// });
// const forEachArr = myarr.forEach((item, index) => {
//     return item;
// });
// console.log("forEach Array:", forEachArr);


// const myar = [12, 34, 56, 7, 8, 45, 34, 89, 2, 33, 90, 67, 45, 21, 32, 11]
// // filter

// const filteredArr = myar.filter((item, index) => {
//     return item > 50;
// });
// console.log("Filtered Array:", filteredArr);

// // reduce

// const reducedValue = myar.reduce((accumulator, item, index) => {
//     return accumulator + item;
// }, 0);
// console.log("Reduced Value:", reducedValue);

// // spread operator: ... --> unpack
// // clone/copy
// const spreadArr = [...myar];
// console.log("Spread Array:", spreadArr);

// // merge
// const mergedArr = [...myar, ...spreadArr];
// console.log("Merged Array:", mergedArr);


// // Rest operator: ... --> collect/pack
// const restFunc = (...args) => {
//     console.log("Rest Arguments:", args);
// };
// restFunc(1, 2, 3, 4, 5);


// // Destructuring
// const myarr = [12, 34, 56, 7, 8, 45, 34, 89, 2, 33, 90, 67, 45, 21, 32, 11];
// const [first, second, ...rest] = myarr;
// console.log("First Element:", first);
// console.log("Second Element:", second);
// console.log("Rest of the Array:", rest);

// // Object Destructuring
// const myobj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// const { name, age, city } = myobj;
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);


// // IIFE - Immediately Invoked Function Expression
// (function() {
//     console.log("This is an IIFE");
// })();
// // 
// (() => {
//     console.log("This is another IIFE");
// })();
// // 
// ((
//     () => {
//         console.log("This is a 1nested IIFE");
//     }
// ));
// (() => {
//         console.log("This is a 2nested IIFE");
//     }
// );
// (() => {
//     console.log("This is a 3nested IIFE");
// })();


// math function

// // random
// console.log("Random Number:", Math.random()); // range: 0-1

// // squareroot
// console.log("Square root of 25:", Math.sqrt(25));

// // max
// console.log("Max of [1, 2, 3]:", Math.max(1, 2, 3));

// // min
// console.log("Min of [1, 2, 3]:", Math.min(1, 2, 3));

// // abs
// console.log("Absolute value of -5:", Math.abs(-5));

// // ceil
// console.log("Ceil of 4.2:", Math.ceil(4.2));

// // floor
// console.log("Floor of 4.8:", Math.floor(4.8));

// // round
// console.log("Round of 4.5:", Math.round(4.5));


// loops
/*
1. for loop
2. while loop
3. do while loop
4. for of loop
5. for in loop
*/

// // for loop
// for (let i = 0; i < 5; i++) {
//     console.log("For Loop Iteration:", i);
// }

// const aar = ["hello", "g", "no", true, false, 42]
// for (let i = 0; i < aar.length; i++) {
//     console.log("For Loop Iteration:", i, "Value:", aar[i]);
// }


// // while loop

// let x = 0;
// while (x < 5) {
//     console.log("While Loop Iteration:", x);
//     x++;
// }


// // do while loop

// let y= 0;
// do {
//     console.log("Do While Loop Iteration:", y);
//     y++;
// } while (y < 5);

// // for in loop

// const myobj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (let key in myobj) {
//     console.log("For In Loop Iteration:", key, "Value:", myobj[key]);
// }


// // for of loop

// const myarr = ["hello", "g", "no", true, false, 42];
// for (let value of myarr) {
//     console.log("For Of Loop Iteration:", value);
// }