const header = document.querySelector(".header");
const todoForm = document.querySelector(".header__input-form");
const todoInput = document.querySelector(".header__input-form input");
const todoBox = document.querySelector(".todo");
const todoList = document.querySelector(".todo__list");
const done = document.querySelector(".done");
const doneList = document.querySelector(".done__list");

const TODOS_KEY = "TODOS"; //
const DONES_KEY = "DONES"

let todos = [];
let dones = [];

/*전체를 바꾸자
draw함수가 있고 변화가가 생길떄마다 새로그려주는 방식으로 바꾸자
todo/done  베열 2개
todo->done  배열을 옮기고 draw
*/

const saveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    localStorage.setItem(DONES_KEY, JSON.stringify(dones));
}

//중복확인 메소드
function isDuplicate(arr)  {
    const isDup = arr.some(function(x) {
      return arr.indexOf(x) !== arr.lastIndexOf(x);
    });
    return isDup;
}

const drawAll = () =>{
    drawTodo();
    drawDone();
}

function deleteTodo(event){
    //event.preventDefault();
    console.log("Sdf");
    const thisLi = this.closest("li"); //부모 찾기
    const thisSpan = this.previousSibling; //이전 형제 찾기 
    todos = todos.filter(item => item !== thisSpan.innerText);
    dones = dones.filter(item => item !== thisSpan.innerText);
    thisLi.remove();
    saveTodos();
}


function doneTodo(event){
    event.preventDefault();
    console.log("im doneTodo()");
    todos = todos.filter(item => item !== this.innerText);
    console.log(this.innerText);
    dones.push(this.innerText);

    saveTodos();
    drawAll();
}

function doneToTodo(event){
    event.preventDefault();
    console.log("im doneTodo()");
    dones = dones.filter(item => item !== this.innerText);
    console.log(this.innerText);
    todos.push(this.innerText);

    saveTodos();
    drawAll();
}

//todo 그리기
const drawTodo = ()=>{
    const ul = document.createElement("ul");
    todos.forEach((todo)=>{
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("i");
        span.innerText = todo;
        
        deleteButton.className = "fa-solid fa-delete-left";
        span.className = "todoList__span";

        li.appendChild(span);
        li.appendChild(deleteButton);
        ul.appendChild(li);

        span.addEventListener("click",doneTodo);
        deleteButton.addEventListener("click",deleteTodo);

    });
    todoList.innerHTML = ""; // todoList 내용을 초기화
    todoList.appendChild(ul); // ul 요소를 추가
}
//done 그리기
const drawDone = ()=>{
    const ul = document.createElement("ul");
    dones.forEach((done)=>{
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("i");
        span.innerText = done;
        
        deleteButton.className = "fa-solid fa-delete-left";
        span.className = "doneList__span";
        li.appendChild(span);
        li.appendChild(deleteButton);
        ul.appendChild(li);

        span.addEventListener("click",doneToTodo);
        deleteButton.addEventListener("click",deleteTodo);
    });
    doneList.innerHTML = ""; // todoList 내용을 초기화
    doneList.appendChild(ul); // ul 요소를 추가

    //이벤트처리
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
        drawTodo();
        drawDone();
    }
    saveTodos();
}


todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);
const savedDones = localStorage.getItem(DONES_KEY);
if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    drawTodo();
}
if(savedDones != null){
    const parsedDones = JSON.parse(savedDones);
    dones = parsedDones;
    drawDone();
}
