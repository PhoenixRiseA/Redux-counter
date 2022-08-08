import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
