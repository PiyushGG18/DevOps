const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");


// Add a new todo
function addTodo() {

    const todoText = todoInput.value.trim();

    // Don't add empty todos
    if (todoText === "") {
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.classList.add("todo-item");

    // Create todo text
    const span = document.createElement("span");
    span.textContent = todoText;
    span.classList.add("todo-text");

    // Mark todo as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // Delete todo
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add list item to todo list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
}


// Add todo when button is clicked
addButton.addEventListener("click", addTodo);


// Add todo when Enter is pressed
todoInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTodo();
    }

});