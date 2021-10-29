import { createStore, combineReducers, applyMiddleware } from "redux";

const logger = (store) => (next) => (action) => {
  console.log("DISPATCHED ACTION: ", action);
  next(action);
};

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

const userReducer = (user = initialState.user, action) => {
  if (action.type === CHANGE_USER_EMAIL) {
    return {
      ...user,
      email: action.payload.email,
    };
  }
  return user;
};

const cartReducer = (cart = initialState.cart, action) => {
  if (action.type === ADD_PRODUCT) {
    return {
      ...cart,
      products: [...cart.products, action.payload.product],
    };
  }
  return cart;
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());
store.dispatch(changeUserEmail("jamie@gmail.com"));
console.log(store.getState());
