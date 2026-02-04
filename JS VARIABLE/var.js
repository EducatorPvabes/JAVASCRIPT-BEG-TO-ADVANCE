// var name= "John Doe";
// var age= 30;
// var isEmployed= true;
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// var age= 50;
// console.log(age);
// Why This Is Dangerous

// JavaScript allows same variable name again

// Old value (50) is silently removed

// No error is shown

// You may not realize your data is changed

// let Does NOT Allow Redeclaration
// let city= "New York";
// console.log(city);
// let city= "Los Angeles"; // This will cause an error
// console.log(city);

// This error protects you from mistakes.

// That is why let is safer.

if(true){
    var age= 30;
}
    console.log(age);
// This will cause an error because age
//  is not defined outside the block.

// const means fixed value.
const PI= 3.14;
console.log(PI);
PI= 3.14159; // This will cause an error
console.log(PI);
// const variables cannot be reassigned.