// redux/store.js
import { legacy_createStore, combineReducers } from "redux";
import { counterReducer } from "./CounterReducer"; 
import { themeReducer } from "./themeReducer";    

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export const store = legacy_createStore(rootReducer);
