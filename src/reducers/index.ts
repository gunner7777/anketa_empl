import { combineReducers } from "redux";
import { anketa } from "./anketa";
import { user } from "./user";
import { app } from "./app";

export const rootReducer = combineReducers({
  anketa,
  user,
  app,
});
