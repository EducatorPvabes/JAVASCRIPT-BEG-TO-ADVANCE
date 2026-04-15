//JS Object literals
//Object literals are a way to create objects in JavaScript using a simple syntax. They are defined using curly braces {} and can contain properties and methods.

//Example of an object literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
//Accessing properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
//Calling a method
person.greet(); // Output: Hello, my name is John
//You can also add properties and methods to an object literal after it has been created
person.job = "Developer";
person.work = function() {
    console.log(this.name + " is working as a " + this.job);
}
person.work(); // Output: John is working as a Developer
//Object literals are a convenient way to create objects without the need for a constructor function or class. They are often used for simple data structures or when you want to create an object on the fly.
//You can also use object literals to create nested objects
const company = {
    name: "Tech Co",

    employees: {
        employee1: {
            name: "Alice",
            position: "Manager"
        },
        employee2: {
            name: "Bob",
            position: "Developer"
        }
    }
};
console.log(company.employees.employee1.name); // Output: Alice
console.log(company.employees.employee2.position); // Output: Developer

