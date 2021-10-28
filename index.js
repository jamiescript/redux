import { createStore } from "redux";

const initialState = { value: 0 };

// constants
const INCREMENT = "INCREMENT";
const ADD = "ADD";

// action creators
const increment = () => ({ type: INCREMENT });
const add = (number) => ({ type: ADD, payload: number });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }

  return state;
};

const store = createStore(reducer);

console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(add(10));
store.dispatch(add(5));
console.log(store.getState());
