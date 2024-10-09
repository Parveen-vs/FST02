// Functions
// Reusable blocks of code that can be executed whenever called/needed.

// 1. Function Declaration
function greet(){
    console.log("Hello welcome to the world of functions!");
    console.log("Let's Goo!!");
}

// Function Call
greet();

// 2. Functions with parameters
// Parameters are placeholders
// Arguments - values passed to a function's parameters
function sum(num1, num2){
    console.log("Calculating..");
    return num1+num2;
}
console.log(sum(10,50));