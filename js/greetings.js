const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username); //내가 입력한 username을 공개하고 출력.
}

function paintGreetings(name) {
  greeting.innerText = `Welcome, ${name}`; //내가 입력한 username을 출력하고
  greeting.classList.remove(HIDDEN_CLASSNAME); //hidden을 없애 공개함.
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//실행하면 javascript가 가장 먼저 확인하는 부분.

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //js가 localstorage가 비어있는 걸 확인하고 form을 공개시킨다.
  //그 다음 form에 eventlistener를 걸어버리고 submit을 기다리게 하는 부분.
  //그리고 submit event가 발생하면 onLoginSubmit함수가 실행됨.
  //loginSubmit함수를 실행시키기 위한 단계임.
} else {
  paintGreetings(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
