// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition(+):", num1 + num2); // 10+5=15
console.log("Subtraction(-):", num1 - num2); // 10-5=5
console.log("Multiplication(*):", num1*num2); // 10*5= 50
console.log("Division(/):", num1/num2); // 10/5= 2
console.log("Exponents(**):", num1**num2); // 10**5= 10000
console.log("Remainder(%):", num1 % 6); // 10/6 r. 4

// Order of Operations
// PEMDAS or BODMAS
// Parentheses, Exponents, Multiplication and Division (same level), and Addition and Subtraction (same level)
// Bracket, Order, Division, Multiplication, Addition, and Subtraction
let answer = 3 + 4 * (5 - 2) ** -2 / 2;
console.log(answer);

//2. String Expressions or Concatenation
console.log("HelloWorld");
console.log("Hello"+" "+"World!");

// Template Literals
const name = "John";
const greeting = `Hello, ${name}!`; // ${variableName}
console.log(greeting);

// 3. Comparison Operators
// Type coercion
console.log("Equal to(==):" , 5 == 5);
console.log("Equal to(==):", 5 == "5");

console.log("Not Equal to(!=):" , 5 != 5);
console.log("Not Equal to(!=):", 5 != "5");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 5 < 3);
console.log("Greater than or Equal to (>=):", 5 >= 3);
console.log("Less than or Equal to (<=):", 5 <= 3);

// Strict Equal to (===)
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === "5");

// Strict Not Equal to (===)
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", 5 !== "5");


// 4. Logical Operator
// && - AND - Amphersand
// || - OR - Pipe
// ! - NOT - Exclamation Mark
// true or false
let sunny = true;
let warm = false;

// AND: True if and only if all conditions are met (if all conditions return true)
console.log("Is it sunny AND warm?", sunny && warm);

// OR : True if at least 1 of the conditions is true
console.log("Is it sunny AND warm?", sunny || warm);

// NOT: Inverts the boolean value
console.log("NOT sunny:",!sunny);

// 5. Assignment Expressions
// assign values to a variable

let num3 = 10;
let num4 = 5;

// Addition Assignment '+='
num3 += num4; // 10 + 5 = 15 -> num 3
console.log(num3); // 15

// Subtraction Assignment '-='
num3 -= num4; // 15 - 5 = 10
console.log(num3); // 10

// Multiplication Assignment '*='
num3 *= num4; // 10 * 5 = 50
console.log(num3); // 50

// Division Assignment '/='
num3 /= num4; // 50 / 5 = 10
console.log(num3); // 10

// Exponent Assignment '**='
num3 **= num4; // 10**5
console.log(num3); // 100000

// Remainder Assignment '%='
num3 %= num4; // 100000 % 5
console.log(num3); // 0








