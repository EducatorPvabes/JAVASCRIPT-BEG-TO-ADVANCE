let employees = [];

function addEmployee() {
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    };

    employees.push(emp);
    alert("Employee Added!");
}

function displayEmployees() {
    let output = "";

    for (let emp of employees) {
        output += emp.name + " - " + emp.salary + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}
 
function filterEmployees() {
    //filter employees with salary greater than 50000
    //filter method is used to create a new array with all elements that pass the test implemented by the provided function.
    let result = 
    employees.filter(emp => emp.salary > 50000);

    let output = "";

    // for of loop is used to iterate over iterable objects like arrays, strings, etc.
    // // It allows you to loop through the values of an iterable object.
    // for of loop example:
//     let numbers = [10, 20, 30];

// for (let num of numbers) {
//     console.log(num);
// }


    for (let emp of result) {
        output += emp.name + " - " + emp.salary + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML = "Total Salary: ₹" + total;
}

function avgSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}

function countDept() {
    let deptInput = prompt("Enter Department:");
    let count = 0;

    for (let emp of employees) {
        if (emp.dept === deptInput) {
            //=== is a strict equality operator that checks for both value and type equality.
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        "Employees in " + deptInput + ": " + count;
}
