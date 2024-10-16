// Document Object  Model (DOM)

// Document Object Model (DOM)
// Access element using .getElementById()
let elementWithID = document.getElementById("first-div");

console.log("Element with ID:", elementWithID);

elementWithID.textContent = "Div 1";

let elementWithClass = document.getElementsByClassName

// Access elements using .getElementsByClassName()
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with Class:", elementsWithClass);

// Modify the .textContent property
elementsWithClass[1].textContent = "Div 2";

// Access elements using .getElementsByTagName()
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

listItems[0].style.color = "tomato";
listItems[0].style.backgroundColor = "aqua";

// .querySelector()
// Pass: .class-name, #id, tag

let orderedListItem = document.querySelector(".ordered-list");
console.log("First Ordered List Item:", orderedListItem);

orderedListItem.style.backgroundColor = "purple";
orderedListItem.style.color = "yellow";

// .querySelectorAll()
// Pass: .class-name, #id, tag

let headings = document.querySelectorAll("h3");
console.log("Headings:", headings);

// For Loop
// 1st: Variable Initialisation
// 2nd: Condition Expression
// 3rd: Increment/Decrement

for (let i = 0; i < headings.length; i++){
    let heading = headings[i];
    heading.style.backgroundColor = "crimson";
    heading.style.color = "white";
}

let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png")

let parentElementDiv = document.querySelector("#parent-element");
let createElementDiv = document.createElement("div");

createElementDiv.textContent = "Child Element";
parentElementDiv.appendChild(createElementDiv); 

let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();

let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function(){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";

    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode";

});