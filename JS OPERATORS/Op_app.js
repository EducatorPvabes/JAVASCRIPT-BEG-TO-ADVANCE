//Operators are symbols used to perform operations on values (operands).
// let sum = 10 + 5;
//+ → operator

// 10, 5 → operands

// Types of Operators in JavaScript
// JavaScript has many types of operators:

// Arithmetic Operators

// Assignment Operators

// Comparison Operators

// Logical Operators

// Unary Operators

// Ternary Operator

// Type Operators

// 1. Arithmetic Operators

let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b);
console.log(a / b); // Division
console.log(a % b); // Modulus (Remainder)
console.log(a ** b); // Exponentiation (a raised to the power of b)


// 2. Assignment Operators
//  =,+=, -=, *=, /=, %=

let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15
x -= 3; // Equivalent to x = x - 3
console.log(x);
x *= 2; // Equivalent to x = x * 2
console.log(x);
x /= 4;
console.log(x);
x %= 3;
console.log(x);

// 3. Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
console.log(a == b); // Equality (loose)
console.log(a === b); // Strict equality
console.log(a != b); // Inequality (loose)
console.log(a !== b);
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to


console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)

// 4. Logical Operators
// &&, ||, !

let age = 25;
let isStudent = true;

console.log(age > 18 && isStudent); // Logical AND
console.log(age < 18 || isStudent);
console.log(!isStudent); // Logical NOT

// 5. Unary Operators
// ++, --, +, -

let count = 10;
count++; // Increment
console.log(count); // Output: 11
count--; // Decrement
console.log(count); // Output: 10
let num = 5;
console.log(+num); // Unary plus (converts to number)
console.log(-num); // Unary minus (negates the number)

let value = 5;
console.log(++value); // Pre-increment: increments value before using it (Output: 6)
console.log(value++); // Post-increment: uses value then increments it (Output: 6, but value becomes 7 after this line)
console.log(value); // Output: 7 (after post-increment)

let value2 = 5;
console.log(--value2); // Pre-decrement: decrements value2 before using it (Output: 4)
console.log(value2--); // Post-decrement: uses value2 then decrements it (Output: 4, but value2 becomes 3 after this line)
console.log(value2); // Output: 3 (after post-decrement)

let num1 = "10";
console.log(++num1); // Output: 10 (converts string to number)
console.log(num1); // Output: "10" (original string remains unchanged)

// Post (a++) → use then change

// Pre (++a) → change then use

// 6. Ternary Operator Short form of if-else.
// condition ? expressionIfTrue : expressionIfFalse
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes

// 7. Type Operators
// typeof, instanceof

console.log(typeof a); // Output: number
console.log(typeof isStudent);

let arr = [1, 2, 3];
console.log(typeof arr); // Output: object (Arrays are a type of object in JavaScript)
console.log(arr instanceof Array); // Output: true (Checks if arr is an instance of Array)
console.log(arr instanceof Object); // Output: true (Checks if arr is an instance of Object)
console.log(arr instanceof String); // Output: false (Checks if arr is an instance of String)   


