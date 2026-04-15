// ==========================================
// STEP 1: NORMAL FUNCTION
// ==========================================

// SYNTAX:
// function functionName(parameters) {
//     return value;
// }

//templete literals
let name = "Rahul";
console.log(`Hello ${name}!`); // Hello Rahul!

function addNumbersFunc(a1, b1) {
  return a1 + b1; // returns sum
}

console.log("Normal Function:", addNumbersFunc(2, 3)); // 5
console.log(`normal function: ${addNumbersFunc(5, 7)}`); // 12

//simple function expression example
// function expression: function ko variable me store karna
// SYNTAX:
// const functionName = function(parameters) {
//     return value;
// }  

const greetExp = function() {
  return "Hello Students!";
};


console.log(greetExp()); // Hello Students!

//function expression with parameters
const squareFunc = function(n) {
  return n * n;
};
console.log("Square with Normal Function:", squareFunc(4)); // 16
//by template literals
console.log(`Square with Normal Function: ${squareFunc(6)}`); // 36
// ==========================================
// STEP 2: ARROW FUNCTION
// ==========================================

// SYNTAX:
// const functionName = (parameters) => expression;

const addNumbersArrow = (a2, b2) => a2 + b2; 

console.log("Arrow Function:", addNumbersArrow(4, 6)); // 10

// EXPLANATION:
// - function keyword hata diya
// - => use kiya
// - direct retu
// rn (implicit return)

//arrow function with no parameters
const greetArrow = () => "Hello Students!";

console.log(greetArrow()); // Hello Students!

//arrow function with one parameter (parentheses optional)
const squareArrow = n => n * n;

console.log("Square with Arrow Function:", squareArrow(5)); // 25




// ==========================================
// STEP 3: ARRAY BASICS
// ==========================================

// SYNTAX:
// const arrayName = [value1, value2, ...];
// Original array (collection of multiple values)
const nums = [1, 2, 3, 4, 5];

console.log("Array:", nums);

// ==========================================
// ARRAY + NORMAL FUNCTION
// ==========================================

// Function: ek number ka square return karega
function sq(n) {
  return n * n;
}

// map(): har element par function apply karta hai
const res = nums.map(sq);

console.log("Squared (Normal Function):", res);

// EXPLANATION:
// - map() har element par function apply karta hai
// - naya array return hota hai



// ==========================================
// STEP 5: ARRAY + ARROW FUNCTION
// ==========================================

// SYNTAX:
// array.map((param) => expression)


// Original array
const nums = [1, 2, 3, 4, 5];

// Using map() with arrow function
// n represents each element of the array
// n * n means square of each number
const sq = nums.map(n => n * n);

// Output result
console.log("Squared Array:", sq);
// EXPLANATION:
// - same kaam, but short syntax



// ==========================================
// STEP 6: MAP (2 EXAMPLES)
// ==========================================

// SYNTAX:
// array.map((element, index, array) => { return newValue })

// // Base array
const nums = [1, 2, 3, 4, 5];

// ==========================================
// Example 1: Double values
// ==========================================

// n = current element
// n * 2 = har number ko double karna
const dbl = nums.map(n => n * 2);

console.log("Double:", dbl);

// ==========================================
// Example 2: Marks → Pass/Fail System
const marks = [35, 80, 25, 90, 50];

const result = marks.map(m => m >= 40 ? "Pass" : "Fail");

console.log("Result:", result);



// ==========================================
// STEP 7: FILTER (2 EXAMPLES)
// ==========================================
// filter(): array ke elements ko filter karta hai based on condition
// SYNTAX:
// array.filter((element) => condition)

// Base array
const nums = [1, 2, 3, 4, 5];

// Even numbers
const even = nums.filter(n => n % 2 === 0);
console.log("Even:", even);

// Greater than 3
const gt3 = nums.filter(n => n > 3);
console.log("Greater than 3:", gt3);

// EXPLANATION:
// - filter() sirf wahi values return karta hai jo condition true kare
// - output array ka size chhota ho sakta hai



// ==========================================
// STEP 8: REDUCE (2 EXAMPLES)
// ==========================================
// reduce(): array ke elements ko ek single value me reduce karta hai
// SYNTAX:
// array.reduce((accumulator, currentValue) => result, initialValue)
//here accumulator is the value that holds the result of
//  the reduction so far,
//  and currentValue is the current element 
// being processed in the array. 
// initialValue is the starting value for the reduction.

/// Base array
const nums = [1, 2, 3, 4, 5];

// Sum
const sum = nums.reduce((a, c) => a + c, 0);
console.log("Sum:", sum);

// Explanation:
// - reduce() ek single value return karta hai
// here a is the accumulator and c is the current value.
// - 0 is the initial value for the accumulator
// - a + c means we are adding the current value to the accumulator
//  in first iteration, a is 0 and c is 1, so a becomes 1.
// - in second iteration, a is 1 and c is 2, so a becomes 3.
// - in third iteration, a is 3 and c is 3, so a becomes 6.
// - in fourth iteration, a is 6 and c is 4, so a becomes 10.
// - in fifth iteration, a is 10 and c is 5, so a becomes 15.
// - final result is 15, which is the sum of all numbers in the array.
// - accumulator result store karta hai

// Product
const prod = nums.reduce((a, c) => a * c, 1);
console.log("Product:", prod);
// EXPLANATION:
// here a is the accumulator and c is the current value.
// - 1 is the initial value for the accumulator
// - a * c means we are multiplying the current value to the accumulator
// - in first iteration, a is 1 and c is 1, so a becomes 1.
// - in second iteration, a is 1 and c is 2, so a becomes 2.
// - in third iteration, a is 2 and c is 3, so a becomes 6. 
// - in fourth iteration, a is 6 and c is 4, so a becomes 24.
// - in fifth iteration, a is 24 and c is 5, so a becomes 120.
// - final result is 120, which is the product of all numbers in the array. 
// - reduce() ek single value return karta hai
// - accumulator result store karta hai
// - currentValue array ke current element ko represent karta hai


// ==========================================
// STEP 9: REAL-LIFE COMBINED EXAMPLE
// ==========================================

// Students data
const students = [
  { name: "Rahul", marks: 80 },
  { name: "Priya", marks: 45 },
  { name: "Amit", marks: 60 },
  { name: "Sneha", marks: 30 },
  { name: "Vikram", marks: 90 }
];

// ==========================================
// FILTER → pass students (marks >= 50)
// ==========================================
const pass = students.filter(s => s.marks >= 50);

// ==========================================
// MAP → extract names
// ==========================================
const names = pass.map(s => s.name);

// ==========================================
// REDUCE → total marks
// ==========================================
const total = students.reduce((a, s) => a + s.marks, 0);
const totalStudents = students.length;
const average = total / totalStudents;

// Output
console.log("Pass Students:", pass);
console.log("Pass Names:", names);
console.log("Total Marks:", total);
console.log("Total Students:", totalStudents);
console.log("Average Marks:", average);

// EXPLANATION FLOW:
// 1. filter → selection (pass students)
// 2. map → transformation (names only)
// 3. reduce → calculation (total marks)
// 4. average → total / count
// 5. totalStudents to count number of students

// real life mei yeh 3 methods bahut common hai data processing ke liye