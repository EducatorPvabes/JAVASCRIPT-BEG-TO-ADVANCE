let age = 20;

if(age >= 18){
    console.log("You are eligible to vote");
}
// if...else statement
let num = 10;
if(num % 2 == 0){
    console.log(num + " is even");
}
else{
    console.log(num + " is odd");
}
// if...else if...else statement
let marks = 85;
if(marks >= 90){
    console.log("Grade: A");
}
else if(marks >= 80){
    console.log("Grade: B");
}   
else if(marks >= 70){
    console.log("Grade: C");
}
else if(marks >= 60){
    console.log("Grade: D");
}
else{
    console.log("Grade: F");
}   

// if inside if statement
let username = "admin";
let password = "1234";

if(username === "admin1"){

    if(password === "1234"){
        console.log("Login Successful");
    }
    else{
        console.log("Wrong Password");
    }

}
else{
    console.log("Invalid Username");
}