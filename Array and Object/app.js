// In JavaScript, there are two main data types for storing collections of data: objects and arrays.    
// Objects are used to store key-value pairs, while arrays are used to store ordered lists of values.



// object data type
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.city); // New York

// array data type
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
console.log(numbers[3]); // 4

//array with multiple data types
let mixedArray = [1, "Hello", true, 
    { name: "Alice" }, 
    [1, 2, 3]];
console.log(mixedArray[0]); // 1    
console.log(mixedArray[1]); // Hello
console.log(mixedArray[2]); // true
console.log(mixedArray[3]); // { name: "Alice" }
console.log(mixedArray[4]); // [1, 2, 3]

//normal function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // 6

//arrow function
let add = (a, b) => a + b;
console.log(add(2, 3)); // 5

//forEach on array
//forEach executes a provided function once for each array element
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
// Output:
// apple
// banana
// cherry
//forEach on object

let car = {
    make: "Toyota", 
    model: "Camry",
    year: 2020
};
Object.keys(car).forEach(key => console.log(`${key}: ${car[key]}`));









//map on array
//map creates a new array by applying a function to each element of the original array
let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.
map((num) => num * num);
console.log(squaredArray); // [1, 4, 9, 16, 25]

//filter on array
//filter creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = [1, 2, 3, 4, 5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); // [2, 4]

//reduce can be used to reduce an array to a single value by applying a function to each element of the array and accumulating the result
//reduce on array
//accumulator is the accumulated value previously returned in the last invocation of the callback, or initialValue, 
//if supplied and currentValue is the current element being processed in the array
let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // 15