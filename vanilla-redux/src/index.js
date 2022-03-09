const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const number = document.querySelector("#number");

let counter = 0;
number.innerHTML = counter;

const updateText = () => {
  number.innerHTML = counter;
};

const handleAdd = () => {
  counter += 1;
  updateText();
};

const handleMinus = () => {
  counter -= 1;
  updateText();
};

addBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);
