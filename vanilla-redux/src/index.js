import { createStore } from "redux";

const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const number = document.querySelector("#number");

// 리덕스- 데이터 한 곳에 모이게 함.
// 이 함수만 데이터를 바꿀 수 있음.
const countModifier = (count = 0, action) => {
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
addBtn.addEventListener("click", () => {
  countStore.dispatch({ type: "add" });
});

minusBtn.addEventListener("click", () => {
  countStore.dispatch({ type: "minus" });
});
