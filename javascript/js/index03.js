// arithmetic operations : + , -, *, /, %, <, >, <=, >=, ===, !==, =, +=, -=, *=, /=, %=, ==, !=, 
let x = 10
let y = 20

let z = x + y
console.log(z)
// string concatenation
let x1 = "hello"
let y1 = 10
let z1 = x1 + y1
console.log(z1)


// increment operator: ++ and decrement operator: --
let x2 = 5
x2++
console.log(x2)

// assignment operator: =
let x3 = 10
let y3 = 20
let z3 = x3 + y3
console.log(z3)

// += operator
let x4 = 10
x4 += 5
console.log(x4)

// logical operators: &&, ||, !
let a = true
let b = false
console.log(a && b)
console.log(a || b)
console.log(!a)

//

let age = 25
if (age >= 18) {
  console.log("You are eligible to vote.")
} else if (age < 18) {
  console.log("You are not eligible to vote.")
}
else {
  console.log("Invalid age.")
}

/* true false = true
   false true = true
   true false = true
   false false = false
   true true = true
   */


//   Nullish coalescing operator: ??
let name = null
let userName = name ?? "Guest"
console.log(userName)