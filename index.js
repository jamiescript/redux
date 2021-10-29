import { createStore } from "redux";

// constants
const CHANGE_USER_EMAIL = "CHANGE_USER_EMAIL";
const ADD_PRODUCT = "ADD_PRODUCT";

// action creators
const changeUserEmail = (email) => ({
  type: CHANGE_USER_EMAIL,
  payload: { email },
});
const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { product },
});

const initialState = {
  user: {
    name: "Jamie",
    email: "jamie@outlook.com",
  },
  cart: {
    products: [],
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === CHANGE_USER_EMAIL) {
    return {
      ...state,
      user: {
        ...state.user,
        email: action.payload.email,
      },
    };
  }
  if (action.type === ADD_PRODUCT) {
    return {
      ...state,
      cart: {
        ...state.cart,
        products: [...state.cart.products, action.payload.product],
      },
    };
  }
  return state;
};

const store = createStore(reducer);
console.log(store.getState());
store.dispatch(changeUserEmail("jamie@gmail.com"));
console.log(store.getState());
