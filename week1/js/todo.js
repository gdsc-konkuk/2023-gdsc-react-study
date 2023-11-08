const header = document.querySelector(".header");
const todoForm = document.querySelector(".header__input-form");
const todoInput = document.querySelector(".header__input-form input");
const todo = document.querySelector(".todo");
const todoList = document.querySelector(".todo__list");
const done = document.querySelector(".done");
const doneList = document.querySelector(".done__list");

const TODOS_KET = "TODOS"; //

let todos = [];

/*전체를 바꾸자'
draw함수가 있고 새로운 변화가 생길떄마다 새로그려주는 방식으로 바꾸자
todo/done  베열 2개
todo->done  배열을 옮기고 그려주기
done -> todo 
*/

const saveTodos = () => {
    localStorage.setItem(TODOS_KET, JSON.stringify(todos));
}

function deleteTodo(event){
    event.preventDefault();
    const thisLi = this.closest("li"); //부모 찾기
    const thisSpan = this.previousSibling; //이전 형제 찾기 
    todos = todos.filter(item => item !== thisSpan.innerText);
    thisLi.remove();
    saveTodos();
}

function doneToTodo(event){
    event.preventDefault();
    const thisLi = this.closest("li");
    thisLi.classList.remove("middle-line");
    thisLi.remove();
    todoList.appendChild(thisLi);
    const todoListLi = document.querySelector(".todo__list span");
    todoListLi.addEventListener("click", doneTodo);
    saveTodos();

}

function doneTodo(event){
    event.preventDefault();
    const thisLi = this.closest("li");
    thisLi.className = "middle-line";
    doneList.appendChild(thisLi);

    const doneListLi = document.querySelector(".done__list span");
    doneListLi.addEventListener("click",doneToTodo);
    
}

const addTodo = (newTodo) => {
    const span = document.createElement("span");
    const li = document.createElement("li");
    span.innerText = newTodo;
    const deleteButton = document.createElement("i");
    deleteButton.className = "fa-solid fa-delete-left"
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    span.addEventListener("click", doneTodo);
    deleteButton.addEventListener("click", deleteTodo);

}

//중복확인 메소드
function isDuplicate(arr)  {
    const isDup = arr.some(function(x) {
      return arr.indexOf(x) !== arr.lastIndexOf(x);
    });
                           
    return isDup;
  }

const handleTodoSubmit = (event)=>{
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    console.log(todos);

    const tempTodos = [...todos];
    tempTodos.push(newTodo);
    if(!isDuplicate(tempTodos)) {
        todos.push(newTodo);
        addTodo(newTodo);
    }

    
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KET);
if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;

    parsedTodos.forEach((item) => {
        console.log(`this is the turn of ${item.text}`);
        addTodo(item);
    });
}
