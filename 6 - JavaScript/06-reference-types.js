// Reference data type: Array

let fruits = ["Banana", "Mango", "Durian", "Mango", "Pineapple"];
console.log("Fruits, fruits", fruits.length);

// Array Indexing
console.log("First Fruits:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length-1]);

// Method - function that is associated with an object or class.

// .slice() method - access a portion of an array 
// 1st Argument: starting index
// 2nd Argument: element not included
let sliced_fruits = fruits.slice(1,3);
console.log(sliced_fruits);

// Updates elements/s
fruits[0] = "Dewberry",
console.log("Updated Fruits:", fruits);

// Adding elements
// .push() - add element at the end of the array
fruits.push("Grapes");
console.log("Updated Fruits:", fruits);

// .splice() method - add or delete elements at a specific index
// 1st Argument - starting index
// 2nd Argument - deleteCount
// 3rd Argument - element/s you want to add

fruits.splice(1,0, "Rambutan");
fruits.splice(1,1);
console.log("Updated Fruits:",fruits);

// .forEach() method recieves a function as its argument and executes it once for every element in the array

fruits.forEach(function functionName(fruit){
    console.log("Fruit:", fruit);
});

// Search for elements
// .includes() method - checks if an element exists
console.log("Is Durian Included in the array?:", fruits.includes("Durian"));

// .indexOf() - find the index of a certain element
let index = fruits.indexOf("Durian");
console.log("Index of Durian:",index);
