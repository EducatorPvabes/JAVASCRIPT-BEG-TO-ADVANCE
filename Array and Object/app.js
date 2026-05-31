// In JavaScript, there are two main data types for storing collections of data: objects and arrays.    
// Objects are used to store key-value pairs, while arrays are used to store ordered lists of values.



// object data type
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

console.log(person.name); // John
console.log(person.age); // 30
console.log(person.city); // New York
typeof
console.log(typeof(person));

// array data type
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
console.log(numbers[3]); // 4

//array with multiple data types
let mixedArray = [1, "Hello", true,[1, 2, 3], { name: "Alice", age: 25 }];
console.log(mixedArray[0]); // 1    
console.log(mixedArray[1]); // Hello
console.log(mixedArray[2]); // true
console.log(mixedArray[3]); // [1, 2, 3]
console.log(mixedArray[4]); // { name: "Alice", age: 25 }
//to find the length of array
console.log(numbers.length); // 5
console.log(mixedArray.length); // 4


//normal function with no parameters
function greet() {
    console.log("Hello, World!");
}
greet(); // Hello, World!


//normal function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // 6

//function expression
let divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 2)); // 5
//normal funtion with expression
let add = function(a, b) {
    return a + b;
};
console.log(add(5, 7)); // 12

//arrow function with no parameters
let sayHi = () => console.log("Hi!");
sayHi(); // Hi! 

//arrow function with single parameters
let square = x => x * x;
console.log(square(4)); // 16
//arrow function with one parameters
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice"); // Hello, Alice!


//arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5



//map on array
let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.map((num) => num * 5);
console.log(squaredArray); // [5, 10, 15, 20, 25]



//filter on array
//filter creates a new array with all elements
//  that pass the
//  test implemented by the provided function
let evenNumbers = [1, 2, 3, 4, 5];
let filteredEvenNumbers = evenNumbers.
filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); // [2, 4]

//reduce can be used to reduce an array to
//  a single value by applying a function 
// to each element of the array and accumulating the result
//reduce on array
//accumulator is the accumulated value previously returned in the last invocation of the callback, or initialValue, 
//if supplied and currentValue is the current element being processed in the array
let sum = [1, 2, 3, 4, 5];
let total = 
sum.reduce((accumulator, currentValue)
 => accumulator + currentValue, 0);
console.log(total); // 15

//map reduce filter on object student marks
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];
//map to get marks of all students
let marks = students.map(student => student.marks);
console.log(marks); // [85, 92, 78]
//map to get names of all students
let names = students.map(student => student.name);
console.log(names); // ["Alice", "Bob", "Charlie"]
//filter to get students with marks greater than 80

let topStudents = students.filter
(student => student.marks > 80);
console.log(topStudents); // [{ name: "Alice", marks: 85 }, { name: "Bob", marks: 92 }]
//reduce to get total marks of all students

let totalMarks = students.reduce
((acc, student) => acc + student.marks, 0);
console.log(totalMarks); // 255


//for..of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
//  It provides a simpler syntax compared to traditional for loops and is more readable when you want to access the values directly.
// it works on the values of the iterable object, not on the indices or keys. It is commonly used to loop through arrays and other iterable collections.

//for..in loop is used to iterate over the enumerable properties of an object. It is commonly used to loop through the keys of an object or the indices of an array. 
// It works on the keys or indices of the object, not on the values. When used with arrays, it iterates over the indices, which can lead to unexpected results if the array has non-numeric keys or if the order of iteration matters.
// for...of example
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in example [array]
for (let i in fruits) {
    console.log(fruits[i]);
}
// for...in example [object]
let car = {
    make: "Toyota",
    model: "Camry", 
    year: 2020
};
for (let key in car) {
    console.log(key + ": " + car[key]);
}

//for...in on array
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(index + ": " + colors[index]);
}



// mixed object
let mixedObject = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    greet: function() {
        console.log("Hello!");}

         
};
console.log(mixedObject); // { name: "Alice", age: 25, hobbies: ["reading", "traveling", "coding"], address: { street: "123 Main St", city: "New York", country: "USA" }, greet: [Function: greet] }
console.log(mixedObject.name); // Alice
console.log(mixedObject.age); // 25
console.log(mixedObject.hobbies); // ["reading", "traveling", "coding"]
console.log(mixedObject.hobbies[0]); // reading
console.log(mixedObject.hobbies[1]); // traveling
console.log(mixedObject.hobbies[2]); // coding
console.log(mixedObject.address); // { street: "123 Main St", city: "New York", country: "USA" }

console.log(mixedObject.address.street); // 123 Main St
console.log(mixedObject.address.city); // New York
console.log(mixedObject.address.country); // USA

mixedObject.address.greet(); // Hello!

// object inside array
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(people[0]); // { name: "Alice", age: 25 }
console.log(people[1].name); // Bob
console.log(people[2].age); // 35

// array inside object
let company = {
    name: "Tech Corp",
    employees: ["Alice", "Bob", "Charlie"]
};
console.log(company.name); // Tech Corp
console.log(company.employees); // ["Alice", "Bob", "Charlie"]
console.log(company.employees[0]); // Alice
console.log(company.employees[1]); // Bob
console.log(company.employees[2]); // Charlie

//for..of loop on array of objects
let students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
for (let student of students) {
    console.log(student.name + " is " + student.age + " years old.");
    //by templete literal
    console.log(`${student.name} is ${student.age} years old.`);
}

//for...of loop on object with array
let company = {
    name: "Tech Corp",
    employees: ["Alice", "Bob", "Charlie"]
};
for (let employee of company.employees) {
    console.log(employee + " works at " + company.name);
    //by templete literal
    console.log(`${employee} works at ${company.name}`);
}
//for...in loop works on keys of object
//for...in loop on object with array
let company = {
    name: "Tech Corp",
    employees: ["Alice", "Bob", "Charlie"]
};
for (let key in company) {
    console.log(key + ": " + company[key]);
}


