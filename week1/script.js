const todoList = document.querySelector("#todo-listul");
const todoDone = document.querySelector("#done-listul");
const todoInput = document.querySelector("#todo-form-input");
const todoForm = document.querySelector("#todo-form");

let todos = [];

getTodo();
todoForm.addEventListener("submit", addNewTodo);

//로컬스토리지에 데이터 저장
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

//로컬 스토리지에 있는 데이터 가져와 렌더링
function getTodo() {
  const savedItems = localStorage.getItem("todos");
  todos = savedItems ? JSON.parse(savedItems) : [];
  renderTodo();
}

//todo 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodo();
  renderTodo();
}

// done으로 옮기기
function doneTodo(event) {
  const li = event.target.parentElement;
  const todo = todos.find((item) => item.id === parseInt(li.id));
  todo.isDone = !todo.isDone;
  saveTodo();
  renderTodo();
}

// //form 은 get/post를 통해 submit 하게되면 새로고침하는 특성을 가짐.
// //preventDefault() : 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드
function addNewTodo(event) {
    event.preventDefault();
    const todoItem = todoInput.value.trim();
  
    // 같은 것을 입력할 경우 push 가 안되게 구성, 공백 push 안되게 구성
    //include: 배열에 해당 값이 포함되어 있을 경우 true, 아닐경우 False
    //trim : 공백 제거후 문자가 남아 있다면 true, 없으면 False
    if (todoItem && !todos.some((todo) => todo.text === todoItem)) {
      const newTodoObj = {
        id: Date.now(),
        text: todoItem,
        isDone: false,
      };
      todos.push(newTodoObj);
      saveTodo();
      renderTodo();
    }
  
    todoInput.value = "";
  }

function renderTodo() {
  todoList.innerHTML = "";
  todoDone.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const donebutton = document.createElement("button");
    const deletebutton = document.createElement("button");

    li.id = todo.id;
    span.innerText = todo.text;
    donebutton.addEventListener("click", doneTodo);
    donebutton.innerText = "✔️";
    deletebutton.innerText = "❌";
    deletebutton.classList.add("delete");
    deletebutton.addEventListener("click", deleteTodo);
    li.appendChild(span);
    
    
    if (todo.isDone) {
        li.appendChild(deletebutton);
        todoDone.appendChild(li);
    }else{
        li.appendChild(donebutton);
        li.appendChild(deletebutton);
        todoList.appendChild(li);
    }

  });
}
