// ===============================
// Example 1
// getElementById()
// ===============================

function changeText(){

// DOM se element select kar rahe hain
let text = document.getElementById("demoText");

// text change karna
text.textContent = "Text Changed Successfully!";

}



// ===============================
// Example 2
// querySelector()
// ===============================

function changeColor(){

// first element select karega jo class match kare
let element = document.querySelector(".colorText");

// CSS change karna
element.style.color = "red";

}



// ===============================
// Example 3
// Input value read karna
// ===============================

function showName(){

// input box ka value lena
let name = document.getElementById("nameInput").value;

// result paragraph select
let result = document.getElementById("result");

// value show karna
result.textContent = "Hello " + name;

}



// ===============================
// Example 4
// createElement + appendChild
// ===============================

function addItem(){

// new li element create
let li = document.createElement("li");

// text add karna
li.textContent = "New List Item";

// ul select
let list = document.getElementById("list");

// li ko ul ke andar add karna
list.appendChild(li);

}



// ===============================
// Example 5
// remove element
// ===============================

function removeText(){

let element = document.getElementById("removeMe");
let element2 = document.getElementById("removeMe2");
element.remove();
element2.remove();

}



// ===============================
// Example 6
// querySelectorAll
// ===============================

function changeAll(){

// multiple elements select
let items = document.querySelectorAll(".multi");

// loop se sab change karna
items.forEach(function(item){

item.style.color = "blue";

});

}