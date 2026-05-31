// Step 1: Create an empty array to store all employee objects
let employees = [];

// Step 2: Function to read input fields and save the data
function addEmployee() {
    // Create a single employee object from the input fields
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value), // Convert text to number
        dept: document.getElementById("dept").value
    };

    // Add the new employee object to the end of the array
    employees.push(emp);
    
    // Show a confirmation message
    alert("Employee Added!");
}

// Step 3: Function to show all employees in the output area
function 
displayEmployees() {
    let output = ""; // Start with an empty string

    // Loop through every employee in the array
    for (let emp of employees) {
        // Add a line of text for each employee to the output string
        output += emp.name + " - ₹" + emp.salary + "<br>";
    }

    // Display the complete string inside the HTML div with id 'output'
    document.getElementById("output").innerHTML = output;
}

// Step 4: Function to show only employees earning more than 50,000
function filterEmployees() {
    // The filter() method creates a NEW array containing only employees who pass the test
    let result = employees.filter(emp => emp.salary > 50000);

    let output = "";

    // Loop through the filtered list and build the display string
    for (let emp of result) {
        output += emp.name + " - ₹" + emp.salary + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}

// Step 5: Function to calculate and display the sum of all salaries
function totalSalary() {
    let total = 0; // Initialize counter

    // Loop through all employees and add their salary to 'total'
    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML = 
    "Total Salary: ₹" + total;
    "`Total Salary: ₹${total}`"; // Using template literals for better readability
}

// Step 6: Function to calculate and display the average salary
function avgSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    // Calculate average by dividing total by the number of employees
    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "Average Salary: ₹" + avg;
}

// Step 7: Function to count how many employees belong to a specific department
function countDept() {
    // Ask the user to type a department name
    let deptInput = prompt("Enter Department:");
    let count = 0; // Initialize counter

    // Loop through the array and increase count if the department matches
    for (let emp of employees) {
        if (emp.dept === deptInput) {
            count++;
        }
    }

    document.getElementById("output").innerHTML = "Employees in " + deptInput + ": " + count;
}