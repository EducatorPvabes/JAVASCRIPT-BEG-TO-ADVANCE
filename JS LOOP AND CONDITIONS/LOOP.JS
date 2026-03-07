// for loop

// while loop

// do...while loop

// for...of loop

// for...in loop

for(let i = 1; i <= 5; i++){
    console.log(i);
}

//for loop example
let sum = 0;

for(let i = 1; i <= 10; i++){
    sum = sum + i;
}

console.log(sum);

//Example 3: Table Print
let num = 5;

for(let i = 1; i <= 10; i++){
    // console.log(num + " x " + i + " = " + (num*i));
    console.log(`${num} x ${i} = ${num*i}`);
}
//while Loop
let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// do...while loop
let i1 = 1;

do{
    console.log(i);
    i1++;
}
while(i1<= 5);

//example
let i3 = 10;

do{
  console.log(i3);
}
while(i3 < 5);

//for...of Loop
let arr = [10, 20, 30, 40, 50];
for(let num of arr){
    console.log(num);
}
//for...in Loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in obj){
    console.log(key + ": " + obj[key]);
}

// Example: Sum of numbers in an array using for...of loop 
let numbers = [10,20,30,40];
let sum1 = 0;

for(let num of numbers){
   sum1 += num;
}

console.log(sum1);

//break statement
for(let i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }   
    console.log(i);
}

// continue statement
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}   
//1–100 print using loop
for(let i = 1; i <= 100; i++){
    console.log(i);
}

//Even numbers print
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
// Odd numbers print
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

//Factorial program
let numnew = 5;
let factorial = 1;
for(let i = 1; i <= numnew; i++){
    factorial *= i;
}
console.log(factorial);

//Array max number
let arr1 = [10, 20, 5, 40, 30];
let max = arr1[0];
for(let i = 1; i < arr1.length; i++){
    if(arr1[i] > max){
        max = arr1[i];
    }
    console.log(max);
}