// What is a Data Type?

// A data type tells JavaScript what kind of value a variable is storing.

// Example:

// Name → text

// Age → number

// Pass/Fail → true or false

// 2. Types of Data Types in JavaScript

// JavaScript has 2 main categories:

// Primitive Data Types

// Non-Primitive (Reference) Data Types

// Primitive Data Types
// Number

// String

// Boolean

// Undefined

// Null

// BigInt

// number
let age= 30;
console.log(age);
let price= 19.99;
console.log(price);
console.log(typeof age); // Output: number
console.log(typeof price); // Output: number
// string
// let name= "John Doe";
// console.log(name);
// let city= 'New York';
// console.log(city);
// console.log(typeof name);

// Used to store text.

// Strings can be written using:

// Double quotes " "

// Single quotes ' '

// Backticks `` //Backticks are used for template literals.

let studentName = "Gaurav"; //Double Quotes " " Used to create normal strings.
let city = "Ghaziabad";

console.log(studentName);
console.log(city);

console.log(typeof studentName);
//Variables inside strings
let name = "Priya";
let age1 = 20;
console.log("my name is " + name + " and my age is " + age1); //Concatenation
console.log(`My name is ${name} and my age is ${age1}`); //Template Literals (Backticks)

// boolean
let isPass = true;
let isAbsent = false;
console.log(isPass);
console.log(isAbsent);
console.log(typeof isPass);
// Used to store true or false values.
// Used mostly in:
// Conditional statements
// Loops
// Logical operations

// undefined
// A variable that is declared but not assigned any value.
let result;
console.log(result);
console.log(typeof result); // Output: undefined
// Meaning:

// Memory is allocated

// Value is missing

// null
// null means intentional empty value.
let data = null; // vale is intentionally set to be null.
console.log(data);
console.log(typeof data); // Output: object (This is a quirk in JavaScript) //js bug
// Difference between undefined and null:

// undefined → value not assigned

// null → value cleared intentionally

// BigInt Used to store very large numbers.
let bigNumber = 1234567890123456789012345678901234567890n; // n at the end indicates BigInt
console.log(bigNumber);
console.log(typeof bigNumber); // Output: bigint

// Ends with n

// Used in advanced applications like cryptography, scientific calculations

// Non-Primitive (Reference) Data Types
// Main types:

// Object

// Array

// Function

// Object