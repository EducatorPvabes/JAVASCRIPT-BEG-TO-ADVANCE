function calculateResult() {

let numSubjects = parseInt(document.getElementById("numSubjects").value);

if (isNaN(numSubjects) || numSubjects <= 0) {
alert("Please enter a valid number of subjects");
return;
}

let totalMarks = 0;
let marksArray = [];

for (let i = 1; i <= numSubjects; i++) {

let mark = parseFloat(prompt("Enter marks for Subject " + i));

if (isNaN(mark) || mark < 0 || mark > 100) {

alert("Invalid marks");

return;

}

marksArray.push(mark);

totalMarks += mark;

}

let averageMarks = totalMarks / numSubjects;

averageMarks = parseFloat(averageMarks.toFixed(2));

let grade;

if (averageMarks >= 90) grade = "A";
else if (averageMarks >= 75) grade = "B";
else if (averageMarks >= 60) grade = "C";
else if (averageMarks >= 40) grade = "D";
else grade = "F";

let resultStatus = averageMarks >= 40 ? "PASS" : "FAIL";

let resultBox = document.getElementById("resultBox");

resultBox.innerHTML = `

<div class="card">

<div class="card-body">

<h4 class="card-title text-center">Result Summary</h4>

<ul class="list-group list-group-flush">

<li class="list-group-item">Subjects : ${numSubjects}</li>

<li class="list-group-item">Total Marks : ${totalMarks}</li>

<li class="list-group-item">Average : ${averageMarks}</li>

<li class="list-group-item">Grade : ${grade}</li>

<li class="list-group-item">Result : ${resultStatus}</li>

</ul>

</div>

</div>

`;

resultBox.classList.remove("d-none");

}