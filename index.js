import { createStore } from "redux";

const initialState = { value: 0 };

const incrementAction = {
  type: "INCREMENT",
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  }
  return state;
};

const store = createStore(reducer);

console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());
