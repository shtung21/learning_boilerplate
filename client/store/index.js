import { createStore, applyMiddleware } from "redux";
import auth from "./auth";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  auth,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
