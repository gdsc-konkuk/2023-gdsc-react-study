const header = document.querySelector(".header");
const todoForm = document.querySelector(".header__input-form");
const todoInput = document.querySelector(".header__input-form input");
const todo = document.querySelector(".todo");
const todoList = document.querySelector(".todo__list");
const done = document.querySelector(".done");

const deleteTodo = (event) => {

}

const addTodo = (newTodo) => {
    const li = document.createElement("li");
    li.innerText = newTodo;
    const deleteButton = document.createElement("i");
    deleteButton.className = "fa-solid fa-delete-left"
    todoList.appendChild(li);
    todoList.appendChild(deleteButton);



}

const handleTodoSubmit = (event)=>{
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    console.log(newTodo);

    addTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);


console.log("Asdfd");