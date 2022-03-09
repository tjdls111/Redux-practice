import { createStore } from "redux";

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }]; // mutate state XX!!! 새로운 state를 만들자.
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== parseInt(action.id));
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log(reducer.state);
});

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};
const deleteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch({ type: DELETE_TODO, id });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};
const painttodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(painttodos);

form.addEventListener("submit", onSubmit);
