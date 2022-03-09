import { createStore } from "redux";

const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const number = document.querySelector("#number");

// 변수를 사용하면, 실수를 줄일 수 있음
const add = "add";
const minus = "minus";

// 리덕스- 데이터 한 곳에 모이게 함.
// 이 함수만 데이터를 바꿀 수 있음.
// state를 리턴.
const countModifier = (count = 0, action) => {
  // if-else if -else보다 switch문이 복 편함
  switch (action.type) {
    case add:
      return count + 1;
    case minus:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
addBtn.addEventListener("click", () => {
  // action은 오브젝트여야 하고, type이 필수로 있어야 함.
  countStore.dispatch({ type: add });
});

minusBtn.addEventListener("click", () => {
  countStore.dispatch({ type: minus });
});
