// Selecting elements
let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

// Change Heading
document.getElementById("changeTextBtn").onclick = 
function() {
    heading.innerText = input.value;
    //innerText is used to change the text content of an element.
// Change Event
input.onchange = function() {
    console.log("Input changed:", input.value);
};

// Change Background Color
document.getElementById("bgColorBtn").
 addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

// Change Font Size
document.getElementById("fontSizeBtn").
addEventListener("click", function() {
    heading.style.fontSize = "40px";
});

// Show/Hide Paragraph
let isVisible = true;
document.getElementById("toggleParaBtn").
onclick = function() {
    if (isVisible) {
        para.style.display = "none";
        isVisible = false;
    } else {
        para.style.display = "block";
        isVisible = true;
    }
};

// Reset Page
document.getElementById("resetBtn").
onclick = function() {
    location.reload();
};

// Mouse Over Event
heading.onmouseover = function() {
    heading.style.color = "blue";
};

  
