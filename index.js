import { createStore } from "redux";

const initialState = { value: 0 };

const incrementAction = {
  type: "INCREMENT",
};

const addAction = (number) => {
  return {
    type: "ADD",
    payload: number,
  };
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  }

  if (action.type === "ADD") {
    return { value: state.value + action.payload };
  }

  return state;
};

const store = createStore(reducer);

console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(addAction(10));
store.dispatch(addAction(5));
console.log(store.getState());
