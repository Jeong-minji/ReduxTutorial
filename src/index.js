import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const updateNumber = () => {
  number.innerText = countStore.getState();
};

add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
  updateNumber();
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
  updateNumber();
});
