// 🔹 Selecting elements from HTML
let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");


// 🔹 1. Change Heading Text when button is clicked
// onclick runs function when button is clicked
document.getElementById("changeTextBtn").onclick =
 function () {
    // innerText changes the text of heading
    heading.innerText = input.value;
};


// 🔹 2. Input Change Event
// onchange runs when user changes input and clicks outside
input.onchange = function () {
    console.log("Input changed:", input.value);
};

document.getElementById("bgColorBtn").
addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontFamily = "Arial"; // change font family to Arial
});
 
// 🔹 4. Change Font Size of Heading
document.getElementById("fontSizeBtn").
addEventListener("click", function () {
    heading.style.fontSize = "40px";
});


// 🔹 5. Show / Hide Paragraph
let isVisible = true;

document.getElementById("toggleParaBtn").onclick = 
function () {
    if (isVisible) {
        heading.style.color = "blue"; // change heading color to blue when hiding paragraph
        para.style.display = "none";   // hide
        isVisible = false;
    } else {
        heading.style.color = "black"; // change heading color back to black when showing paragraph
        para.style.display = "block";  // show
        isVisible = true;
    }
};


// 🔹 6. Reset Page
document.getElementById("resetBtn").onclick = 
function () {
    location.reload(); // reloads the page
};


// 🔹 7. Mouse Over Event (hover on heading)
heading.onmouseover = function () {
    heading.style.color = "red";
};