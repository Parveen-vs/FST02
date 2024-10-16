// Step 1: Select DOM elements
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let filterTodo = document.querySelector("filter.todo");
let todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", trashOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos)

function addTodo(e){
    // Prevent the default form submit
    e.preventDefault();
    
    // Create the todo div container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create the new todo list item
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create complete button 
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = `<i class = "fas fa-check"></i>`
    todoDiv.appendChild(completeButton);

    // Create delete button
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    completeButton.innerHTML = `<i class = "fas fa-trash"></i>`
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteOrCompleteTodo(){

}

function filterTodos(){

}
