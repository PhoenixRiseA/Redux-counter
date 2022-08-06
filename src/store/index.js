import redux, { createStore } from "redux";
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  } else {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;