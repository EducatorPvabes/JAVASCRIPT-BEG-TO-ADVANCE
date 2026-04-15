// for loop example
// SYNTAX: for (initialization; condition; increment/decrement) { }
// for loop is used when we know the number of iterations in advance
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; // sum = sum + i
}

console.log("Sum of first 5 natural numbers:", sum); // 15


// while loop example
// SYNTAX: while (condition) { }
// while loop is used when we don't know the number of iterations in advance
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
console.log("Final Count:", count); // 6

// do...while loop example
// SYNTAX: do { } while (condition)
// do...while loop is used when we want the loop to execute at least once
let num = 1;
do {
    console.log("Number:", num);
    num++;
}
while (num <= 5);
console.log("Final Number:", num); // 6

// for...of loop example
// SYNTAX: for (let variable of array) { }
// for...of loop is used to iterate over values of an iterable (like arrays)
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// for...in loop example
// SYNTAX: for (let key in object/array) { }
// for...in loop is used to iterate over keys of an object or indices of an array
const person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log("Key:", key, "Value:", person[key]);
}
// in this code, key will be "name", "age", "city" and person[key] 
// will give the corresponding values of the object.

// for in loop with arrays
const colors = ["Red", "Green", "Blue"];
for (let index in colors) {
    console.log("Index:", index, "Color:", colors[index]);
}

// forEach loop example
// SYNTAX: array.forEach((value, index) => { })
// forEach is an array method used to execute a function for each element in the array
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value, index) {
    console.log("Index:", index, "Value:", value);
}); 

// Arrow function version
numbers.forEach((val, idx) => {
    console.log("Arrow →", idx, val);
}
);

// break and continue example
// break is used to exit the loop completely
// continue is used to skip the current iteration and move to the next one
//break syntax: break;
//continue syntax: continue;

console.log("Break & Continue:");
// BREAK → loop stop

for (let b = 0; b < 5; b++) {
    if (b === 3) {
        break; // loop will stop when b is 3
    }
    console.log("Break Example:", b);
}

// CONTINUE → skip
for (let c = 0; c < 5; c++) {
    if (c === 2) {
        continue; // when c is 2, it will skip the rest of the loop and move to the next iteration
    }
    console.log("Continue Example:", c);
}

// in this code, when c is 2, it will not print "Continue Example: 2" and will move to c = 3 directly.

// 






















