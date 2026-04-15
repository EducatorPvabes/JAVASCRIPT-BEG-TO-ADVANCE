//json
// JSON stands for JavaScript Object Notation. 
// It is a lightweight data-interchange format that is easy for humans to read and write, 
// and easy for machines to parse and generate. 
// JSON is commonly used for transmitting data in web applications between a server and a client.


// json data example
const jsonData = {
    "name": "John Doe",
    "age": 30,
    "email": "abc@gmail.com",
    "isStudent": false,
    "courses": ["Math", "Science", "History"]
};

// Accessing JSON data
console.log("Name:", jsonData.name); // John Doe
console.log("Age:", jsonData.age); // 30
console.log("Email:", jsonData.email); // abc@gmail.com
console.log("Is Student:", jsonData.isStudent); // false
console.log("Courses:", jsonData.courses); // ["Math", "Science", "History"]
console.log("Courses:", jsonData.courses[0]); // Math
console.log("Courses:", jsonData.courses[1]); // Science
console.log("Courses:", jsonData.courses[2]); // History    

// JSON.stringify() → JavaScript object ko JSON string me convert karta hai
//stringify ka use tab hota hai jab hume JavaScript object ko server ko bhejna hota hai
//   ya local storage me save karna hota hai,
//  kyunki server aur local storage dono JSON format me data accept karte hain.
const jsonString = JSON.stringify(jsonData);
console.log("JSON String:", jsonString);

// JSON.parse() → JSON string ko JavaScript object me convert karta hai
//parse ka use tab hota hai jab hume server se ya local storage se JSON string ko JavaScript object me convert karna hota hai, 
// taki hum us data ke saath JavaScript me kaam kar sakein.     
const parsedData = JSON.parse(jsonString);
console.log("Parsed Data:", parsedData);

// Example of working with JSON data
const userData = {
    "username": "john_doe",
    "password": "12345",
    "email": "ab@gmail.com"
};
// Convert userData to JSON string before sending to server
const userDataString = JSON.stringify(userData);
console.log("User Data String:", userDataString);
// Simulating receiving JSON string from server and parsing it
const receivedDataString = '{"username":"john_doe","password":"12345","email":"ab@gmail.com"}';
const parsedReceivedData = JSON.parse(receivedDataString);
console.log("Parsed Received Data:", parsedReceivedData);

//
