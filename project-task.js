/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/
/*
// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users 
console.log("Welcome, Alice!");       //Identify repetitive patterns (e.g., greetings, calculations, list printing)
console.log("Welcome, Bob!");         //There are multiple greetings that can be refactored into a function
console.log("Welcome, Charlie!");     //Multiple console logs for greetings that could be abstracted

// Script 2 - Sum calculation                 //The calculations for sum and product are similar with identical structure
let num1 = 5, num2 = 10;                      
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/
/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

// Function 1: Greet a single user
function greetUser(name) {
    console.log(`Welcome, ${name}!`);
}
// Using the greetUser function to greet multiple users
// This function takes a name as a parameter and prints a greeting message
greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");

// Function 2: Calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}
// Using the calculateSum function to sum two numbers
// This function takes two numbers as parameters and returns their sum
let num1 = 5
let num2 = 10;
let sum = calculateSum(num1, num2);
displayCalculation("sum", num1, num2,
     sum);

// Function 3: Calculate product of two numbers
function calculateProduct(a, b) {
    return a * b;
}
// Using the calculateProduct function to multiply two numbers
// This function takes two numbers as parameters and returns their product
let product = calculateProduct(num1, num2);
displayCalculation("product", num1, num2, product);

// Function 4: Display calculation result
function displayCalculation(operation, num1, num2, result) {
    console.log("The " + operation + " of " + num1 + " and " + num2 + " is " + result);
}

// Function 5: Print all names from a list
function printNamesList(nameArray) {
    console.log("Names in the list:");
    for (let i = 0; i < nameArray.length; i++) {
        console.log(nameArray[i]);
    }
}
// Using the printNamesList function to print names from an array
// This function takes an array of names as a parameter and prints each name
let names = ["Alice", "Bob", "Charlie"];
printNamesList(names);

