const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); //html의 ul

const TODOS_KEY = "todos";

let toDos = []; //새로고침하고 application이 시작될 때마다 toDos는 항상 비어있기 때문에 새로운 값만 저장됨. 그래서 newToDo를 작성하고 submit할 때마다 newToDo를 toDos(빈 array)에 그냥push만 하게된다. 그리고 그 toDo를 저장할 때 그저 새로운 toDo들만 포함하고 있는 array를 저장하는 것. 단지 newTodo들만 빈 toDos Array에 추가해서 newToDo들만 localstorage에 저장하고 있는것. 즉, 우리가 갖고 있던 toDos의 이전 복사본을 잊어버리고 있는 상황. 그걸 방지하기 위해서 일단 let으로 후에 이전값인 parsedTodos로 업데이트(저장) 가능하도록.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * 누른 버튼의 부모에 접근해서 그 부모 li를 지워주는 함수
 */
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

/**
 * toDo를 입력하면 화면에 paint해주는 함수.
 */
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

/**
 * toDo를 입력하면 그 값을 newTodo에 저장->그걸 Object화해서 toDos array(데이터베이스)에 저장->화면에 paint->toDos array의 값을 localStorage에 stringify하여 저장하는 함수.
 */
function handleToDoSubmit(event) {
  event.preventDefault(); //submit의 기본event인 새로고침을 막아준다.
  const newTodo = toDoInput.value; //Todo의 입력값을 저장해주고
  toDoInput.value = ""; //입력칸을 비워준다.

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj); //데이터베이스에 입력값을 push.
  paintToDo(newTodoObj); //HTML화면에도 object를 보내줌. 따라서 paintToDo함수도 objec의 text만을 출력하게 수정해줌.
  saveToDos(); //push된 데이터베이스 Object를 최종적으로 localStorage에 저장.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/**localStorage에 저장돼있는 string형태의 toDos를 JSON.parse()를 이용해 ""를 제거하고 array형태로 받아온다.
  getItem으로 호출하면 'value'형태로 호출된다. ''가 붙은 상태로 호출된다는 말.
  따라서 JSON.parse(savedToDos)로 getItem의 ''를 삭제 ['a','b'','c', ...]의 배열형태 */
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //localStorage에 toDO들이 저장돼있다면~
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //array toDos에 parsedToDos를 넣어서 전에 있던 toDos들을 복원한다.
  parsedToDos.forEach(paintToDo); //배열(array) parsedToDos가 가지고 있는 각각의 아이템(item)에 대해서 ()안의 함수(function)를 실행해줘. 라는 뜻
} //paintToDo는 text를 받고 JS가 그 텍스트를 paintToDo에게 전달 -> paintToDo("a"), paintToDo("b"), ...
